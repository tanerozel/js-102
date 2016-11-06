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

const one = 1;
const two = 2;
const three = '3';

separator();

check( one + two + three === '33', '"33" instead of "123.' );
check( ( '' + one ) + ( '' + two ) + ( '' + three ) === '123', '"123" as expected' );
check( ''.concat( one, two, three ) === '123', '"123" as expected' );
check( `${one}${two}${three}` === '123', '"123" as expected' );

separator();

const person = {
    name: 'Jubei Yamada',
    job: 'Sumo Wrestler',
    city: 'Tokyo, Nikkei',
    bio: 'Jubei is the fastest Sumo wrestler in the known universe!'
};

// Poor man’s handlebars.js:
const markup = `
    <div class="person">
        <h2>${person.name}</h2>
        <p class="location">${person.city}</p>
        <p class="bio">${person.bio}</p>
    </div>
`;

log( markup );

separator();

check( String.raw `foo\n${ 42 }bar` === 'foo\\n42bar', '`String.raw` displays raw strings.' );

separator();

/*
 * ## Lessons to Learn
 *
 * Do not trust implicit type conversion (i.e. coercion).
 * Always use correct types for your date.
 * Related to that: Always sanitize your data.
 *
 * Template strings are NOT XSS-immune, you still need to properly escape
 * and sanitize your data (and/or use a framework that does that for you).
 */
