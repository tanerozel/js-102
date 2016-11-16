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

//
// All timers have a resolution (i.e. two consecutive timer events will always be separated by
// an interval greater than or equal to the timer resolution.
//
// 8–10 years ago (as of 2016), this resolution value was around 15 seconds
// (depending on the browser, of course).
// 4-5 years ago it dropped to around ~4ms ranges.
// And now (again depending on the browser or the JavaScript runtime) it is ~1ms or sub-1ms.
//
// The bottom line is, timers are getting more and more granular.
//
// The current HTML specification ( https://www.w3.org/TR/html5/webappapis.html#timers ) states that:
// “Timers can be nested; after five such nested timers, however,
// the interval is forced to be at least four milliseconds.”
//
// Ergo, there has been a silent timer resolution revolution going on as browsers have developed
// over the past few years. If you are not into that kind of thing, you probably haven’t been aware of that.
// Unlie all the kool-aid you hear about (like React, Angular(2), RFP etc.)
// timers are not one of those hot topics that get discussed frequently in conferences and events.
//
// Most browsers also so some sort of timer-throttling based on different conditions
// (mostly based on the app’s idleness, and power (i.e. battery versus power cord).
//
// Here are some circumstances when the timer resolution changes (as of 2016; this will be subject
// to change in the future too probably)
//
//     * Chrome and Edge switch back to the system timer (with ~15ms resolution) when
//       the laptop runs on battery power. When plugged back in, the browser switches
//       back to the 4ms timer resolution.
//
//     * Firefox, Chrome, IE, and Edge change timer resolutions in inactive tabs to 1000milliseconds.
//
//     * Mobile Sfari on iOS, and Silk on Kindle Fire freeze the timer completely when you
//       switch to a different app. The timer restarts when you switch back to the browser.
//
// As said, the user agent vendors will likely continue to make adjustments to the timer resolution
// as it pertains to power consumption, battery utilization, and other factors.
//
// The HTML specification leaves room for the user agent vendors to make such changes.
//
// Also from the timer API spec:
//
// “This API does not guarantee that timers will run exactly on schedule.
//  Delays due to CPU load, other tasks, etc, are to be expected.”
//

separator();

const printDate = () => log( ( new Date() ).getTime() );

let stopInterval = false;

setTimeout( printDate, 112 );
setTimeout( printDate, 114 );
setTimeout( printDate, 123 );
setTimeout( printDate, 166 );
setTimeout( printDate, 192 );

const timerId = setTimeout( printDate, 12215 );

setTimeout( () => {
    printDate();

    stopInterval = true;
}, 722 );

const intervalId = setInterval( () => {
    if (stopInterval) {
        clearInterval( intervalId );

        log( '\nWill clear the last timer and exit.' );

        setTimeout( () => clearTimeout( timerId ), 2000 );

        separator();

        return;
    }

    log( 'interval' );
}, 52 );

// ## Lessons to Learn
//
// * Don’t treat timers as precise clocks. When the timer will fire depend on many factors;
//   it is unpredictable.
//
// * If you are doing timer-related complicated logic (like animation) consider using a library
//   specialized for that.
//
// * When you find yourself having to delay something because of a race condition,
//   timers are rarely a solution. Consider using other constructs like deferred, thenables,
//   promises, async/await etc.
//
// * For animation prefer using CSS animations; and if not possible, try to utilize `requestAnimationFrame`.
//
// * Consider using `requestIdleCallback` or `requestAnimationFrame` instead of `setTimeout(fn, 0)`.
