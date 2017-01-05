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

const network = require( './network' );
const fetch = network.fakeAjaxCall;

fetch( 'https://bytesized.tv', ( error, data ) => {
    if ( error ) {
        log( error );

        return;
    }

    log( data );
} );

// ## Note
//
// `fetch()` is a WHATWG spec, supported by the modern browsers as an alternative
// to `XMLHttpRequest`. Notably, it returns `Promise`s for both the initial response
// header, and for the body stream, so you can chain up an execution pipeline using `then()`.
//
// The demo above just mimicks that functionality.
// No actual requests were harmed.
//
// Here’s an example of how a `fetch` call can be made:
//
//      fetch( 'https://bytesized.tv/', { mode: 'same-origin' } )
//          .then( ( response ) => {
//              console.log( response.status );
//
//              return response.text();
//          } )
//          .then( ( text ) => {
//              console.log( text );
//          } )
//          .catch( ( reason ) => {
//              console.warn( 'There was a problem:', reason );
//          } );