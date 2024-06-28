"use strict";

//* First approach

/* try {
      function printNumbers(from, to, interval) {
            if (
                  !Number.isInteger(from) ||
                  !Number.isInteger(to) ||
                  !Number.isInteger(interval)
            ) {
                  throw new TypeError(
                        `Arguments passed to the 'printNumbers' function must be integers.`,
                  );
            }

            let i = from;

            if (i < to) {
                  const intervalId = setInterval(() => {
                        i <= to ? console.log(i++) : clearInterval(intervalId);
                  }, interval);
            } else {
                  const intervalId = setInterval(() => {
                        i >= to ? console.log(i--) : clearInterval(intervalId);
                  }, interval);
            }
      }
      printNumbers(10, 0, 1500);
} catch (err) {
      console.log(err);
} */

//* Second approach

function printNumbers(from, to, interval) {
      if (
            !Number.isInteger(from) ||
            !Number.isInteger(to) ||
            !Number.isInteger(interval)
      ) {
            throw new TypeError(
                  `Arguments passed to the 'printNumbers' function must be integers.`,
            );
      }

      let i = from;

      if (i < to) {
            let timerId = setTimeout(function step() {
                  i <= to ? console.log(i++) : clearTimeout(timerId);
                  timerId = setTimeout(step, 1000);
            }, 1000);
      } else {
            let timerId = setTimeout(function step() {
                  i >= to ? console.log(i--) : clearTimeout(timerId);
                  timerId = setTimeout(step, 1000);
            }, 1000);
      }
}

printNumbers(1, 10, 1500);
