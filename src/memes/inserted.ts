/**
 * @file Contains "Inserted" meme text transform function
 * @package @benhawley7/memeify
 * @author Ben Hawley
 */

/**
 * Insert a string within the space between words in a string
 * "hello there" => "hElLo ThErE"
 * @param text
 * @param insertion string to insert
 * @returns inverted text
 */
export default function inserted(text: string, insertion: string): string {
    return [
        `${insertion} `,
        ...text.split(" ").join(` ${insertion} `),
        ` ${insertion}`,
    ].join("");
}