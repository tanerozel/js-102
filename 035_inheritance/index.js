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
const check = util.check;
const checkInverse = util.checkInverse;
const separator = util.separator;
const log = console.log;
const getPrototypeOf = Object.getPrototypeOf;

separator();

const Tool = require( './tool' );
const Hammer = require( './hammer' );
const Nail = require( './nail' );


/*
 * This is kind-of equivalent to
 * 1. run the constructor function `Hammer`.
 * 2. And exec `hammer.__proto__ = Hammer.prototype`
 */
const hammer = new Hammer( 'sledge' ); // Logs “A sledgehammer is hittin Nine Inch Nails, 10 times!”.

const nail = new Nail( 'Nine Inch' );

log( 'hammer.hit(10, nail);' );

hammer.hit( 10, nail );

/*
                                                   ┌───────────────────┐
                                                   │       null        │
                                                   └───────────────────┘
                                                             ▲
                                                             │
                                                       {{PROTOTYPE}}
                                                             │
                                                   ┌──────────────────┐
                                        ┌─────────▶│ Object.prototype │◀─┐
                                        │          ├──────────────────┤  │
                                        │          │      Object      │  │
                                        │          └──────────────────┘  │
                                        │                    │           │
                                  {{PROTOTYPE}}              │           │
                                        │                    │           │
                              ┌──────────────────┐           │     {{PROTOTYPE}}
                          ┌──▶│  Tool.prototype  │           │           │
                          │   ├──────────────────┤     {{PROTOTYPE}}     │
                          │   │       Tool       │           │           │
                          │   └──────────────────┘           │           │
                          │                                  │           │
                    {{PROTOTYPE}}                            │           │
                          │                                  ▼           │
                ┌───────────────────┐              ┌──────────────────┐  │
                │    new Tool()     │           ┌─▶│Function.prototype│──┘
                └───────────────────┘           │  ├──────────────────┤
                          ▲                     │  │     Function     │
                          ║                     │  └──────────────────┘
                ┌──────────────────┐            │            │
            ┌──▶│ Hammer.prototype │      {{PROTOTYPE}}      │
            │   ├──────────────────┤            └────────────┘
            │   │      Hammer      │
            │   └──────────────────┘
            │
      {{PROTOTYPE}}
            │
┌───────────────────────┐
│ new Hammer('sledge')  │
└───────────────────────┘
 */

separator();

log( 'Calling functions of hammer:' );

hammer.protoFunction();
hammer.memberFunction();

separator();

log( 'Calling functions of nail:' );

nail.protoFunction();
nail.memberFunction();

separator();

checkInverse(
    getPrototypeOf( hammer ).hasOwnProperty( 'protoFunction' ),
    '`hammer`’s immediate {{PROTOTYPE}} does not have a `protoFunction`.'
);

check(
    getPrototypeOf( getPrototypeOf( hammer ) ).hasOwnProperty( 'protoFunction' ),
    '`hammer`’s second-level {{PROTOTYPE}} has a `protoFunction`.'
);

check(
    getPrototypeOf( getPrototypeOf( hammer ) ) === Tool.prototype,
    '… and that {{PROTOTYPE}} is `Tool.prototype`.'
);

check( hammer instanceof Hammer, '`hammer` is a `Hammer`.' );
check( hammer instanceof Tool, '`hammer` is a `Tool`.' );
check( hammer instanceof Object, '`hammer` is an `Object`.' );

separator();

log( 'Everything is an object' );
log( false.toString() );
log( [1, 2, 3].toString() );

function bazinga() {}
bazinga.bar = 42;

log( bazinga.bar );

log( ( 2 ).toString() );

const hash = {};

log( hash );

const anotherHash = { top: 44, left: 22, zIndex: 100, name: 'kittens', origin: 399, '124': 25 };

log( anotherHash['124'] );

const collection = [ 1, 'alabama' ];

// The keys of an array are of type “string”.
for ( let key in collection ) {
    log( collection[ key ], key, typeof key );
}

separator();

// Same is true for objects.
for ( let key in anotherHash ) {
    log( anotherHash[ key ], key, typeof key );
}

separator();

// You can use the `delete` operator to remove properties from a hash.

delete anotherHash.top;

log( anotherHash );

separator();

/*
 * ## Lessons to Learn
 *
 * First things first: JavaScript is NOT Java.
 *
 * Although inheritance looks cool from the outside, there are much better
 * constructs in JavaScript that you can replace with inheritance.
 *
 * Consider using “modules” and “composition” instead of “classes” and “inheritance”.
 *
 * That is, prefer functional composition over inheritance whenever you can.
 *
 * This does not mean inheritance is useless. It is just don’t try to put a classical inheritance
 * model on top of a runtime that is designed for prototypal inheritance.
 *
 * When you find yourself thinking in object hierarchies and subclasses, think again and
 * more often than not you can come up with a simpler solution that uses functional composition.
 */
