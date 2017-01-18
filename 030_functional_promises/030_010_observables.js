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

const rx = require( 'rx' );
const Observable = rx.Observable;
const fromPromise = Observable.fromPromise;

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

const fetchUntilSuccess = ( url ) =>
    fetch( url )
        .then( ( result ) => result )
        .catch( ( reason ) => {
            //log( 'Error', reason );

            return fetchUntilSuccess( url );
        } );

const stream1 = fromPromise( fetchUntilSuccess( 'https://bytesized.tv' ) );
const stream2 = fromPromise( Promise.resolve( 'https://volkan.io' ) );
const stream3 = fromPromise( fetchUntilSuccess( 'https://o2js.com' ) );
const stream4 = fromPromise( Promise.resolve( 'https://example.com' ) );

// const firstResponse = await fetchUntilSuccess( 'https://bytesized.tv' );
// log( 'a', firstResponse );
// const secondResponse = await fetchUntilSuccess( 'https://volkan.io' );
// log( 'b', secondResponse );
// const thirdResponse = await fetchUntilSuccess( 'https://o2js.com' );
// log( 'All done!' );

stream1
    .do( ( x ) => log( 'a', x ) )
    .flatMap( () => stream2 )
    .do( ( x ) => log( 'b', x ) )
    .flatMap( () => stream3 )
    .do( ( x ) => log( 'c', x ) )
    .flatMap( () => stream4 )
    .do( ( x ) => log( 'd', x ) )
    .subscribe(
        ( x ) => log( 'All done!' )
    );

// Functional Reactive Programming is a vast topic that will require an entire series
// of episodes to be covered properly.
//
// If you are new to the concept, you can get a feeling of what it is, and how it
// makes state management of asyncronous streams easier see:
//
// * https://github.com/Reactive-Extensions/RxJS
// * http://reactivex.io/learnrx/
// * https://gist.github.com/staltz/868e7e9bc2a7b8c1f754