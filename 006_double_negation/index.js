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

check( !!'' === false, 'Converted empty string to boolean.' );
check( !!0 === false, 'Converte zero to boolean.' );
check( !!null === false, 'Converted `null`. to boolean.' );
check( !!undefined === false, 'Converted `undefined` to boolean.' );
check( !!NaN === false, 'Converted `NaN` to boolean.' );
check( !!'hello' === true,  'Converted a non-empty string to boolean.' );
check( !!1 === true, 'Converted a non-zero number to boolean.' );
check( !!{} === true, 'Converted an object to boolean.' );
check( !![] === true, 'Converted an array to boolean.' );

separator();
