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

// Unless you are using `let` or `const`, there is only a single scope in JavaScript
// and that is the “function scope”.

separator();

var meaningOfLife = 42;

function scopeTest() {
    log( 'scopeTest', meaningOfLife ); // will be `undefined`.

    function innerScope() {
        var meaningOfLife = 46;

        log( 'innerScope', meaningOfLife );
    }

    var meaningOfLife = 44;

    log( 'scopeTest', meaningOfLife );

    innerScope();

    log( 'scopetest', meaningOfLife );
}

log( 'outer', meaningOfLife );
scopeTest();
log( 'outer', meaningOfLife );

separator();

// Hoisting
function doTheThing() {
    // log( notDeclared ); // ReferenceError: notDeclared is not defined.

    log( definedLater ); // undefined

    var definedLater;

    definedLater  = 'I am defined.';

    log( declaredTogether ); // undefined

    var declaredTogether = 'I am defined.';

    log( declaredTogether ); // "I am defined."

    doSomethingElse(); // "I did it."

    // This will be hoisted to the top of the scope.
    function doSomethingElse() { log( 'I did it.'); }

    // declaredFunction(); // TypeError: undefined is not a function.

    // Declared function bodies do not get hoisted.
    // Just the variable `declaredFunction` gets hoisted, which becomes `undefined`.
    var declaredFunction = function() {
        log( 'I did it.' );
    };

    declaredFunction(); // "I did it."
}

doTheThing();

separator();

const fibonacci = () => {};

const memoize = ( func ) => {
    const cache = {};

    return ( ...args ) => {
        const key = args.toString();

        return key in cache ? cache[ key ] : ( cache[ key ] = func( ...args ) );
    };
};

const fasterFibonacci = memoize( fibonacci );

separator();

// ## Lessons to Learn
//
// Do not attempt to user your variables before they are declared
// (using `const` and `let` will already take care of that).
//
// Due to “hoisting”, declaring your variables at the top of the execution scope
// used to be a “best practice”; however, with the introduction of `const` and `let`
// keywords, a better practice has been to declare your variables closer to the place
// that you are planning to use them.
