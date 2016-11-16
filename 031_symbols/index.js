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

const sym1 = Symbol();
const sym2 = Symbol( 'foo' );
const sym3 = Symbol( 'foo' );

separator();

check( sym2 !== sym3, '`Symbol` is a factory function.' );

// The most practical use of symbols are the `for … of` interface of iterables.
//
// `Array`, `TypedArray`, `String`, `Map`, and `Set` all implement that iterable interface.

// Let’s continue with two interview-like examples:

separator();

{
    const fibonacci = {
        [Symbol.iterator]() {
            let pre = 0;
            let cur = 1;

            return {
                next() {
                    [ pre, cur ] = [ cur, pre + cur ];

                    return { done: false, value: cur };
                }
            }
        }
    };

    for ( let n of fibonacci ) {
        if ( n > 10000 ) { break; }

        log( n );
    }
}

separator();

{
    // Let’s do the same thing with a generator.

    const fibonacci = {
        [Symbol.iterator]: function*() {
            let pre = 0;
            let cur = 1;

            for (;;) {
                let temp = pre;

                pre = cur;
                cur += temp;

                yield cur;
            }
        }
    };

    for ( let n of fibonacci ) {
        if ( n > 10000 ) { break; }

        log( n );
    }
}

separator();
