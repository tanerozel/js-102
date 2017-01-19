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

log( 'Read https://github.com/promises-aplus/promises-spec first!' );
log( 'Several times, if needed :)' );

separator();

// ## Key Things to Keep in Mind
//
// * You create a new promise always using the `new` operator:
//
//    const promise = new Promise( ( resolve, reject ) => {} );
//
// * A `Promise` is just a boxed computation to be executed at a later point in time.
//
// * When you `resolve` the promise with a value, the onFulfilled handler is called.
//
// * the `then` method also returns a `Promise`, this allows the promises to be chained.
//
//
// * Once a `Promise` is fulfilled, it is “immutable”; neither its value, nor its state will change ever!
//
// * Signatures:
//     * const promise = new Promise( ( resolve, reject ) { resolve(valueOrPromise); /*or*/ reject(valueOrPromise); } );
//          * You don’t `return` inside the Promise callback function; you either `resolve`, or `reject`.
//          * Any exception will result in the rejection of the promise.
//          * If you `resolve` with a `Promise` P (instead of a primitive value), the owner promise accepts the fate
//            of P; so when P gets resolved or rejected, the owner promise `promise` will also get resolved or rejected.
//     * promise.then( onFulfilled, onRejected )
//          * onFulfilled takes a single argument; that is the value that the promise `resolve`s with.
//          * onRejected takes a single argument; that is the reason the promise is `reject`ed.
//
// * Since promises are boxed computations, they are a sophisticated version of “thunks”.
//     * See `028_functional_thunks` for a brief discussion about thunks.
//
// * You can implement your own promise with less than 100 lines of code.
//     * See <https://github.com/then/promise/blob/master/src/core.js> for a easy-to-read `Promise` implementation.