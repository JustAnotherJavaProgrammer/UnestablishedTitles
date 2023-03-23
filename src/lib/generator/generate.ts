import { PDFDocument } from "pdf-lib";
import { BlendMode, PageSizes, PDFImage, PDFPage, rgb, type PDFPageDrawTextOptions } from "pdf-lib/cjs/api";
import fontkit from "@pdf-lib/fontkit";
// @ts-ignore
import oldPaper from "$lib/assets/img/certificate/kiwihug-3gifzboyZk0-unsplash.jpg?rotate=270";
import coatOfArms from "$lib/assets/img/certificate/coat_of_arms.png";
import { Alignment, fitTextWithinRect, maxFontSizeWithinBounds, type Rectangle } from "./textRendering";
import * as numbers from "./numbers";

const startCharlesReign = new Date("2022-09-08");

const docTitle = "Proclamation";
const firstLine = "Whereas,"
const secondLine = (title: string | string[], name: string | string[]) => {
    if (Array.isArray(title) && Array.isArray(name)) {
        return title.map((title, index) => `${title} ${name[index]}`.toLocaleUpperCase()).join(" and ")
    }
    return `${title} ${name}`.toLocaleUpperCase()
};
const topLeft = (title: string | string[]) => `(hereafter referred to as ${Array.isArray(title) ? title.join(" and ") : title}), ` +
    `${Array.isArray(title) && title.length !== 1 ? "have" : "has"}, by way of notice, ` +
    `this ${(() => {
        const day = new Date().getDate();
        if (numbers.nth.has(day))
            return numbers.nth.get(day);
        return day;
    })()} day of ${(() => {
        const month = new Date().getMonth() + 1;
        if (numbers.months.has(month))
            return numbers.months.get(month);
        return month;
    })()} in the year ${(() => {
        const year = new Date().getFullYear();
        if (numbers.years.has(year))
            return numbers.years.get(year);
        return year;
    })()}, in the ${(() => {
        const timeOfReign = new Date().getTime() - startCharlesReign.getTime();
        const years = Math.floor(timeOfReign / (1000 * 60 * 60 * 24 * 365.25)) + 1;
        if (numbers.nth.has(years))
            return numbers.nth.get(years);
        return years;
    })()} year of the Reign of ` +
    `Our Sovereign King Charles the Third, by the Grace of God, of the United Kingdom of Great Britain and Northern Ireland ` +
    `and of His other Realms and Territories King, Head of the Commonwealth, Defender of the Faith, ` +
    `delivered unto us the intention to download, and us with the intention to generate, ` +
    `Unestablished Titles has agreed with the ${Array.isArray(title) ? title.join(" and ") : title} to bequeath unto them an indubitably nugatory certificate ` +
    `of their preferred form of address, in particular, a printable PDF data file with the intent of furthering the cause ` +
    `of that oddish choice being respected by others, by Unestablished ` +
    `Titles, in the format of a PDF document, and hereinafter referred to as 'THE CERTIFICATE'. ` +
    `Unestablished Titles agrees to dedicate THE CERTIFICATE in the name of the Lord to the ${Array.isArray(title) ? title.join(" and ") : title}, ` +
    `in order for them to share their favourite form of address with the wider world,` +
    `altogether or as part of a larger set of certificates.`;
const topRightFirstLine = "Now this deed witnesseth as follows";
const topRight = (title: string | string[]) => `Whereas, THE CERTIFICATE has been generated free of charge and ` +
    `made available to the ${Array.isArray(title) ? title.join(" and ") : title} in relation to a scheme of stupid novelty gifts, Unestablished Titles, ` +
    `in CONSIDERATION of all sums neither due nor paid to us by the ${Array.isArray(title) ? title.join(" and ") : title}, of which we don't acknowledge receipt of, ` +
    `has bequeathed a dedication in favour of the ${Array.isArray(title) ? title.join(" and ") : title}, their assignees and their successors all and whole, ` +
    `but without the rights thereto over the larger subjects and its successors in title of the larger subjects and ` +
    `all others authorised by it, which remain with Unestablished Titles. ` +
    `The ${Array.isArray(title) ? title.join(" and ") : title} hereby covenant${Array.isArray(title) && title.length !== 1 ? "" : "s"} ` +
    `with Unestablished Titles that the Dedication agreed upon in this Proclamation is for ` +
    `the ${Array.isArray(title) ? title.join(" and ") : title} and their successors in title only and that they and any of their successors shall not sell the ` +
    `dedication of THE CERTIFICATE or THE CERTIFICATE itself, more specifically not in such a way that it could be ` +
    `registered or owned in separate titles or in separate ownerships.`;
const bottomFirstLine = "Know ye therefore that";
const bottom = (title: string | string[], name: string | string[]) => `${Array.isArray(name) ? name.join(" and ") : name}, ` +
    `by the virtue of the ownership of this certificate, ` +
    `by way of pestering everyone in their vicinity, upon the effect and the receipt of this proclamation, ` +
    `in particular regarding the certificate created by Unestablished Titles, ` +
    `may henceforth and in perpetuity request to be known by the style and title of ${Array.isArray(title) ? title.join(" and ") : title} and shall hereafter, ` +
    `to all and sundry, be calling themselves ` +
    `${(Array.isArray(title) && Array.isArray(name)) ? (title.map((title, index) => `${title} ${name[index]}`).join(" and ")) : `${title} ${name}`}.`;


let oldPaper_arrBuff: ArrayBuffer;
let fancyFont_arrBuff: ArrayBuffer;
let coatOfArms_arrBuff: ArrayBuffer;

const greenOpts: PDFPageDrawTextOptions = { color: rgb(86 / 255, 110 / 255, 61 / 255), blendMode: BlendMode.Multiply };
const blackOpts: PDFPageDrawTextOptions = { color: rgb(0, 0, 0), blendMode: BlendMode.Multiply };

