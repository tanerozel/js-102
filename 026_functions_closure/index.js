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

// we’ll need to call `node --harmony-async-await`.

separator();

let counter = 0;

for ( var i = 0; i < 10; i++ ) {
    setTimeout( function() {
        log( i );

        counter++;
    }, ( i + 1 ) * 100 );
}

const check = () => {
    if ( counter === 10 ) {
        counter = 0;

        separator();

        phaseTwo();

        return;
    }

    setImmediate( check );
};

check();

const phaseTwo = () => {
    let counter = 0;

    // Loops of the form for (let x…) create a fresh binding for x in each iteration.
    for ( let i = 0; i < 10; i++ ) {
        setTimeout( () => {
            log( i );

            counter++;
        }, ( i + 1 ) * 100 );
    }

    const check = () => {
        if ( counter === 10 ) {
            counter = 0;

            separator();

            phaseThree();

            return;
        }

        setImmediate( check );// setTimeout(fn, 0);
    };

    check();
};

const phaseThree = () => {
    const promises = [];

    const promise = ( i ) => new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            log( i );

            void reject;

            resolve( i );
        }, 100 );
    } );

    for ( let i = 0; i < 10; i++ ) {
        promises.push( promise( i ) );
    }

    // Promise.race
    Promise.all( promises ).then( () => phaseFour() );
};

const phaseFour = () => {
    separator();

    const promise = ( i ) => new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            log( i );

            void reject;

            resolve( i );
        }, 100 );
    } );

    /*
     * async/await is “awesome”; with one problem though:
     * The API has not been standardized yet (as of 2016).
     *
     * However, it is stable enough to be used in projects.
     * And with the introduction of Node v7+, the usage and the standardization
     * of the async/await API will become more and more prominent in the future.
     */

    async function logStuff() {
        for ( let i = 0; i < 10; i++ ) {
            await promise( i );
        }

        separator();
    }

    logStuff();
};

