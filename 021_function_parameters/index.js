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
const log = console.log;

separator();

const compute = ( x, y, ...a ) => ( x + y ) * a.length;

check( compute( 1, 2, 'hello', true, 7 ) === 9, 'Computed stuff.' );

separator();

const computeWithDefaultArgs = ( x, y = 12 ) => x + y;

check( computeWithDefaultArgs( 3 )  === 15, 'Computed with default args.' );
check( computeWithDefaultArgs( 3, 12 ) === 15, 'Computed with providing the actual arg.' );

separator();

const computeWithVariadicArgs = ( x, ...y ) => x + y.length; // y is an Array.


check( computeWithVariadicArgs( 3, 'hello', true ) === 5, 'Computed with variadic args.' );

separator();

check( compute( 1, 2, ...[ 'hello' ], ...[ 'true', 'false' ], 7 ) === 12, 'Computed with array spreads.' );

separator();

/*
 * ## Lessons to Learn
 *
 * * The `...` rest operator; and `...[]` array spread operator; and default arguments
 *   are really useful language constructs.
 *
 * * Prefer fat arrows ( `=>` ) to `function` declarations whenever possible.
 */
