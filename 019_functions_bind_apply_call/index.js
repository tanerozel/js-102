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

const compute = ( a, b, c, x ) => a * x**2 + b * x + c;

log( compute( 12, 3, 4, 5 ) );
log( compute( ...[ 12, 3, 4, 5 ] ) );
log( compute.apply( null, [ 12, 3, 4, 5 ] ) );
log( compute.call( null, 12, 3, 4, 5 ) );
log( compute.call( null, ...[ 12, 3, 4, 5 ] ) );

separator();

function computeWithContext( b, c ) {
    return this.a * this.x**2 + b * this.x + c;
}

const context = {
    a: 12, x: 5
};

context.compute = computeWithContext;

log( context.compute( 3, 4 ) );
log( computeWithContext.call( context, 3, 4 ) );
log( computeWithContext.apply( context, [ 3, 4 ] ) );

separator();

const partialCompute = computeWithContext.bind( context, 3 );

log( partialCompute( 4 ) );

const secondPartialCompute = computeWithContext.bind( context, 3, 4 );

log( secondPartialCompute() );

separator();

log( computeWithContext.bind( context, 3 )( 4 ) );
log( computeWithContext.bind( context )( 3, 4 ) );
log( computeWithContext.bind( context, 3 ).bind( null, 4 )() );
log( computeWithContext.bind( context ).bind( null, 3 )( 4 ) );

separator();

// var new_array = arr.map(callback[, thisArg])
// map :: callback.call( thisArg, element, index, array )
// callback ===> Number.call [[ Number.call(Number, 42) ]] ==> Number.call.call(Number, Number, 42)
log( Array.apply( null, { length: 10 } ).map( Number.call, Number ) );

separator();

// ## Lessons to Learn
//
// `bind`, `call`, and `apply` help you do “reflection” in JavaScript.
//
// There are times that this can prove to be useful.
//
// However, keep in mind that if you are trying to solve a problem with “reflection”,
// you may end up having more problems than you initially started with.
//
// Especially `bind` give you great power, and with great power, comes great responsibility.
//
// Use these tools wisely.
