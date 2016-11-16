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
const check = util.check;
const separator = util.separator;

separator();
check( true, '`true` is truthy.' );
separator();

// ## Lessons to Learn
//
// * Use modules instead of namespaces. Also prefer using CommonJS (node-style) modules
//   in your projects. — You can always bundle them into other formats
//   (so that a browser can interpret them) using tools like webpack, or gulp, or grunt.
//
// * There is no such thing as a “too small module”.
//   A module is a logically-coherent group of functions, nothing fancy.
//   Even a single exported function can constitute a module.
//   The smaller the module is, the easier it will be to maintain and test it.
