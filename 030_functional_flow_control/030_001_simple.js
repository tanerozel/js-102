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

// new Promise( ( resolve, reject ) => {} );
const promise1 = new Promise(

                                     // promise1 will be fulfilled with 42 after 1 sec.
    ( resolve ) => setTimeout( () => resolve( 42 ), 1000 )
);

// promise.then( onFulfilled, onRejected )
const promise2 = promise1.then(

    //            promise2 will be fulfilled with this value.
    ( result ) => result / 2
);

// Also note that I’m ignoring the `reject` part of `Promise( ( resolve, reject ) => { } )`
// for the sake of simplicity. — We’ll see examples of handling rejection in other files.

const promise3 = promise2.then(
    ( result ) => {

        const promise4 = new Promise(
            ( resolve ) => setTimeout( () => resolve( result * 2 ), 3000 )
        );

        // Instead of objects and primitive values, you can also return a Promise from
        // within the `then` method.
        // (
        //     you can even something that behaves like a promise (i.e., something with a `then` method)
        // )
        // Promises and promise-like objects are collectively called as “thenable”s.
        //
        // When you return a “thenable” from the `then` method; the owner promise (promise3 in our case)
        // accepts the fate of the thenable.
        //
        // In our case, promise3 will accept the fate of promise4:
        // i.e., it will be fulfilled with the resolution value of promise4,
        // or it will be rejected with the rejection reason of promise4.
        return promise4;
    }
);

promise3.then( ( result ) => {
    log( `The answer is: ${result}.` );

    separator();
} );
