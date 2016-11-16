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

function declaredFunction( data ) {
    log( 'Hola from function declaration. ', data );
}

const expressedFunction = function( data ) {
    log( 'Hola from function expression', data );
};

// Note that using named functions promote readability.
// It also is very helpful when you take a heap snapshot, to see those names
// instead of cryptic memory addresses to sift through.
//
// ES6 specification states that names will be given to anonymous function expressions
// whenever possible; so naming your functions is not as important as it used to be.
//
// However if you see an anonymous function in a stack trace, it is still a good practice
// to name it so that you’ll get a better debug output next time.

const namedFunctionRef = function namedFunction( data ) { log( 'Allo allo! ', data ); };

separator();

declaredFunction( 42 );
expressedFunction( 42 );
namedFunctionRef( 42 );

separator();

const aliens = {
    name: 'Zorg Mothership',

    invade: function( planet ) {
        log( `The ${this.name} is invading the ${planet}.` );

        // Functions create their own scopes:
        ( function iife() { log( `IIFE: ${this.name}.` ); } )();

        // Fat arrows have lexical scopes:
        ( () => log( `Fat arrow: ${this.name}.` ) )();
    },

    exterminate: () => log( `Exterminating ${this.type} ${this.name}!` )
};

aliens.invade( 'planet Earth' );

separator();

colony = {
    name: 'USS Enterprise',

    // In JavaScript, everthing is “pluggable”.
    // This is both a blessing, and also a curse.
    invade: aliens.invade
};

colony.invade( 'planet Zorg' );

separator();

// ## Lessons to Learn
//
// 1. Functions give a lot of flexibility to the language (we’ll see more of that in
//    the upcoming sections, too):
//
//    * You can pass functions as arguments; you can return functions from functions.
//    * You can create closures to wrap context.
//    * You can create “higher order functions” to freeze computations to be executed later.
//
// 2. `this` can mean many things depending on where you use, and how you use it:
//
//    * The less `new` and `this` you use in your code, the more portable,
//      predictable, maintainable, and “refactorable” your code will be.
//
//    *  Even if you use `new` and `this` internally, abstract them with “factory methods”
//       and do not expose them from your APIs. It is the “open-closed” principle:
//       The consumers of your APIs should not know or care about the initialization
//       details of your system.
//
// 3. Fat arrows have lexical scope, and this can have unexpected consequences if
//    you don’t know how they work.
