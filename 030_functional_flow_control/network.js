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

const fakeAjaxCall = ( url, callback ) => {
    setTimeout( () => {
        const flipped = ( Math.random() > 0.2 );

        if ( flipped ) {
            callback( { status: 500, message: `Request to “${url}” failed.` }, null );

            return;
        }

        callback( null, { payload: { data: 42, url } } );
    }, 1200 );
};

// The callbacks that are in te form `fn( err, data )` are also known as “nodebacks”.
//
// Node.JS core modules extensively use this approach for asynchronous flow control.
// In this callback this first argument is always the error, and the second argument
// will be the payload.
//
// Node.JS’s heavy use of callbacks dates back to a style of programming “way” older
// than JavaScript itself.
//
// See “Continuation Passing Style” <https://en.wikipedia.org/wiki/Continuation-passing_style>
// for a more in-depth information about the subject matter.
//
// In Continuation-Passing Style of programming, instead of returning a value, you pass a continuation.
//
// Although there is a subtle nuance, for all practical purposes you can think of a “continuation”
// as a “callback” that you pass the return value of a computation.
//
// This, in a sense, is also inversion of control:
// <https://en.wikipedia.org/wiki/Inversion_of_control>
//
// You invert the control flow.
//
// Instead of directly returning the value,
// the owner of the callback will be notified whenever the value is ready.
//
// This is also called the “Hollywood Principle” of programming (i.e., “Don’t call us, we’ll call you back.”)

exports.fakeAjaxCall = fakeAjaxCall;
