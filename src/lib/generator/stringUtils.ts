import type { FontMetrics } from "./textRendering";

export function wrap(str: Readonly<string>, fm: Readonly<FontMetrics>, maxWidth: Readonly<number>): string[] {
    const lines = splitIntoLines(str);
    if (lines.length === 0)
        return lines;

    const strings: string[] = [];
    for (const line of lines) {
        wrapLineInto(line, strings, fm, maxWidth);
    }
    return strings;
}

const whitespaceOrHyphen = /\s|-/g;

function wrapLineInto(line: Readonly<string>, list: string[], fm: Readonly<FontMetrics>, maxWidth: Readonly<number>): void {
    if (line.trim().length === 0) {
        list.push("");
        return;
    }
    const whitespaces = line.matchAll(whitespaceOrHyphen);
    let start = 0;
    let prev = 0;
    for (const match of whitespaces) {
        if (match.index === undefined)
            continue;
        const width = fm.stringWidth(line.substring(start, match.index + 1).trim());
        if (width > maxWidth) {
            list.push(line.substring(start, prev + 1).trim());
            start = prev;
            const currWord = line.substring(start, match.index + 1).trim();
            if (fm.stringWidth(currWord) > maxWidth) { // Word is too long to fit on a line
                let wordPart = "";
                for (const letter of currWord) {
                    if (fm.stringWidth(wordPart + letter) > maxWidth) {
                        if (wordPart.length > 0)
                            list.push(wordPart.trim());
                        wordPart = letter;
                    }
                }
            }
        }
        prev = match.index;
    }
    const lastPart = line.substring(start).trim();
    if (lastPart.length > 0)
        list.push(line.substring(start).trim());
}

export function splitIntoLines(str: string): string[] {
    return str.split(/\r\n|\r|\n/);
}

export { };