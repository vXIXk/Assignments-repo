//* №0

const numbers = [];
const numbersCount = 19;
const packArray = () => Math.floor(Math.random() * 100);

for (i = 0; i < numbersCount; i++) {
      const number = packArray();
      numbers.push(number);
}

//* №1

numbers.shift();
numbers.pop();
numbers.unshift(packArray());
numbers.push(packArray());

//* №2

console.log(numbers.length);

//* №3

const numbersCopy = numbers.slice();

//* №4

for (const index in numbers) {
      if (index % 2 === 0) {
            console.log(numbers[index]);
      }
}

//* №5

function multiply(array) {
      let mult = 1;
      for (i = 0; i < array.length; i++) {
            mult *= array[i];
      }
      return mult;
}

//* №6.1

const smartphones = [
      {
            id: 1,
            brand: "Xiaomi",
            model: "Redmi Note 10",
            color: "Onyx Gray",
            ram: 8,
            isNfc: true,
            price: 9970,
      },
      {
            id: 2,
            brand: "Samsung",
            model: "Galaxy A52",
            color: "Awesome Black",
            ram: 6,
            isNfc: true,
            price: 15999,
      },
      {
            id: 3,
            brand: "Apple",
            model: "iPhone SE (2020)",
            color: "Product Red",
            ram: 4,
            isNfc: true,
            price: 15960,
      },
      {
            id: 4,
            brand: "Google",
            model: "Pixel 5a",
            color: "Mostly Black",
            ram: 6,
            isNfc: true,
            price: 17960,
      },
      {
            id: 5,
            brand: "OnePlus",
            model: "Nord 2",
            color: "Blue Haze",
            ram: 12,
            isNfc: false,
            price: 16799,
      },
      {
            id: 6,
            brand: "Huawei",
            model: "P40 Lite",
            color: "Crush Green",
            ram: 8,
            isNfc: true,
            price: 11969,
      },
      {
            id: 7,
            brand: "Motorola",
            model: "Moto G Power (2021)",
            color: "Flash Gray",
            ram: 4,
            isNfc: true,
            price: 9999,
      },
      {
            id: 8,
            brand: "Oppo",
            model: "Reno 6",
            color: "Stellar Black",
            ram: 8,
            isNfc: true,
            price: 19960,
      },
      {
            id: 9,
            brand: "Sony",
            model: "Xperia 10 III",
            color: "Black",
            ram: 6,
            isNfc: true,
            price: 17160,
      },
      {
            id: 10,
            brand: "Asus",
            model: "ZenFone 8",
            color: "Obsidian Black",
            ram: 16,
            isNfc: true,
            price: 23959,
      },
];

for (const item of smartphones) {
      document.write(`
      <article class="item-card">
            <header>
                  <h2 class="item-h2">${item.brand} ${item.model}</h2>
            </header>
            <section>
                  <p class="item-p">Color: ${item.color}</p>
                  <p class="item-p">${item.ram}GB RAM</p>
                  <p>NFC: ${item.isNfc ? "✓" : "—"}</p>
                  <p class="item-p">₴${item.price}</p>
            </section>
      </article>`);
}

//* №6.2 || №7

function findMeanPrice(array) {
      let sum = 0;
      for (const value of array) {
            sum += value.price;
      }
      return sum / array.length;
}
console.log(findMeanPrice(smartphones));

//* №8

const isNonZero = arg => arg !== 0;
console.log(numbers.filter(isNonZero));

//* №9

const getOnePercent = arg => arg / 100;
console.log(numbers.map(getOnePercent));

//* №10

numbers.forEach(arg => console.log(Math.pow(arg, 3)));

//* №11

const isTen = arg => arg ** 2 === 100;
const index = numbers.findIndex(isTen);

if (index > -1) {
      numbers.splice(index, 1);
} else {
      alert("No index to remove found.");
}
console.log(numbers);

//* №12

function isPrime(arg) {
      if (arg >= 1) {
            for (let i = 2; i <= Math.sqrt(arg); i++) {
                  return arg % i !== 0;
            }
      }
}
console.log(numbers.every(isPrime));

//* №13

const isNegative = arg => arg < 0;
console.log(numbers.some(isNegative));
