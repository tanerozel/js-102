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

const Product = require( './product' );

separator();

const product = new Product( 'Quadcopter' );

log( product.getId() );

separator();

const s = new Set();

s.add( 'hello' ).add( 'goodbye' ).add( 'hello' );

check( s.size === 2, 'Sets cannot have duplicate items.' );
check( s.has( 'hello' ) === true, 'Set has "hello".' );

separator();

const m = new Map();

m.set( 'hello', 42 );
m.set( s, 34 );

// JavaScript objects, and arrays can only have keys of type string.
// Unlike these, maps and sets can have keys of any type.
check( m.get( s ) === 34, 'Maps (and sets) can have keys of any type.' );

separator();

const wm = new WeakMap();

wm.set( s, { extra: 42 } );

check( wm.size === undefined, 'Since `weakmap` is “weak”, you cannot know its size.' );

separator();

const ws = new WeakSet();

ws.add( { data: 42 } );

// Because the added object has no other references,
// it will not be held in the WeakSet.

log( wm );
log( ws );

separator();
