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

function test() {
    {
        /*
         * `var` is `function`-scoped,
         * whereas `let` and `const` are “block”-scoped.
         */
        var pumpkinsCarvedSoFar = 40;
        let monsterCount = 20;

        log( `monsterCount: ${monsterCount}` );
    }

    function inner() {
        log( `inner pumpkins: ${pumpkinsCarvedSoFar}` );
        log( `inner typeof monsterCount ${typeof monsterCount}` );
    }

    inner();

    const meanings = {
        life: 42
    };

    // meanings = {}; // illegal!

    meanings.life = 44; // legal.

    const nearbyMoons = 1;

    // nearbyMoons = 2; // illegal!

    log( `nearbyMoons: ${nearbyMoons}` );
}

separator();

test();

separator();

// ## Lessons to Learn
//
// * Always use `const`.
//
// * In rare occasions you “may” neeed to use `let`;
//   at least think twice before you do that.
//   Most of the time it’s you mutating something you should not,
//   and you can create an alternate solution using `const`.
//
// * NEVER use `var`.
