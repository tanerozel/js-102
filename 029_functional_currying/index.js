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
const check = util.check;
const log = console.log;

{
    // const curry = function( f ) {
    //     return function( x ) {
    //         return function( y ) {
    //             return f( x, y );
    //         }
    //     }
    // };

    const curry = ( fn ) => ( ...args ) => fn.bind( null, ...args );

    const sum = ( a, b ) => a + b;

    const curriedSum = curry( sum );

    separator();

    check( sum( 3, 2 ) === 5, 'Sum is five.' );
    check( curriedSum( 3 )( 2 ) === 5, 'Curried sum is five.' );
    check( curriedSum()( 3, 2 ) === 5, 'Curried sum is five.' );
    check( curriedSum( 3, 2 )() === 5, 'Curried sum is five.' );

    separator();
}

const curry = ( fn ) => ( ...args ) => fn.bind( null, ...args );

/*
 * `curry` takes a function `fn` and returns a “higher-order function”(*)
 * that returns a “partially-applied”(**) version of `fn`, when (the returned function by `curry`) is called.
 *
 * (*) A “higher-order function” is just a nerdy way of saying “a function that returns another function”.
 * (**) You need to call a partially-applied function with the remaining set of arguments to fully evaluate it.
 *
 * In certain functional languages (like Haskell), currying is not a big deal because functions are
 * curried by default; however, you should use the `curry` helper in JavaScript if you want to make
 * a function behave that way.
 */

{
    const sum = ( a, b, c, d ) => a + b + c + d;

    const curriedSum = curry( sum );

    log( sum( 1, 2, 3, 4 ) );
    log( curriedSum( 1 )( 2, 3, 4 ) );
    log( curriedSum( 1, 2 )( 3, 4 ) );

    separator();

    // If you want to go bananas, you can curry a curried function:
    const curriedCurriedSum = curry( curry ( sum ) );

    log( curriedCurriedSum( 1 )( 2, 3 )( 4 ) );
    log( curriedCurriedSum( 1, 2 )( 3 )( 4 ) );
    log( curriedCurriedSum()( 1, 2, 3 )( 4 ) );
    log( curriedCurriedSum()()( 1, 2, 3, 4 ) );

    // As long as the total number of arguments match up, it will work just fine.

    separator();
}

{
    const map = curry( ( fn, arr ) => arr.map( fn ) );
    const join = curry( ( str, arr ) => arr.join( str ) );
    const lcase = ( str ) => str.toLowerCase();
    const split = curry( ( token, str ) => str.split( token ) );

    const input = 'JavaScript Rocks!';
    const splitted = split( ' ' )( input );
    const mapped = map( lcase )( splitted );
    const joined = join( '-' )( mapped );
    const encoded = encodeURIComponent( joined );

    log( 'Encoded:', encoded );

    separator();

    const toSlug = ( input ) => encodeURIComponent(
        join( '-' )(
            map( lcase )(
                split( ' ' )( input )
            )
        )
    );

    log( toSlug( input ) );

    separator();
}
