import type { PDFFont, PDFPage } from "pdf-lib";

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

export function fitTextWithinRect(page: PDFPage, font: PDFFont, rect: Rectangle, text: string, textWrap: boolean, align: Alignment = Alignment.CENTER): void {
    if (text == null || text.length <= 0)
        return;
    if (!textWrap) {
        // g.setFont(g.getFont().deriveFont((float) Math.max(rect.width, rect.height)));
        // FontMetrics metrics = g.getFontMetrics();
        // Rectangle2D stringBounds = metrics.getStringBounds(text, g);
        let stringBounds: Bounds = { width: font.widthOfTextAtSize(text, 1), height: font.heightAtSize(1) };
        const scale: number = Math.min(rect.width / stringBounds.width,
            rect.height / stringBounds.height);
        stringBounds = getStringBounds(text, font, scale);
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
        g.drawString(text, x, rect.y + ((rect.height - stringBounds.height) / 2) + getAscent(font, scale));
        return;
    }
    let fontSize: number = 1.0;
    while (true) {
        // g.setFont(g.getFont().deriveFont(fontSize + 1));
        // FontMetrics metrics = g.getFontMetrics();
        // FIXME: implement StringUtils.wrap
        const linesTemp: string[] = StringUtils.wrap(text, metrics, (int) rect.width);
        // TODO: join linesTemp with "\n" and use getStringBounds directly (once)
        let height = 0;
        for (let i = 0; i < linesTemp.length; i++) {
            let lineHeight = getStringBounds(linesTemp[i], font, fontSize + 1).height;
            height += lineHeight;
            if (i != linesTemp.length - 1)
                height += 0.1 * lineHeight;
        }
        if (height > rect.height)
            break;
        fontSize++;
    }
    // g.setFont(g.getFont().deriveFont(fontSize));
    // FontMetrics metrics = g.getFontMetrics();
    // FIXME: implement StringUtils.wrap
    const lines: string[] = StringUtils.wrap(text, metrics, rect.width);
    // TODO: maybe not render text as individual lines woth custom spacing
    let y =  rect.y;
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
        page.drawText(line, {x, y: y+getAscent(font, fontSize), size: fontSize, font});
        y += stringBounds.height * 1.1;
    }
}

function getStringBounds(text: string, font: PDFFont, fontSize: number): Bounds {
    return { width: font.widthOfTextAtSize(text, fontSize), height: font.heightAtSize(fontSize) * countLines(text) };
}

function countLines(text: string): number {
    return text.split(/\r\n|\r|\n/).length;
}

function getAscent(font: PDFFont, fontSize: number): number {
    return font.heightAtSize(fontSize, { descender: false });
}