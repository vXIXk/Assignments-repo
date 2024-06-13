"use strict";

const arr = [
      [1, "first"],
      [2, "second"],
      [3, "third"],
      [4, "fourth"],
      [5, "fifth"],
      [6, "sixth"],
      [7, "seventh"],
      [8, "eighth"],
      [9, "ninth"],
];

const ordinals = new Map();
for (const index in arr) {
      ordinals.set(arr[index][0], arr[index][1]);
}

ordinals.set(10, "tenth").set(11, "eleventh").delete(11);

console.log(ordinals.size);

console.log(`${ordinals.has(2) ? ordinals.get(2) : false}`);

console.log([...ordinals.keys()]);
console.log([...ordinals.values()]);

const phrase =
      "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

const spellDigits = text =>
      text
            .split(" ")
            .map(el =>
                  ordinals.has(Number(el)) ? ordinals.get(Number(el)) : el,
            )
            .join(" ");

console.log(spellDigits(phrase));
