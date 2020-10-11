/**
 * @file Contains "Reversed" meme text transform function
 * @package @benhawley7/memeify
 * @author Ben Hawley
 */

/**
 * Reverse a strings characters
 * "hello there" => "ereht olleh"
 * @param text
 * @returns reversed text
 */
export default function reversed(text: string): string {
    return text.split("").reverse().join("");
}