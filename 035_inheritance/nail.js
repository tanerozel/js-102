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

const log = console.log;

const Tool = require ( './tool' );

function Nail( length ) { this.length = length; }

Nail.prototype = new Tool();

Nail.prototype.toString = function() { return `${this.length} Nail`; };

Nail.prototype.protoFunction = function() {
    log( 'Nail.prototype.protoFunction: Nail has overridden the proto function.' );
};

Nail.prototype.memberFunction = function() {
    log( 'Nail.prototype.memberFunction: Nail has overridden the member function as proto function.' );
};

module.exports = Nail;
