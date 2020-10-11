# @benhawley7/memeify
Turns strings of text into memes!

## Install!
```bash
npm i @benhawley7/memeify
```

## Example!
Require and call memeify function with the configured options for your meme string!

```js
const {memeify} = require("@benhawley7/memeify");

// Configuration for the memeify options
// {
//     inserted?: boolean; // 🤠 hey 🤠 there 🤠
//     insertion?: string; // 🤠
//     inverted?: boolean; // hEy ThErE
//     flip?: boolean; // HeY tHeRe
//     reversed?: boolean; // ereht yeh
//     spaced?: boolean; // h e y  t h e r e
//     uppercase?: boolean; // HEY THERE
//     lowercase?: boolean; // hey there
//     zalgo?: boolean; // h̜̜͍̫̻͉̀̀̇̓̆̓ͪ̒e̬̫̰̩͒ͬ͛̈͑ỹ̨̢͔̼̙͍̪͓͈ͬ̉ͣ̔̅̈ͩ ̸̟̹̟̳̘ͥ́͌͊̏ͣ͟ẗ̘̯͕̙̭͚̏̓͑͐ͨ͒ͭ͜h̝̭͊̔e̝͖̜͚̭͑̒ͥ͒̂ŗ̗͙͙ͮ͂͟ë̢̪̳́̌̈̏ͤͨͅ
// }
const options = {inverted: true};
const memeText = memeify("i want to be a meme pls", options);
console.log(memeText); // "i WaNt To Be A mEmE pLs"
```
