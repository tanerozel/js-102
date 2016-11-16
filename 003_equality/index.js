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

// NEVER use hungarian notation in production code.
// (with one exception of constant references
// (i.e. as in… `kActiveStatus = constants.STATUS_ACTIVE`)
//
// The below variables are just for the sake of demonstration.
const nOne = 1;
const nTwo = 2;
const sOne = '1';

separator();

check( nOne == sOne, '`1` == "1".' );
check( nOne !== sOne, '`1` !== "1".' );
check( nOne != nTwo, '`1` != `2`.' );
check( nOne !== nTwo, '`1` !== `2`.' );

separator();

// ## Lessons to Learn
//
// Always use “strict equality“ (`===`) and strict unequality (`!==`)
// when comparing things.
