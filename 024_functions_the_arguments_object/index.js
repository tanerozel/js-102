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

separator();

function test( a, b, c ) {

    /*
     * Note: The `arguments` object is being used less and less
     * in lieu of its better alternative “rest parameters” (i.e., `...args`).
     * Indeed, `arguments` won’t work as expected inside a fat arrow since
     * it will be bound to the outer lexical scope.
     */

    log( arguments.length );
}

test( 1, 2, 3 );

separator();

const methodWithDefaultArguments = ( a, b = 44, c = 42 ) => a + b + c;

log( methodWithDefaultArguments( 11 ) );
log( methodWithDefaultArguments( 11, undefined, 21 ) );
log( methodWithDefaultArguments( 11, 32 ) );

separator();

const methodWithVariadicArguments = ( a, ...b ) => a + b.reduce( ( acc, cur ) => acc + cur, 1 );

log( methodWithVariadicArguments( 12, 2, 4, 5 ) );
log( methodWithVariadicArguments( 12 ) );

separator();
