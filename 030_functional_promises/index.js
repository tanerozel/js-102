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

const fakeAjaxCall = ( url, callback ) => {
    void url;

    setTimeout( () => {
        const flipped = ( Math.random() > 0.2 );

        if ( flipped ) {
            callback( { staus: 500, message: 'Request failed.' }, null );

            return;
        }

        callback( null, { payload: { data: 42 } } );
    }, 1000 );
};

const get = ( url ) => new Promise(
    ( resolve, reject ) => fakeAjaxCall(
        url,
        ( err, data ) => {
            if ( err ) {
                reject( err );

                return;
            }

            resolve( data );
        }
    )
);

const fetch = () => get( 'https://bytesized.tv/' )
    .then(
        ( result ) => result,
        ( reason ) => {
            log( 'Failed', reason, '… will retry.' );

            return fetch();
        }
    );

separator();

fetch().then( ( result ) => {
    separator();

    log( 'The final result is:' , result );

    separator();
} );

/*
 * `fetch()` is a WHATWG spec, supported by the modern browsers as an alternative
 * to `XMLHttpRequest`. Notably, it returns `Promise`s for both the initial response
 * header, and for the body stream, so you can chain up an execution pipeline using `then()`.
 *
 * The demo above just mimicks that functionality.
 * No actual requests were harmed.
 *
 *      fetch( 'https://bytesized.tv/', { mode: 'same-origin' } )
 *          .then( ( response ) => {
 *              console.log( response.status );
 *
 *              return response.text();
 *          } )
 *          .then( ( text ) => {
 *              console.log( text );
 *          } )
 *          .catch( ( reason ) => {
 *              console.warn( 'There was a problem:', reason );
 *          } );
 */
