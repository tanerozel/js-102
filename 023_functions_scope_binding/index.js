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
const log = console.log;

let counterB = '';
let counterC = '';
let counterD = '';

const intervals = [];

function setCounterB() {
    this.i = 0;

    const that = this;

    intervals.push(
        setInterval(
            function() {
                that.i++;
                counterB = that.i;
            },
            500
        )
    );
}

function setCounterC() {
    this.i = 0;

    intervals.push(
        setInterval(
            ( function () {
                this.i++;
                counterC = this.i;
            } ).bind( this ),
            500
        )
    );
}

function setCounterD() {
    this.i = 0;

    intervals.push(
        setInterval(
            () => {
                this.i++;
                counterD = this.i;
            },
            500
        )
    );
}

setCounterB();
setCounterC();
setCounterD();

const print = () => {
    log( '\t\t', counterB, counterC, counterD );

    if ( counterB > 5 ) {
        intervals.forEach( ( interval ) => clearInterval( interval ) );

        return;
    }

    setImmediate( print );
};

setImmediate( print );
