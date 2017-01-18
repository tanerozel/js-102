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

// ## Caveat
//
// Don’t forget to call it with `--harmony-async-await` flag:
// node --harmony-async-await 030_functional_promises//030_008_async_await.js

const util = require( '../lib/util' );
const separator = util.separator;
const log = console.log;

const network = require( './network' );
const fetchCPS = network.fakeAjaxCall;

const fetch = ( url ) => {
    return new Promise( ( resolve, reject ) => {
        fetchCPS( url, ( error, data ) => {
            if ( error ) {
                reject( error );

                return;
            }

            resolve( data );
        } );
    } );
}

async function fetchUntilSuccess( url ) {
    return fetch( url )
        .then( ( result ) => result )
        .catch( ( reason ) => {
            log( 'Error', reason );

            return fetchUntilSuccess( url );
        } );
}

// fetchUntilSuccess( 'https://bytesized.tv' )
//     .then( ( result ) => log( 'a', result ) )
//     .then( () => fetchUntilSuccess( 'https://volkan.io' ) )
//     .then( ( result ) => log( 'b', result ) )
//     .then( () => fetchUntilSuccess( 'https://o2js.com' ) )
//     .then( ( result ) => log( 'c', result ) );

async function run() {
    try {
        log( 'Started first request…' );

        const firstResponse = await fetchUntilSuccess( 'https://bytesized.tv' );
        log( 'a', firstResponse );

        log( 'Started second request…' );

        const secondResponse = await fetchUntilSuccess( 'https://volkan.io' );
        log( 'b', secondResponse );

        log( 'Started third request…' );

        const thirdResponse = await fetchUntilSuccess( 'https://o2js.com' );

        log( 'c', thirdResponse );
    } catch( ex ) {
        log( ex );
    } finally {
        log( 'All done!' );
    }
}

run();

// ## Notes
//
// Compare the async/await usage with Promises, and also with older CPS/nodeback usage.
//
// Using async/await “flattens out” the code and makes async code “linear“ to read.
//
// Asnyc code almost feels like as if it was synchronous.
//
// Promises were an improvement over CPS, and async/await is another step forward
// in making the code easier to follow and reason about.
//
// At the time of this videocast (early 2017) browser support is limited to Chrome
// and cutting-edge versions of Firefox and Opera; and for Node.JS support you need
// to enable --harmony-async-await flag and use Node v7 or above.
//
// However, it is highly likely that this pattern will get wider support and adoption.
//
// Async/await is currently a stage-3 proposal for ES7 <https://tc39.github.io/ecmascript-asyncawait/>.
//
// A “stage 3 proposal” means that the feature is “almost” standardized.
//
// Here’s the steps a proposal takes until it is finalized by TC39:
// (see also: <https://tc39.github.io> <https://tc39.github.io/ecma262/>)
//
// Stage 0: Strawman
// Stage 1: Proposal
// Stage 2: Draft
// Stage 3: Candidate
// Stage 4: Finished

