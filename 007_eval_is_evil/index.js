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

/*
 * `eval()` allows arbitrary code execution, and it is considered a security risk.
 *
 * However, that can be misleading too. The mere existence of `eval()` does not pose
 * a risk, rather how `eval()` is used is the actual issue.
 *
 * Despite popular theory (And Crockford’s stubbornness and insistence), the mere
 * presence of `eval()` does not indicate a problem:
 *
 *     * Using `eval()` does NOT autmatically open up you to an XSS attack.
 *       Nor does it mean that there is a security gap that you are not aware of.
 *     * Just like any tool, you should know how to use it correctly;
 *       and even when used incorrectly, the potential for damage is still fairly
 *       low and isolated.
 *
 * Regardless of you think whether `eval()` imposes a security risk or not, there are not
 * many legitimate use case of using `eval()` unless you are writing a some-languate-to-javascript lexer,
 * or you are doing some sort of advanced parsing and tokenization.
 *
 * What is lesser known is `evals()` equally-evil sisters: `setTimeout`, `setInterval`, and `Function`.
 */

separator();

log( eval( '2 * 3') );
log( new Function( 'return 2 * 3' )() );

// You get this warning in strict mode:
//      “throw new TypeError('"callback" argument must be a function');”
//
// setTimeout( 'log( 2 * 3 ); separator()', 100 );

separator();

/*
 * ## Lessons to Learn
 *
 * * `eval()` is “evil”; yet, it is not as monstrous as it has been advocated.
 *
 * * 99% of the time you won’t need `eval()` anyway.
 */
