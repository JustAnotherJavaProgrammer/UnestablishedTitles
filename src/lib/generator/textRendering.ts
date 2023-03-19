import type { PDFFont, PDFPage, PDFPageDrawTextOptions } from "pdf-lib";
import { debug } from "svelte/internal";
import *  as stringUtils from "./stringUtils";

export enum Alignment {
    LEADING, CENTER, TRAILING
}

export type Point = {
    x: number;
    y: number;
};

export type Bounds = {
    width: number;
    height: number;
}

export type Rectangle = Point & Bounds;

export function fitTextWithinRect(
    page: PDFPage,
    font: PDFFont,
    rect: Rectangle,
    text: string,
    textWrap: boolean,
    opts?: PDFPageDrawTextOptions,
    align: Alignment = Alignment.CENTER,
    vertAlign: Alignment = Alignment.CENTER): void {
    if (text == null || text.length <= 0)
        return;
    if (!textWrap) {
        // g.setFont(g.getFont().deriveFont((float) Math.max(rect.width, rect.height)));
        // FontMetrics metrics = g.getFontMetrics();
        // Rectangle2D stringBounds = metrics.getStringBounds(text, g);
        const metrics = new FontMetrics(font, Math.max(rect.width, rect.height));
        let stringBounds: Bounds = metrics.getStringBounds(text);
        const scale: number = Math.min(rect.width / stringBounds.width,
            rect.height / stringBounds.height);
        metrics.scale(scale);
        stringBounds = metrics.getStringBounds(text);
        let x: number = rect.x;
        switch (align) {
            case Alignment.LEADING:
                x += 0;
                break;
            case Alignment.TRAILING:
                x += rect.width - stringBounds.width;
                break;
            default:
                x += (rect.width - stringBounds.width) / 2;
        }
        console.log("stringBounds:", stringBounds);
        console.log("lineCount", countLines(text));
        let additionalVerticalOffset = metrics.getAscent();
        if (countLines(text) > 1) {
            if (vertAlign === Alignment.CENTER)
                additionalVerticalOffset = metrics.getLineHeight(true)
        } else if (vertAlign === Alignment.CENTER) {
            additionalVerticalOffset = rect.height - (metrics.getDescent() / 2);
        }
        drawLineInsideRect(text, page, metrics, rect, {
            x,
            y: rect.y + ((rect.height + stringBounds.height) / 2) - additionalVerticalOffset
        }, opts);
        return;
    }
    let fontSize: number = 1.0;
    while (true) {
        // g.setFont(g.getFont().deriveFont(fontSize + 1));
        // FontMetrics metrics = g.getFontMetrics();
        const metrics: FontMetrics = new FontMetrics(font, fontSize + 1);
        const linesTemp: string[] = stringUtils.wrap(text, metrics, rect.width);
        // TODO: join linesTemp with "\n" and use getStringBounds directly (once)
        let height = 0;
        for (let i = 0; i < linesTemp.length; i++) {
            let lineHeight = metrics.getStringBounds(linesTemp[i]).height;
            height += lineHeight;
            if (i != linesTemp.length - 1)
                height += 0.1 * lineHeight;
        }
        if (height > rect.height)
            break;
        fontSize++;
    }
    const metrics = new FontMetrics(font, fontSize);
    const lines: string[] = stringUtils.wrap(text, metrics, rect.width);
    // TODO: maybe not render text as individual lines with custom spacing
    let y = rect.y + rect.height;
    for (const line of lines) {
        const stringBounds: Bounds = getStringBounds(line, font, fontSize);
        let x = rect.x;
        switch (align) {
            case Alignment.LEADING:
                x += 0;
                break;
            case Alignment.TRAILING:
                x += rect.width - stringBounds.width;
                break;
            default:
                x += (rect.width - stringBounds.width) / 2;
        }
        drawLineInsideRect(line, page, metrics, rect, { x, y: y - metrics.getAscent() }, opts);
        y -= stringBounds.height/* * 1.1*/;
    }
}

// Emulate the Graphics2D.drawString method behavior
function drawLineInsideRect(line: string, page: PDFPage, metrics: FontMetrics, rect: Rectangle, position: Point, opts?: PDFPageDrawTextOptions): void {
    page.drawText(line, { ...opts, x: position.x, y: position.y, font: metrics.font, size: metrics.size, lineHeight: metrics.size * 1.1 });
}

export function getStringBounds(text: string, font: PDFFont, fontSize: number): Bounds {
    const lineNumber = countLines(text);
    return { width: font.widthOfTextAtSize(text, fontSize), height: font.heightAtSize(fontSize) * (lineNumber > 1 ? (lineNumber * 1.1) : 1) };
}

export function countLines(text: string): number {
    return stringUtils.splitIntoLines(text).length;
}

export function getAscent(font: PDFFont, fontSize: number): number {
    return font.heightAtSize(fontSize, { descender: false });
}

export function getDescent(font: PDFFont, fontSize: number): number {
    return font.heightAtSize(fontSize, { descender: true }) - getAscent(font, fontSize);
}

export class FontMetrics {
    font: PDFFont;
    size: number;

    constructor(font: PDFFont, size: number) {
        this.font = font;
        this.size = size;
    }

    stringWidth(str: string): number {
        return this.font.widthOfTextAtSize(str, this.size);
    }

    getLineHeight(raw = false): number {
        const factor = raw ? 1 : 1.1;
        return this.font.heightAtSize(this.size) * factor;
    }

    getStringBounds(str: string): Bounds {
        return getStringBounds(str, this.font, this.size);
    }

    getAscent(): number {
        return getAscent(this.font, this.size);
    }

    getDescent(): number {
        return getDescent(this.font, this.size);
    }

    scale(scale: number): void {
        this.size *= scale;
    }
}