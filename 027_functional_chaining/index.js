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

// The most popular libary that’s known for chaining is “jQuery”.

class Person {
    constructor( name ) { this.name = name; }

    sayName() {
        log( `Hello, my name is ${this.name}.` );

        return this;
    }

    changeName( newName ) {
        this.name = newName;

        return this;
    }
}

separator();

const person = new Person( 'John' );

person.sayName().changeName( 'Anthony' ).sayName();

separator();
