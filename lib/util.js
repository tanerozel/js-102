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

/*
 * Note that “generic” module names (`util` in this case) have a tendency to grow in time.
 * If you see that your module is being overly-populated, consider loglcally
 * splitting it into smaller modules.
 *
 * Nobody wants a “God module” that claims to do everything, and does them “half-baked”.
 *
 * A module should do one thing, and it should do that thing well.
 *
 * Also note that since we won’t be using transpilers, as of the creation of the repo,
 * using the `import` syntax is out of bounds. We will continue with the good old `require`.
 */

const assert = require( 'assert' );
const log = console.log;

const separator = () => log( '\n-.–.—.-.–.—.-.–.—.-.–.—\n' );

const check = ( expression, message ) => {
    assert( expression, message );

    log( message );
};

const checkInverse = ( expression, message ) => check( !expression, message );

// If you don’t export something, it will remain private to the module.
const notExported = () => {};

exports.check = check;
exports.checkInverse = checkInverse;
exports.separator = separator;
