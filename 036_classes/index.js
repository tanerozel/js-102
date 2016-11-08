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

class Hello {
    constructor( name ) {
        this.name = name;
    }

    hello() {
        return `Hello ${this.name}!`;
    }

    static sayHelloAll() {
        return 'Hello everyone!';
    }
}

class HelloWorld extends Hello {
    constructor() {
        super( 'World' );
    }

    echo() {
        log( super.hello() );
    }
}

const hw = new HelloWorld();

hw.echo();

log( Hello.sayHelloAll() );

separator();

/*
 * ## Lessons to Learn
 *
 * * To reiterate the former section: Don’t go bananas about using classes and inheritance.
 *
 * * The `class` keyword is just prototypal inheritance in disguise; it is just syntactic sugar.
 *
 * * If you are thinking in classes go learn Haskell, and then come back and revisit these examples.
 */
