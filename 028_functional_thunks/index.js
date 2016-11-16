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

/*
 * `function`s can take `function`s as arguments, and return other `function`s
 * which creates endless possibilities and constructs.
 *
 * One of these “underappreciated” constructs are “thunks”.
 *
 * “thunk” can mean different things in different contexts.
 *
 * In our case, a “thunk“ is a general function which is used to
 * wrap a synchronous or asynchronous computations.
 *
 * In that context, a “thunk” is nothing but a function that accepts
 * a callback as an argument.
 *
 * To be more specific, a “thunk” is a function that accepts a “nodeback” ( `fn( err, data )` )
 * as an argument.
 *
 * The thunk encloses a computation.
 * When you call a thunk, the thunk evaluates the computation either
 * instantaneously, or at a later point in time.
 *
 * When the computation is done, the callback (i.e. the “nodeback” ) is executed.
 *
 * A more formal definition (from ALGOL(thunks) [1961]):
 *
 *     Thunk is a function that encapsulates synchronous or asynchronous code inside.
 *     Thunk accepts only one callback function as an argument, which is a
 *     continuation-passing style function.
 *     Thunks can return other thunks to allow chaining.
 *
 * There are many variations of how this can be done.
 * We’ll stick with the way it’s done in Koa.js.
 */

const logThunk = ( nodeback ) => {
    log( 'The meaning of life, the universe, and everything is 42.');

    nodeback( null, 42 );
};

logThunk(
    ( error, result ) => {
        if ( error ) {
            log( 'Ooopsie: ', error );

            return;
        }

        log( `${result} is the answer; but what’s the question?` );
    }
);

separator();

// Without additional wrapping the thunk does not prove much value in of itself.
// You, however, can give your thunk some “context” by using a higher-order function.
// The higher-order function will turn the thunk into “cached computations” to
// be executed at a later point in time.

const createMeaningOfLifeThunk = ( theMeaning ) => {
    const error = theMeaning !== 42;

    // Now we are returning a thunk, which locks in whatever we have in the scope
    // when we called the `createMeaningOfLifeThunk` function.
    //
    // Note that we we return is technically a “closure” too.

    return ( nodeback ) => {
        log( `The meaning of life, the universe, and everything is “${theMeaning}”.`);

        nodeback(
            error ? `“${theMeaning}” is NOT the meaning of life, sorry :(` : null,
            theMeaning
        );
    };
};

const whenMeaningFound = ( error, result ) => {
    if ( error ) {
        log( 'Oopsie\n\t', error );

        return;
    }

    log( `${result} is the answer; but what’s the question?` );
};

const validMeaningOfLifeThunk = createMeaningOfLifeThunk( 42 );
const invalidMeaningOfLifeThunk = createMeaningOfLifeThunk( 44 );

validMeaningOfLifeThunk( whenMeaningFound );
invalidMeaningOfLifeThunk( whenMeaningFound );

separator();
