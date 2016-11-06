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

for ( let i = 0, j = 0; i < 5; i++, j++, j++ ) {
    log( `i = “${i}”, j = “${j}”.` );
}

const a = () => { log( a ); return 'a'; };
const b = () => { log( b ); return 'b'; };
const c = () => { log( c ); return 'c'; };

const x = ( a(), b(), c() );

log( `x: “${x}”.` );

separator();

/*
 * ## Lessons to Learn
 *
 * Comma expressions are generally a sign over “overly-clever” code
 * which could have been written in a simpler way.
 *
 * When possible always prefer simplicity. The person reading the
 * code six months later will thank you.
 * And “that” person could very well be you, too.
 *
 * Bottom line: Avoid comma expressions whenever possible.
 */
