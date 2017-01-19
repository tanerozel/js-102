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

// Remember just one thing, and you’ll be all set:
//
// `this` keyword is determined at “invocation time”, not at declaration time.

{
    // Implicit binding

    separator();

    function greet() {
        console.log( `Howdy, my name is ${this.name}; and I am a ${this.kind}.` );
    }

    const harry = {
        name: 'Harry Potter',
        kind: 'lizard'
    };

    harry.greet = greet;

    harry.greet();

    const ron = {
        name: 'Ron Weasley',
        kind: 'weasel',
        // greet: function greet() {
        //    console.log( `Howdy, my name is ${this.name}; and I am a ${this.kind}.` );
        // }
        // greet: function() {
        //     console.log( `Howdy, my name is ${this.name}; and I am a ${this.kind}.` );
        // }
        greet() {
            log( `Howdy, my name is ${this.name}; and I am a ${this.kind}.` );
        }
    };

    ron.greet();

    separator();
}

{
    // Gotchas:

    function noStringsAttached() {
        log( 'noStringsAttached: `this === global` ?', this === global );
    }

    noStringsAttached();

    const hub = {
        add( fn ) {
            fn();
        }
    };

    function handler() {
        console.log( this.process.version );
    };

    // Structurally similar to
    // `elm.addEventListener( fn )` or `setTimeout( fn )`, or `setInterval( fn )
    hub.add( handler );

    hub.add( function() {
        console.log( this.process.version );
    } );

    separator();

    const that = this;

    const fatArrow = () => log( this === that );

    fatArrow();

    hub.add( () => {
        console.log( this === that );
    } );

    const lexicalBound = () => {
        console.log( this === that );
    };

    hub.add( lexicalBound );

    const API = {
        users: {
            get() {
               const lexical = () => {
                   log( this === API.users );
               };

               lexical();
            }
        }
    };

    API.users.get();

    separator();
}

{
    // Explicit Binding

    function sayMyName() {
        log( this.name );
    }

    sayMyName.call( { name: 'Harry' } );

    const sayMyNameFat = () => log( this.name );

    // Once a stiff, always a stiff:
    sayMyNameFat.call( { name: 'Harry' } );

    sayMyName.apply( { name: 'Harry' } );

    sayMyName.bind( { name: 'Harry' } )();

    separator();
}

{
    // Constructor Binding

    function Wizard( props ) {
        this.name = props.name;
        this.kind = props.kind;
    }

    const dumbeldore = new Wizard( {
        name: 'Wulfric Percivus Albus Bryan Dumbeldore',
        kind: 'Mage'
    } );

    log( dumbeldore.kind );

    function Khajit( props ) {
        return {
            name: props.name,
            kind: props.kind
        }
    };

    const ahkari = new Khajit( { name: 'Ahkari', kind: 'Merchant' } )

    log( ahkari.name );
}

// ## Lessons to Learn
//
// In JavaScript, `this` might mean different things depending on when you call the function,
// how you bind to the function, and whether you are using a fat arrow.
// However, `this` is nothing to be afraid of.
//
// As long as you know the following key points, you’re all set:
//
//     * Fat arrow functions are “always” lexically bound,
//
//     * And `this` refers to the object that the function is attached to
//       at the time of invocation,
//
//     * And you can dynamically bind a context to `this` using
//         * `Function.prototype.bind`,
//         * `Function.prototype.call`,
//         * and `Function.prototype.apply`
