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

separator();

const counter = ( () => {
    let i = 0;

    return {
        get: () => i,
        set: ( val ) => i = val,
        increment: () => i++
    }
})();

check( counter.get() === 0, 'counter is initially zero.' );

counter.set( 3 );
counter.increment();
counter.increment();

check( counter.get() === 5, 'counter is five.' );
check( counter.i === undefined, '`counter.i` is not defined.' );

separator();
