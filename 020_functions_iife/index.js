/*
 *                    the devil is in the details
 *      .--. __--__  (`-')    .--.  .----.  .----.
 *      | ,|/    _ / ( OO).->/_  | /  ..  \\_,-.  |
 *      |(_|\_..`--.(,------. |  ||  /  \  .  .' .'
 * ,--. |  |.-._)   \`------' |  |'  \  /  '.'  /_
 * |  '-'  /\       /         |  | \  `'  /|      |
 *  `-----'  `-----'          `--'  `---'' `------'
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bit.ly/bytesized
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

const util = require( '../lib/util' );
const separator = util.separator;
const log = console.log;

(function() {
    log( 'Hello from an IIFE.' );
}());

{
    log( 'A block level code is the same as an IIFE.' );
}

{
    const number = ( () => 10 )();

    log( `The number is “${number}”.` );
}

/*
 * ## Lessons to Learn
 *
 * Instead of IIFEs, prefer using modules and block-level scoping with `const` and `let`.
 *
 * Prefer using CommonJS (i.e. Node.JS-style) for your code; you can always use
 * tools like webpack, grunt, browserify, gulp… etc. to bundle them into a code that
 * the browser can understand.
 */
