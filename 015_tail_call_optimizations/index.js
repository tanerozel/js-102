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
 * The recent ES2015 spec states that the calls in tail
 * position are guaranteed to not grow the stack unboundedly.
 *
 * This will make the recursive algorithms safe in the face of unbounded inputs.
 */

function factorial( n, acc = 1 ) {
    if ( n <= 1 ) { return acc; }

    return factorial( n -1, n * acc );
}

// Stack overflow in most implementations (as of 2016)
// It will be safe to do that once ES2015+ gets fully-supported.
factorial( 100000 );
