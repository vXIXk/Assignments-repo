"use strict";

//* Recursion
// Task 1

function pow(base, exponent) {
      try {
            if (typeof base !== "number" || typeof exponent !== "number") {
                  throw new TypeError("Input values must be numbers.");
            }
            if (exponent < -100 || exponent > 100) {
                  throw new RangeError(
                        "Exponent value not allowed to be greater than / less than ± 100.",
                  );
            }
            switch (true) {
                  case exponent === 1: {
                        return base;
                  }
                  case exponent === 0: {
                        return 1;
                  }
                  case exponent < 0 && exponent >= -100: {
                        return base ** exponent;
                  }
            }
            return base * pow(base, --exponent);
      } catch (err) {
            return err;
      }
}
console.log(pow(19, 2));

// Task 2

function validateEmail(email) {
      try {
            if (typeof email !== "string") {
                  throw new TypeError(
                        "Input value must be of the 'string' type to be valid.",
                  );
            }
            if (!email.includes("@")) {
                  throw new Error(
                        "An email address must include the at sign (@).",
                  );
            }
            if (
                  email.indexOf("@") === 0 ||
                  email.indexOf("@") === email.length--
            ) {
                  throw new Error("Incorrect use of the at sign (@).");
            }
            return `${email} is a valid E-mail address`;
      } catch (err) {
            return `${err}

            ${email} is not a valid E-mail address.`;
      }
}

//* Closure

const number = +prompt("Put your starter number here! ↯");
const step = +prompt("And the step here ↯");

function count(number, step) {
      return function () {
            return (number += step);
      };
}
const counter = count(number, step);

for (let i = 0; i <= 1000; i++) {
      console.log(counter());
}
