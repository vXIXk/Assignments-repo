//* □1   Реалізувати перевірку на працездатність за віком.

// isWorkingAgePerson(+prompt("Please, input your age here:"));
function isWorkingAgePerson(age) {
      console.log(age >= 16 && age <= 64 ? true : false);
}

//* □2   Реалізували перевірку на ділення без остачі.

const checkMultiplicity = function (divident, divisor) {
      alert(divident % divisor === 0 ? true : false);
};
// checkMultiplicity(
//       +prompt("Input the divident first:"),
//       +prompt("Now, input the divisor:")
// );

//* □3   Перевірити можливість існування довільного трикутника.

const isTriangle = function (K, M, P) {
      alert("Is this a legit polygon?");
      alert(
            K > 0 && M > 0 && P > 0 && K + M > P && P + K > M && M + P > K
                  ? true
                  : false
      );
};
// isTriangle(
//       +prompt("Input the length of the edge K:"),
//       +prompt("Input the length of the edge M:"),
//       +prompt("Input the length of the edge P:")
// );

//* □4   Розрахувати площу довільного трикутника.
//       !(сумнівний результат)

/**
 *
 * @function tAreaCalc
 * @param {number} K - The base of the triangle
 * @param {number} M - An edge of the triangle
 * @param {number} P - An edge of the triangle
 * @param {number} h - Is calculated inside the function
 */

function tAreaCalc(K, M, P, h) {
      if (K > 0 && M > 0 && P > 0 && K + M > P && P + K > M && M + P > K) {
            let p = (K + M + P) / 2;
            let sqRoot = Math.sqrt(p * (p - K) * (p - M) * (p - P));
            h = (2 / K) * sqRoot;
            alert(0.5 * K * h);
      } else {
            alert("Uh-oh, not a triangle!");
      }
}
// tAreaCalc(
//       +prompt(
//             "To calculate your triangle's area, input the length of the base edge K first:"
//       ),
//       +prompt("Now, the length of the edge M:"),
//       +prompt("The length of the third edge P:")
// );

//* □5   Розрахувати площу прямокутника.

function rAreaCalc(A, B, C, D) {
      alert(A === C && B === D ? A * B : "Uh-oh, not a rectangle!");
}
// rAreaCalc(
//       +prompt(
//             "To calculate your rectangle's area, input the length of the edge A first:"
//       ),
//       +prompt("Now, the length of the edge B:"),
//       +prompt("The length of the edge C:"),
//       +prompt("The length of the fourth edge D:")
// );

//* □6 Реалізувати функцію, що перевірятиме надане число на простоту.

function isPrime(number) {
      for (let div = 2; div <= Math.sqrt(number); div++) {
            if (number % div === 0 || number <= 1) {
                  return alert(false);
            }
      }
      alert(true);
}
// isPrime(+prompt("Input your number:"));

//* □7   Сформувати картку продукту.

/**
 *
 * @function productCard
 * @param {string} productImg - Address of the image depicting the product
 * @param {string} productName
 * @param {string} productDescr - A brisk description of the product.
 * @param {number} price - Standart price
 * @param {number} discountPrice - Price with discount* (*calculated inside the function)
 */

function productCard(
      productImg,
      productName,
      productDescr,
      price,
      discountPrice
) {
      document.write(
            `<img style="max-width:20rem;" src="${productImg}">
          <h1>${productName}</h1>
          <p style="font-weight:bold">${productDescr}</p>
          <p class="standart-price">${price} ₴</p>`
      );
      if (discountPrice) {
            let standartPrice = document.querySelector(".standart-price");
            standartPrice.style.cssText =
                  "color:gray; text-decoration:line-through";
            document.write(`<p>${discountPrice} ₴</p>`);
            const discount = (price - discountPrice) / (price / 100);
            document.write(
                  `<p style="font-weight:bold; color:red">Знижка ${discount}%!</p>`
            );
      }
}
// productCard(
//     "https://content2.rozetka.com.ua/goods/images/big/140069588.jpg",
//     "Ігрова консоль Sony PlayStation 4 Slim 500GB Black",
//     "Поринь у світ гри спільно з Sony PlayStation 4 Slim 500GB Black. Консоль 8 покоління легко відкриє двері до найрізноманітніших пригод та ігрових сюжетів.",
//     13700,
//     11645
// );
