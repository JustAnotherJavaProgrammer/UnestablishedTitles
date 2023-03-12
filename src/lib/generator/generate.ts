import { PDFDocument } from "pdf-lib";
import { PageSizes, PDFImage, PDFPage } from "pdf-lib/cjs/api";
import fontkit from "@pdf-lib/fontkit";
// @ts-ignore
import oldPaper from "$lib/assets/img/certificate/kiwihug-3gifzboyZk0-unsplash.jpg?rotate=270";

const title = "Proclamation";
const firstLine = "Whereas,"
const secondLine = (title: string, name: any) => `${title} ${name}`;
const topLeft = (title: string) => `(hereafter referred to as ${title}), has, by way of notice, ` +
    `this seventh day of october in the year two thousand and twenty two, in the first year of the Reign of ` +
    `Our Sovereign King Charles the Third, by the Grace of God, of the United Kingdom of Great Britain and Northern Ireland ` +
    `and of His other Realms and Territories King, Head of the Commonwealth, Defender of the Faith, ` +
    `delivered unto us the intention to download, and us with the intention to generate, ` +
    `Unestablished Titles has agreed with the ${title} to bequeath unto them an indubitably nugatory certificate ` +
    `of their preferred form of address, in particular, a printable PDF data file with the intent of furthering the cause ` +
    `of that oddish choice being respected by others, by Unestablished ` +
    `Titles, in the format of a PDF document, and hereinafter referred to as 'THE CERTIFICATE'. ` +
    `Unestablished Titles agrees to dedicate THE CERTIFICATE in the name of the Lord to the ${title}, ` +
    `in order for them to share their favourite form of address with the wider world,` +
    `altogether or as part of a larger set of certificates.`;


let oldPaper_arrBuff: ArrayBuffer;

export default async function generateCertificate() {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);
    const page = pdfDoc.addPage([PageSizes.A4[1], PageSizes.A4[0]]); // A4 landscape
    if (oldPaper_arrBuff === undefined)
        oldPaper_arrBuff = await (await fetch(oldPaper)).arrayBuffer();
    const img_oldPaper = await pdfDoc.embedJpg(oldPaper_arrBuff);
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