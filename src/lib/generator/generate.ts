import { PDFDocument } from "pdf-lib";
import { BlendMode, PageSizes, PDFImage, PDFPage, rectangle, rgb, type PDFPageDrawTextOptions } from "pdf-lib/cjs/api";
import fontkit from "@pdf-lib/fontkit";
// @ts-ignore
import oldPaper from "$lib/assets/img/certificate/kiwihug-3gifzboyZk0-unsplash.jpg?rotate=270";
import { Alignment, fitTextWithinRect, type Rectangle } from "./textRendering";

const docTitle = "Proclamation";
const firstLine = "Whereas,"
const secondLine = (title: string, name: string) => `${title} ${name}`.toLocaleUpperCase();
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
const topRightFirstLine = "Now this deed witnesseth as follows";
const topRight = (title: string) => `Whereas, THE CERTIFICATE has been generated free of charge and ` +
    `made available to the ${title} in relation to a scheme of stupid novelty gifts, Unestablished Titles, ` +
    `in CONSIDERATION of all sums neither due nor paid to us by the ${title}, of which we don't acknowledge receipt of, ` +
    `has bequeathed a dedication in favour of the ${title}, their assignees and their successors all and whole, ` +
    `but without the rights thereto over the larger subjects and its successors in title of the larger subjects and ` +
    `all others authorised by it, which remain with Unestablished Titles. ` +
    `The ${title} hereby covenants with Unestablished Titles that the Dedication agreed upon in this Proclamation is for ` +
    `the ${title} and their successors in title only and that they and any of their successors shall not sell the ` +
    `dedication of THE CERTIFICATE or THE CERTIFICATE itself, more specifically not in such a way that it could be ` +
    `registered or owned in separate titles or in separate ownerships.`;
const bottomFirstLine = "Know ye therefore that";
const bottom = (title: string, name: string) => `${name}, by the virtue of the ownership of this certificate, ` +
    `by way of pestering everyone in their vicinity, upon the effect and the receipt of this proclamation, ` +
    `in particular regarding the certificate created by Unestablished Titles, ` +
    `may henceforth and in perpetuity request to be known by the style and title of ${title} and shall hereafter, ` +
    `to all and sundry, be calling themselves ${title} ${name}.`;


let oldPaper_arrBuff: ArrayBuffer;
let fancyFont_arrBuff: ArrayBuffer;

const greenOpts: PDFPageDrawTextOptions = { color: rgb(86 / 255, 110 / 255, 61 / 255), blendMode: BlendMode.Multiply };
const blackOpts: PDFPageDrawTextOptions = { color: rgb(0, 0, 0), blendMode: BlendMode.Multiply };

export default async function generateCertificate(title: string, name: string) {
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

    page.drawRectangle({
        ...percentageRect(page, { x: 3, y: 3, width: 94, height: 94 }),
        borderColor: rgb(1, 215/255, 0),
        borderWidth: 1* Math.min(page.getWidth(), page.getHeight()) / 100,
        blendMode: BlendMode.Multiply,
    });

    // Set fancy font
    // {
    if (fancyFont_arrBuff === undefined)
        fancyFont_arrBuff = await (await fetch("/pdfFonts/UnifrakturCook-Bold.ttf")).arrayBuffer();
    const font = await pdfDoc.embedFont(fancyFont_arrBuff, { customName: "UnifrakturCook" });
    // }

    // Draw text

    fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 5, width: 90, height: 10 }), docTitle, false, greenOpts, Alignment.CENTER);
    fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 10, width: 20, height: 5 }), firstLine, false, greenOpts, Alignment.LEADING);
    fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 15, width: 42.5, height: 7.5 }), secondLine(title, name), false, blackOpts, Alignment.LEADING);
    fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 22.5, width: 42.5, height: 52.5 }), topLeft(title), true, blackOpts, Alignment.LEADING);
    fitTextWithinRect(page, font, percentageRect(page, { x: 52.5, y: 17.5, width: 42.5, height: 5 }), topRightFirstLine, false, greenOpts, Alignment.LEADING);
    fitTextWithinRect(page, font, percentageRect(page, { x: 52.5, y: 22.5, width: 42.5, height: 52.5 }), topRight(title), true, blackOpts, Alignment.LEADING);
    fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 75, width: 90, height: 5 }), bottomFirstLine, false, greenOpts, Alignment.LEADING);
    fitTextWithinRect(page, font, percentageRect(page, { x: 5, y: 80, width: 65, height: 15 }), bottom(title, name), true, blackOpts, Alignment.LEADING);

    return pdfDoc.saveAsBase64({ dataUri: true });
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