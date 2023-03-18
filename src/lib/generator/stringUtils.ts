import type { FontMetrics } from "./textRendering";

export function wrap(str: string, fm: FontMetrics, maxWidth: number): string[] {
    const lines = splitIntoLines(str);
    if (lines.length === 0)
        return lines;

    const strings: string[] = [];
    for (const line of lines)
        wrapLineInto(line, strings, fm, maxWidth);
    return strings;
}

function wrapLineInto(line: string, list: string[], fm: FontMetrics, maxWidth: number): void {
    let len = line.length;
    let width: number;
    while (len > 0 && (width = fm.stringWidth(line)) > maxWidth) {
        // Guess where to split the line. Look for the next space before
        // or after the guess.
        const guess = len * maxWidth / width;
        let before = line.substring(0, guess).trim();

        width = fm.stringWidth(before);
        let pos: number;
        if (width > maxWidth) // Too long
            pos = findBreakBefore(line, guess);
        else { // Too short or possibly just right
            pos = findBreakAfter(line, guess);
            if (pos != -1) { // Make sure this doesn't make us too long
                before = line.substring(0, pos).trim();
                if (fm.stringWidth(before) > maxWidth)
                    pos = findBreakBefore(line, guess);
            }
        }
        if (pos == -1)
            pos = guess; // Split in the middle of the word

        list.push(line.substring(0, pos).trim());
        line = line.substring(pos).trim();
        len = line.length;
    }
    if (len > 0)
        list.push(line);
}

const whitespaceOrHyphen = /\s|-/g;

function findBreakBefore(line: string, start: number): number {
    let res = -1;
    for (const match of line.matchAll(whitespaceOrHyphen)) {
        if(match.index === undefined)
            continue;
        if(match.index > start)
            break;
        res = match.index;
    }
    return res;
}

function findBreakAfter(line: string, start: number): number {
    for (const match of line.matchAll(whitespaceOrHyphen)) {
        if(match.index === undefined)
            continue;
        if(match.index >= start)
            return match.index;
    }
    return -1;
}

export function splitIntoLines(str:string): string[] {
        return str.split(/\r\n|\r|\n/);
}

export {};