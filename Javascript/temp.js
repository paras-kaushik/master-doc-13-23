/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let delay = null;
    let latestArgs = null;

    const timeoutFunction = () => {
      if (latestArgs === null) {
        delay = null; // enter the waiting phase
      } else {
        fn(...latestArgs);
        latestArgs = null;
        delay = setTimeout(timeoutFunction, t);
      }
    };

    return function throttled(...args) {
      if (delay) {
        latestArgs = args;
      } else {
        delay = setTimeout(timeoutFunction, t);// enter the looping phase
        return fn(...args);
      }
    }
  };

  /**
   * const throttled = throttle(console.log, 100);
   * throttled("log"); // logged immediately.
   * throttled("log"); // logged at t=100ms.
   */
