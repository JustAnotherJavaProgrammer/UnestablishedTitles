import { browser } from "$app/environment";
import generateCertificate, { type PdfResponse } from "./generate";
// Hide the worker shenanigans from the rest of the code

let pdfWorker: Worker | null = null;
{
    if (browser && window.Worker) {
        try {
            const worker = new Worker(new URL("$lib/generator/generate.ts", import.meta.url), { type: "module" });
            // check if worker works correctly
            const pongListener = (ev: MessageEvent) => {
                if (ev.data === "pong") {
                    pdfWorker = worker;
                    worker.removeEventListener("message", pongListener);
                }
            };
            worker.addEventListener("message", pongListener, { once: true });
            worker.postMessage("ping");
        } catch (e) {
            console.error("Failed to create worker", e);
        }
    }
}
export function generatePdf(title: string | string[], name: string | string[]): ReturnType<typeof generateCertificate> {
    if (pdfWorker == null) return generateCertificate(title, name);
    console.log("Trying workers!");
    return new Promise((resolve, reject) => {
        if (pdfWorker == null) throw new Error("Worker is not available, but should have been.");
        pdfWorker.addEventListener(
            "message",
            (ev) => {
                const data = ev.data as PdfResponse;
                if (data.type === "error") {
                    reject(new Error(data.message));
                } else if (data.type === "success") {
                    resolve(data.pdf);
                }
            },
            { once: true }
        );
        pdfWorker.postMessage({ type: "generate", title, name });
    });
}
