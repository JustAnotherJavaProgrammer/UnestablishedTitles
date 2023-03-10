import { PDFDocument } from "pdf-lib";
import { PageSizes, PDFImage, PDFPage } from "pdf-lib/cjs/api";
// @ts-ignore
import oldPaper from "$lib/assets/img/certificate/kiwihug-3gifzboyZk0-unsplash.jpg?rotate=270";

const title = "Proclamation";
const firstLine = "Whereas,"
const secondLine = (title: string, name: any) => `${title} ${name}`;

export default async function generateCertificate() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([PageSizes.A4[1], PageSizes.A4[0]]); // A4 landscape
    const img_oldPaper = await pdfDoc.embedJpg(await (await fetch(oldPaper)).arrayBuffer());
    fullPageImage(page, img_oldPaper);
    return pdfDoc.saveAsBase64({ dataUri: true });
}

function fullPageImage(page: PDFPage, image: PDFImage) {
    let scale = page.getHeight() / image.height;
    if (image.width * scale < page.getWidth()) {
        scale = page.getWidth() / image.width;
    }
    page.drawImage(image, {
        x: (page.getWidth() - (image.width * scale)) / 2,
        y: (page.getHeight() - (image.height * scale)) / 2,
        width: image.width * scale,
        height: image.height * scale
    });
}