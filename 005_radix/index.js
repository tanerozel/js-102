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
const check = util.check;

separator();

check( parseInt( '10' ) === 10, 'The number ten is ten.' );
check( parseInt( '0x10' ) === 16, 'The number ten is sixteen.' );

separator();

check( parseInt( '10', 10 ) === 10, 'The number ten is ten (using radix 10).' );
check( parseInt( '0x10', 10 ) === 0, 'The number ten is zero (using radix 10).' );

// Conversion with unary operators:
check( -'10' === -10, 'Converted `-"10"` to `-10`.' );
check( +'10' === 10, 'Converted `"10"` to `10`.');

separator();

// ## Lessons to Learn
//
// Always use radix when parsing numbers.
//
// Although the unary `+` operator (trick) looks cool, it is less readable
// than explicitly using `parseInt(…, 10)`.
// Prefer being explicit over being terse and “magical” whenver you can.
