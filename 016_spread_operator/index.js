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

const f = ( x, y, ...a ) => ( x + y ) * a.length;

check( f( 1, 2, 'hello', true, 7 ) === 9, 'Checking a variable-argument call.' );

const numbers = [ 1, 2, 3, 4 ];

check( Math.max( ...numbers ) === 4, 'Max is 4.' );
check( Math.min( ...numbers ) === 1, 'Min is 1.' );

// Object Spread:
//
//      const obj = { life: 42, bombs: 11 };
//
//      log( obj );
//
//      log( {
//          ...obj,
//          weapon: 'ninja stars'
//      } );
//
// Currently the object spread operator only works when you install a shim.
// It is a “Stage 3 Proposal” right now (as of 2016)
// See <https://github.com/sebmarkbage/ecmascript-rest-spread> for details.
//

separator();
