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

const printRedBackground = () => log( 'red' );
const printGreenBackground = () => log( 'green' );
const printBlackBackground = () => log( 'black' );
const printYellowBackground = () => log( 'yellow' );
const printBlueBackground = () => log( 'blue' );

separator();

const color = 'red';

{
    if ( color === 'black' ) {
        printBlackBackground();
    } else if ( color === 'blue' ) {
        printBlueBackground();
    } else if ( color === 'green' ) {
        printGreenBackground();
    } else if ( color === 'yellow' ) {
        printYellowBackground();
    } else {
        printRedBackground();
    }
}

separator();

{
    switch ( color ) {
    case 'black':
        printBlackBackground();

        break;
    case 'blue':
        printBlueBackground();

        break;
    case 'green':
        printGreenBackground();

        break;
    default:
        printRedBackground();

        break;
    }
}

separator();

{
    switch ( true ) {
    case ( typeof color === 'string' && color === 'black' ):
        printBlackBackground();

        break;
    case ( typeof color === 'string' && color === 'blue' ):
        printBlueBackground();

        break;
    case ( typeof color === 'string' && color === 'green' ):
        printGreenBackground();

        break;
    case ( typeof color === 'string' && color === 'yellow' ):
        printYellowBackground();

        break;
    case ( typeof color === 'string' && color === 'red' ):
        printRedBackground();

        break;

    default:
        printRedBackground();

        break;
    }
}

separator();

{
    ( ( {
        black: printBlackBackground,
        red: printRedBackground,
        yellow: printYellowBackground,
        green: printGreenBackground,
        blue: printBlueBackground
    } )[ color ] || printRedBackground )();
}

/*
 * WRT the above example:
 *
 * This usage is more declarative and therefore (generally) less error-prone than using a switch/case.
 *
 * And since we start with a clean definition of our domain modal (instead of a if/else or a switch chain),
 * it is easier to test too:
 *     To verify its functionality you only have to test `( foo )[ key ] || printRedBackground` gives `foo.key`
 *     for matching keys, and `printRedBackground` for unmatched keys.
 *     You don’t even have to mock the print methods.
 *
 * Replacing a switch/case with a hashmap (or a more compex object tree) goes by many names:
 *
 * * Inversion of Control
 *   (instead of switchin on the color to do stuff, we are taking a mapping of delegates
 *   and passing a color constant to locate the correct delegate to do stuff.
 *   This is like using a factory function. Hence we are inverting the flow of things;
 *   hence the name “inversion of control”.
 *
 * * Replacing Conditionals With Polymorphism
 *   We replace what apperas to be an if/else (or a switch/case) chain with subclasses of an
 *   object that override the same function as in…
 *
 *      `IPrinter printer = PrinterFactory.createBlackPrinter(); printer.print();`
 *
 *   Since JavaScript is NOT Java, we are NOT doing that level of abstraction of course.
 *
 *   Why? Because in JavaScript functions are first-class citizens. You don’t have to stick
 *   a function to an owner object, and thus you don’t need a factory method, or a set of
 *   objects which implement the same interface and shadow a print method polymorphically
 *   to just to call that said print function.
 *
 *   The functional nature of JavaScript allows more succinct (sometimes dangerously so) code.
 *
 *   To my knowledge, IoC was first coined in “Refactoring: Improving the Design of Existing Code”
 *   by Martin Fowler (et. al.).
 */

separator();
