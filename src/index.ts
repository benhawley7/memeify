/**
 * @file Exposes main function to applying multiple meme tranforms
 * @package @benhawley7/memeify
 * @author Ben Hawley
 */

// Library of meme functions
import inserted from "./memes/inserted";
import inverted from "./memes/inverted";
import reversed from "./memes/reversed";
import spaced from "./memes/spaced";
import {zalgo} from "@favware/zalgo";

// Defines options for meme transformations
interface MemeifyOptions {
    inserted?: boolean; // 🤠 hey 🤠 there 🤠
    insertion?: string; // 🤠
    inverted?: boolean; // hEy ThErE
    flip?: boolean; // HeY tHeRe
    reversed?: boolean; // ereht yeh
    spaced?: boolean; // h e y  t h e r e
    uppercase?: boolean; // HEY THERE
    lowercase?: boolean; // hey there
    zalgo?: boolean; // h̜̜͍̫̻͉̀̀̇̓̆̓ͪ̒e̬̫̰̩͒ͬ͛̈͑ỹ̨̢͔̼̙͍̪͓͈ͬ̉ͣ̔̅̈ͩ ̸̟̹̟̳̘ͥ́͌͊̏ͣ͟ẗ̘̯͕̙̭͚̏̓͑͐ͨ͒ͭ͜h̝̭͊̔e̝͖̜͚̭͑̒ͥ͒̂ŗ̗͙͙ͮ͂͟ë̢̪̳́̌̈̏ͤͨͅ
}

/**
 * Apply multiple meme transforms to a string of text
 * @param text string to memeify
 * @param options select which transforms to use
 */
export default function memeify(text: string, options: MemeifyOptions = {}): string {
    if (options.uppercase) {
        text = text.toUpperCase();
    }
    if (options.lowercase) {
        text = text.toLowerCase();
    }
    if (options.reversed) {
        text = reversed(text);
    }
    if (options.inserted) {
        text = inserted(text, options.insertion || "🤠");
    }
    if (options.spaced) {
        text = spaced(text);
    }
    if (options.zalgo) {
        text = zalgo(text);
    }
    if (options.inverted) {
        text = inverted(text, Boolean(options.flip));
    }
    return text;
}

// The module also exports the transform functions so they can be
// used individually
export {
    inserted, inverted, reversed, spaced, zalgo, memeify
};
