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

// `undefined` means that a variable has not been yet declared,
// or has been declared but has not been assigned a value.
//
// `null` is an assignment value that means “no value”.
//
// Unassigned variables default to `undefined` in JavaScript.
// There is NO mechanism in JavaScript that sets things to `null` by default;
// so if there is a `null` value, then someone or some process should have
// explicitly set it that way.
//
// Additionally, `undefined` is NOT a valid JSON value whereas `null` is.

separator();

check( typeof null === 'object', '`null` is an object.' );
check( typeof undefined === 'undefined', '`undefined` is not defined.' );
check( null == undefined, '`null` is weakly equal to `undefined`.' );
check( null !== undefined, '`null` and `undefined` are NOT strictly equal.' );

separator();
