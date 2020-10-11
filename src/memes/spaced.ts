/**
 * @file Contains "Spaced" meme text transform function
 * @package @benhawley7/memeify
 * @author Ben Hawley
 */

/**
 * Add spaces between characters of a string
 * "hello there" => "h e l l o  t h e r e"
 * @param text
 * @returns spaced text
 */
export default function spaced(text: string): string {
    return text.split("").join(" ");
}