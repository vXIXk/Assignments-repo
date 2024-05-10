debugger;
// ‣1
const a = 7;
const b = 19;
console.log(a * b);

// ‣2
const c = 36;
const d = 8;
console.log(c / d);

// ‣3
const e = 101;
const f = 404;
console.log(e + f);

// ‣4
let openingStringNumber = "11";
let trueOrFalse = "true";
let scriptingLanguage = "java script";
let closingStringNumber = "100";
console.log(
      openingStringNumber +
            "\n" +
            trueOrFalse +
            "\n" +
            scriptingLanguage +
            "\n" +
            closingStringNumber
);

// ‣5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num += 1;
num -= 1;

// ‣6
let userInquiry = Number(prompt("Input a number to raise to its square:"));
let solvedUserInquiry = userInquiry ** 2;
alert(solvedUserInquiry);

// ‣7
let value1 = Number(prompt("Input your addent:"));
let value2 = Number(prompt("Input your addent:"));
let valuesCount = 2;
let arithmeticMean = (value1 + value2) / valuesCount;
alert(arithmeticMean);

// ‣8
let minutesCount = Number(
      prompt("Input minutes' count to calculate the seconds:")
);
let accordingSecondsCount = minutesCount * 60;
alert(accordingSecondsCount);

// ‣9
let greeting = "Hello,";
let userName = prompt("Input a fabulous username!", "anon");
alert(greeting + " " + userName + "!");
