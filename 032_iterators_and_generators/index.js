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

/*
 * A generator is a function that returns an object that implements the iteration protocol.
 * That is to say; it has a `next()` method that returns a `{ value, done }` result.
 */

{
    separator();

    function* incRand( max ) {
        while( true ) {

            // Pause the execution after the `yield`.
            // Resume when `next(<something>)` is called
            //     and assign <something> to x.
            let x = yield Math.floor( Math.random() * max + 1 );

            max += x;
        }
    }

    const rng = incRand( 2 );

    try {
        log( rng.next() );
        log( rng.next( 3 ) );
        log( rng.next() );
        log( rng.next( 20 ) );

        // This will be thrown from yield.
        rng.throw( new Error( 'Booyah! ') );
    } catch( error ) {
        log ( 'Some problem' );
    }

    separator();
}

// Let’s try a more real-life example:

{
    const makeAjaxCall = () => new Promise( ( resolve, reject ) => {
        setTimeout( () => resolve( { id: Math.random() } ), 1000 );
    } );

    const request = ( url ) => {
        makeAjaxCall().then( ( response ) => {
            it.next( response );
        } );
    };

    function *main() {
        const data1 = yield request( 'http://bytesized.tv?page=1' );

        log( 'result 1', data1 );

        const data2 = yield request( 'http://bytesized.tv?page=2' );

        log( 'result 2', data2 );

        separator();
    }

    const it = main();

    it.next();
}
