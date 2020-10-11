/**
 * @file Contains "Inverted" meme text transform function
 * @package @benhawley7/memeify
 * @author Ben Hawley
 */

/**
 * Invert a strings characters in the spoungebob meme style
 * "hello there" => "hElLo ThErE"
 * @param text
 * @param flips the arrangement of the upper/lower case chars
 * @returns inverted text
 */
export default function inverted(text: string, flip = false): string {
    return ["", ...text].reduce((acc, char) => {
        if (char.match(/[A-Za-z]/)) {
            char = flip ? char.toUpperCase() : char.toLowerCase();
            flip = !flip;
        }
        return acc + char;
    });
}