export default async function generateCertificate(title: string | string[], name: string | string[]) {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    const page = pdfDoc.addPage([PageSizes.A4[1], PageSizes.A4[0]]); // A4 landscape
    // Set background
    {
        if (oldPaper_arrBuff === undefined)
            oldPaper_arrBuff = await (await fetch(oldPaper)).arrayBuffer();
        const img_oldPaper = await pdfDoc.embedJpg(oldPaper_arrBuff);
        fullPageImage(page, img_oldPaper);
    }

    // Draw frame
    page.drawRectangle({
        ...percentageRect(page, { x: 3, y: 3, width: 94, height: 94 }),
        borderColor: rgb(1, 215 / 255, 0),
        borderWidth: 1 * Math.min(page.getWidth(), page.getHeight()) / 100,
        blendMode: BlendMode.Multiply,
    });

    // Draw coat of arms
    {
        if (coatOfArms_arrBuff === undefined)
            coatOfArms_arrBuff = await (await fetch(coatOfArms)).arrayBuffer();
        const img_coatOfArms = await pdfDoc.embedPng(coatOfArms_arrBuff);
        const percRect = percentageRect(page, { x: 75, y: 85, width: 20, height: 10 });
        const scale = percRect.width / img_coatOfArms.width;
        page.drawImage(img_coatOfArms, { ...percRect, height: img_coatOfArms.height * scale, blendMode: BlendMode.Multiply });
    }

    // Set fancy font
    // {
    if (fancyFont_arrBuff === undefined)
        fancyFont_arrBuff = await (await fetch("/pdfFonts/UnifrakturCook-Bold.ttf")).arrayBuffer();
    const font = await pdfDoc.embedFont(fancyFont_arrBuff, { customName: "UnifrakturCook" });
    // }

    // Draw text
    {
        const firstLineRect = percentageRect(page, { x: 5, y: 10, width: 20, height: 5 });
        const bottomFirstLineRect = percentageRect(page, { x: 5, y: 75, width: 90, height: 5 });
        const bigGreenFontSize = Math.min(maxFontSizeWithinBounds(firstLine, font, firstLineRect), maxFontSizeWithinBounds(bottomFirstLine, font, bottomFirstLineRect));

        const topLeftRect = percentageRect(page, { x: 5, y: 22.5, width: 42.5, height: 52.5 });
        const topRightRect = percentageRect(page, { x: 52.5, y: 22.5, width: 42.5, height: 52.5 });
        const bottomRect = percentageRect(page, { x: 5, y: 80, width: 65, height: 15 });
        const topLeftStr = topLeft(title);
        const topRightStr = topRight(title);
        const bottomStr = bottom(title, name);
        const blackTextFontSize = Math.min(maxFontSizeWithinBounds(topLeftStr, font, topLeftRect),
            maxFontSizeWithinBounds(topRightStr, font, topRightRect),
            maxFontSizeWithinBounds(bottomStr, font, bottomRect));

        fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 5, width: 90, height: 10 }), docTitle, false, greenOpts, Alignment.CENTER);
        fitTextWithinRect(page, font, firstLineRect, firstLine, false, { ...greenOpts, size: bigGreenFontSize }, Alignment.LEADING);
        fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 15, width: 42.5, height: 7.5 }), secondLine(title, name), false, blackOpts, Alignment.LEADING);
        fitTextWithinRect(page, font, topLeftRect, topLeftStr, true, { ...blackOpts, size: blackTextFontSize }, Alignment.LEADING);
        fitTextWithinRect(page, font, percentageRect(page, { x: 52.5, y: 17.5, width: 42.5, height: 5 }), topRightFirstLine, false, greenOpts, Alignment.LEADING);
        fitTextWithinRect(page, font, topRightRect, topRightStr, true, { ...blackOpts, size: blackTextFontSize }, Alignment.LEADING);
        fitTextWithinRect(page, font, bottomFirstLineRect, bottomFirstLine, false, { ...greenOpts, size: bigGreenFontSize }, Alignment.LEADING);
        fitTextWithinRect(page, font, bottomRect, bottomStr, true, { ...blackOpts, size: blackTextFontSize }, Alignment.LEADING);

    }
    return pdfDoc.save();
}

// Derived from https://gist.github.com/JustAnotherJavaProgrammer/daf36211f1f53fb4ce723becb94b361f
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

function percentageRect(page: PDFPage, rect: Rectangle): Rectangle {
    const pageWidth = page.getWidth();
    const pageHeight = page.getHeight();
    const rectHeight = pageHeight * rect.height / 100;
    return { x: pageWidth * rect.x / 100, y: pageHeight - (pageHeight * rect.y / 100) - rectHeight, width: pageWidth * rect.width / 100, height: rectHeight };
}

export type PdfResponse = {
    type: "success";
    pdf: Uint8Array;
} | {
    type: "error";
    message: string;
}

// @ts-expect-error
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
    // Running in worker
    self.addEventListener("message", async (event) => {
        console.log("Received message", event);
        if(event.data === "ping") {
            self.postMessage("pong");
        }
        const { title, name } = event.data;
        const pdf = await generateCertificate(title, name);
        try {
            self.postMessage({ type: "success", pdf } as PdfResponse, { transfer: [pdf.buffer]});
        } catch (e: Error|unknown) {
            try {
            self.postMessage({ type: "error", message: (e as Error).message ?? e } as PdfResponse);
            } catch (e: unknown) {
                console.error(e);
                self.postMessage({ type: "error", message: "Unknown error, something went terribly wrong." } as PdfResponse);
            }
        }
        console.log("Message handled");
    });
}