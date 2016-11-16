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

separator();

{
    const prefix = 'foo';

    const myObject = {
        [ prefix + 'bar' ]: 'hello',
        [ prefix + 'baz' ]: 'world'
    };

    log( myObject.foobar );
    log( myObject.foobaz );
}

separator();

{
    const theObject = {
        value: 42,
        foo( a, b ) {},
        bar( x, y ) {},
        // *quux(a, b) {}
        toString() { return this.value; }
    };

    check( theObject.toString() === 42, 'Overrode `toString`.' );
}

separator();

{
    const getPoint = () => {
        const x = 1;
        const y = 2;

        return { x, y };
    };

    log ( getPoint() );
}

separator();

{
    // Destructuring

    const baz = 42;

    const foo = { baz };

    log( foo, baz );

    const [ a, , b ] = [ 1, 2, 3 ];

    const g = ( { name: x } ) => log( x );

    g( { name: 'Jane' } );

    const [ aa ] = [];
    const [ bb = 1 ] = [];

    check( aa === undefined, '`aa` is not defined.' );
    check( bb === 1, '`bb` has its default value.' );
}

separator();

// ## Lessons to Learn
//
// * Destructuring is the best thing since sliced bread; use it.
//
// * The second best thing is the spread operator. Show some love to it.
//
// * Using computed properties (in moderation) can improve your code’s readability.
