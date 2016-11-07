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

{
    log( [ 1, 2, 3 ].map( function( n ) { return n * 2; } ) );
    log( [ 1, 2, 3 ].map( ( n ) => n * 2 ) );
}

separator();

{
    const fives = [];
    const nums = [ 1, 2, 5, 15, 25, 32 ];

    nums.forEach( ( number ) => {
        if ( number % 5 !== 0 ) { return; }

        fives.push( number );
    } );

    log( fives );
}

separator();

{
    for ( const element of [ 1, 2, 3] ) {
        log( element );
    }

    const iterator = [ 1, 2, 3 ][ Symbol.iterator ]();

    log();

    let next = iterator.next();
    while ( !next.done ) {
        log( next.value );

        next = iterator.next();
    }
}

separator();

{
    const sum = [ 0, 1, 2, 3 ].reduce( ( accumulator, current ) => accumulator + current, 0 );

    log( sum );
}

separator();

{
    const deduped1 = [ 1, 1, 'a', 'a' ].filter( ( item, index, array ) => array.indexOf( item ) === index );

    log( deduped1 );

    const deduped2 = Array.from( new Set( [ 1, 1, 'a', 'a' ] ) );

    log( deduped2 );

    const dedupe = ( array ) => {
        const hashTable = {};

        return array.filter( ( item ) => {
            const key = JSON.stringify( item );

            return !!hashTable[ key] ? false : hashTable[ key ]  = true;
        } );
    };

    const deduped3 = dedupe( [
        { a: 1 },
        { a: 1 },
        [ 1, 2 ],
        [ 1, 2 ]
    ] );

    log( deduped3 );
}

separator();

{
    const listFriends = ( ...args ) => {
        const friends = args;

        friends.forEach( ( friend ) => log( friend ) );
    };

    listFriends( 'Alice', 'Bob' );

    function listFriendsOldStyle() {
        const friends = Array.from( arguments );


        friends.forEach( ( friend ) => log( friend ) );
    }

    listFriendsOldStyle( 'Alice', 'Bob' );
}

separator();

{
    const collection = [ 1, 2, 3, 4 ];

    log( collection.slice( -1 ) );
    log( collection.slice( -2 ) );
    log( collection.slice( -3 ) );
    log( collection.slice( -4 ) );
}

separator();

{
    const ages = [ 12, 19, 6, 4 ];

    const firstAdult = ages.find( ( age ) => age >= 18 );
    const firstAdultIndex = ages.findIndex( ( age ) => age >= 18 );

    log( firstAdult, firstAdultIndex );
}

separator();

{
    const numbers = [ 9, 4, 7, 12, 55 ];

    log( Math.min( ...numbers ) );
}

separator();

{
    let list = [ 1, 2, 3, 4 ];

    const empty = () => list = [];

    empty();

    let list2 = [ 1, 2, 3, 4 ];

    const empty2 = () => list2.length = 0;

    empty2();

    log( list, list2 );

    log();

    const a1 = [ 1, 2, 3 ];
    const a2 = a1;

    a1.length = 0;

    log( a1 );
    log( a2 );
}

separator();

{
    const keywords = [ 'do', 'if', 'in', 'for', 'new', 'try', 'var', 'case', 'else', 'enum', 'null', 'this', 'true',
        'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'delete', 'export',
        'import', 'return', 'switch', 'typeof', 'default', 'extends', 'finally', 'continue', 'debugger', 'function',
        'if', 'in', 'for', 'int', 'new', 'try', 'var', 'byte', 'case', 'char', 'else', 'enum', 'goto', 'long', 'null',
        'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'final', 'float', 'short', 'super',
        'throw', 'while', 'delete', 'double', 'export', 'import', 'native', 'public', 'return', 'static', 'switch',
        'throws', 'typeof', 'boolean', 'default', 'extends', 'finally', 'package', 'private', 'abstract', 'continue',
        'debugger', 'function', 'volatile', 'interface', 'protected', 'transient', 'implements', 'instanceof',
        'synchronized', 'do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null',
        'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'yield',
        'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends', 'finally',
        'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface', 'protected', 'implements',
        'instanceof', 'do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null',
        'this', 'true', 'void', 'with', 'await', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw',
        'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default',
        'extends', 'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface',
        'protected', 'implements', 'instanceof' ];

    const filterAndSortKeywords = ( keywords ) => keywords
        .filter( ( keyword, index ) => keywords.lastIndexOf( keyword ) === index )
        .sort( ( a, b ) => {
            if ( a === b ) { return 0; }

            return a < b ? -1 : 1;
        } );

    log( filterAndSortKeywords( keywords ) );
}

separator();

{
    const collection = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ];

    const flattened = collection.reduce(
        ( accumulator, current ) => accumulator.concat( current ), []
    );

    log( flattened );

    // This is the more modern way of doing it:
    log( [].concat( ...collection ) );

    log();

    const items = [ { price: 10 }, { price: 120 }, { price: 1000 } ];

    const reducer = ( sumSoFar, item ) => sumSoFar + item.price;

    log( items.reduce( reducer, 0 ) );

    log();


    /*
     * Note: The example below is deliberately made more complicated than it ought to be.
     * Normally, you should split this expression into smaller functions and compose
     * them together.
     *
     * Looking at a functional expression is similar to looking at a mathematical formula:
     * You cannot “see” it all at once; you’ll have to slowly ingest it; you’ll need to
     * tear it into pieces, analyze and understand each piece separately to form an
     * accurate mental model of how things tie together.
     *
     * When you need to think in higher levels of abstractions, it’s inevitable that you’ll
     * need to slow down. — And fear not, slowing down is a good thing; it will, indeed,
     * make you far more expressive and productive!
     */
    log(
        items.reduce(
            (
                ( reducers ) =>
                    ( accumulator, current ) =>
                        Object.keys( reducers ).reduce(
                            ( _, key ) => reducers[ key ]( accumulator, current ),
                            {}
                        )
            )( {
                totalInDollars: ( accumulator, current ) => {
                    accumulator.dollars += current.price * 0.89;

                    return accumulator;
                },
                totalInEuros: ( accumulator, current ) => {
                    accumulator.euros += current.price * 0.66;

                    return accumulator;
                },
                totalInPounds: ( accumulator, current ) => {
                    accumulator.pounds += current.price * 1.42;

                    return accumulator;
                },
                totalInYens: ( accumulator, current ) => {
                    accumulator.yens += current.price * 112.4;

                    return accumulator;
                },
            } ),
            { dollars: 0, euros: 0, yens: 0, pounds: 0 }
        )
    )
}

separator();

/*
 * ## Lessons to Learn
 *
 * * Thinking functionally requires you to “slow down”.
 *
 * * Just because JavaScript is “composable” does not mean you should be composing
 *   everything and the kitchen sink into a humongous chain of expressions.
 *   Splitting your code into smaller sets of expressions and functions, and then composing them
 *   together as a larger expression will promote readability.
 *
 * * `reduce` is a powerful tool: You can do any kind of filtering and iteration with reduce.
 *   Again, there is a difference between “you can” and “you should” ;)
 *
 * * Show love to Array’s collection methods: `map`, `reduce`, `for … of`, and `forEach`.
 *   Whenver you are using a regular `for` loop, more often than not, you can do the same
 *   thing with one of these collection methods more expressively.
 *   Some would argue that there is a “performance hit” to that, however:
 *     1) Micro-optimization is the root of all evil; you should be measuring, then thinking, and
 *        optimizing only when needed. — Don’t optimize prematurely; readability is much more important.
 *     2) JavaScript engines are getting better and better to accommodate for these speed gaps.
 */
