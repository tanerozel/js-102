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
const fetchCPS = network.fakeAjaxCall;

const fetch = ( url ) => new Promise(
    ( resolve, reject ) => {
        fetchCPS( url, ( error, data ) => {
            if ( error ) {
                reject( error );

                return;
            }

            resolve( data )
        } );
    }
);


const fetchUntilSuccess = () =>
    fetch( 'https://bytesized.tv' )
        .then( ( result ) => result )
        .catch( ( reason ) => {
            log( 'Error', reason );

            return fetchUntilSuccess();
        } );

fetchUntilSuccess().then( ( result ) => log( result ) );
