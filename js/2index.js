//* 1‣ Вивести числа від 25 до 0 (порядок зменшення).

let startInt = 26;
let finInt = 0;

/* while (--startInt >= finInt) {
      document.write(
            `<p style="display: inline-block; margin:1rem;">${startInt}</p>`
      );
} */

/* do {
      --startInt;
      document.write(
            `<p style="display: inline-block; margin:1rem;">${startInt}</p>`
      );
} while (startInt > finInt); */

/* for (a = --startInt; a >= finInt; a--) {
      document.write(`<p style="display: inline-block; margin:1rem;">${a}</p>`);
} */

//* 2‣ Вивести числа від 10 до 50, які кратні 5.

startInt = 10;
finInt = 50;

/* while (startInt <= finInt) {
      if (startInt % 5 === 0) {
            document.write(
                  `<p style="display: inline-block; margin:1rem;">${startInt}</p>`
            );
      }
      startInt++;
} */

/* do {
      document.write(
            `<p style="display: inline-block; margin:1rem;">${startInt}</p>`
      );
      startInt += 5;
} while (startInt <= finInt); */

/* for (b = startInt; b <= finInt; b += 5) {
      if (startInt % 5 === 0) {
            document.write(`<p style="display: inline-block; margin:1rem;">${b}</p>`);
      }
} */

//* 3‣ Знайти суму чисел в межах від 1 до 100.

startInt = 0;
finInt = 100;
let sum = 0;

/* while (++startInt <= finInt) {
      sum = sum + startInt;
      document.write(
            `<p style="display: inline-block; margin:1rem;">${sum}</p>`
      );
} */

/* do {
      sum = sum + startInt;
      document.write(
            `<p style="display: inline-block; margin:1rem;">${sum}</p>`
      );
} while (++startInt <= finInt); */

/* for (c = startInt; c <= finInt; c++) {
      sum = sum + c;
      document.write(
            `<p style="display: inline-block; margin:1rem;">${sum}</p>`
      );
} */
