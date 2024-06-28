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
} catch (err) {
      console.log(err);
} */

//* Task Nº2

const shadyLink = document.createElement("a");
shadyLink.textContent =
      "Only one click away from accessing our exclusive content!  ➜ DOWNLOAD NOW";
shadyLink.setAttribute("href", "");
shadyLink.style.cssText =
      "font-family: sans-serif; font-size: 3rem; display: none";

const timerMsg = document.createElement("p");

document.body.append(shadyLink, timerMsg);

function tick() {
      let timer = 15;

      const intervalId = setInterval(function () {
            if (timer !== 0) {
                  timer--;
                  timerMsg.textContent = `Your access will be ready in 00:${
                        timer < 10 ? `0${timer}` : timer
                  }...`;
            } else {
                  clearInterval(intervalId);
                  timerMsg.remove();
                  shadyLink.style.display = "block";
            }
      }, 1000);
}
tick();
