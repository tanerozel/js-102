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

// A generators is a function that returns an object that implements the iteration protocol.
// That is to say:
//   * It has a `next()` method which returns a `{ value, done }` result.

const util = require( '../lib/util' );
const separator = util.separator;
const log = console.log;

{
    separator();

    function* generateRandom( initial ) {
        let seed = initial;

        while( true ) {
            log( 'while…seed', seed );

            // Yield the computation and then pause the execution after the `yield`.
            // Resume execution when `next(<something>)` is called.
            // Assign `<something>` to `x`.
            let x = yield Math.floor( Math.random() * seed + 1 );

            log( 'x', x );

            seed += x;
        }
    }

    const iterator = generateRandom( 2 );

    try {
        log( 'iterator', iterator.next() );
        log( 'iterator', iterator.next( 3 ) );
        log( 'iterator', iterator.next() );
        log( 'iterator', iterator.next( 20 ) );

        iterator.throw( new Error( 'Booyah!' ) );
    } catch( error ) {
        log( 'Some problem!' );
        // log( error );
    }

    separator();
}

{
    const makeAjaxCall = ( url ) => new Promise( ( resolve, reject ) =>
        setTimeout( () => resolve( { id: Math.random(), url } ), 1000 )
    );

    const request = ( url ) =>
        makeAjaxCall( url ).then( ( response ) => iterator.next( response ) );

    function *main() {
        const data1 = yield request( 'https://bytesized.tv' );
        log( 'result 1', data1 );

        const data2 = yield request( 'https://volkan.io' );
        log( 'result 2', data2 );

        separator();
    }

    const iterator = main();

    iterator.next();
}
