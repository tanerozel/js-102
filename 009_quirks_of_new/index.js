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

separator();

function Mojito() {
    this.crushedMintFlakes = 1;
    this.strength = 2;
}

{
    const beverage = new Mojito();

    check( beverage.crushedMintFlakes === 1, 'Has mint flakes.' );
    check( beverage.strength === 2, 'Mild beverage.' );
}

separator();

function Sake() {
    this.crushedMintFlakes = 0;
    this.strength = 4;

    return 5; // ?!
}

{
    const otherBeverage = new Sake();

    check( otherBeverage.crushedMintFlakes === 0, 'Has exactly zero mint flakes.' );
}

separator();

function ChocolateMilk() {
    this.crushedMintFlakes = 0;
    this.strength = 0;

    return { chocolate: true }; // ?!
}

{
    const bedtimeBeverage = new ChocolateMilk();

    check( bedtimeBeverage.chocolate === true, 'Has chocolate.' );
    check( bedtimeBeverage.crushedMintFlakes === undefined, 'Mint flakes are not defined at all!' );
}

separator();
