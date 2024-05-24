//* □1

const customer = {
      name: "Avery",
      lastName: "Smith",
      emailAddress: "https://www.google.com/intl/uk/gmail/about/", // ¯\_(ツ)_/¯
      password: "ytrewq",
      phoneNumber: "+14346979542",
      address: {
            city: "San Diego",
            street: "E Cedar St",
            house: "№123",
            apartment: "№4",
      },
      getAddress() {
            console.log(
                  `${this.address.city}, ${this.address.street},\n${this.address.house}, ${this.address.apartment}`
            );
      },
      changePhoneNumber(newPhoneNumber) {
            this.phoneNumber = newPhoneNumber;
      },
};
// customer.changePhoneNumber(prompt("Input your new phone number here."));
customer.isMale = true;
delete customer.address;
const cstmrCopy1 = Object.assign({}, customer);
const cstmrCopy2 = { ...customer };

//* □2

const cat = {
      name: "Murka",
      color: "black",
      isMale: false,
      isFurnitureDamage: true,
};
for (const key in cat) {
      console.log(`${key}: ${cat[key]}`);
}

//* □3

function PrintedWork(author, title, year, publisher, price) {
      this.author = author;
      this.title = title;
      this.yearOfPublication = year;
      this.publisher = publisher;
      this.price = price;
}
PrintedWork.prototype.calcAge = function () {
      const currentYear = new Date().getFullYear();
      this.bookAge = `${
            currentYear - this.yearOfPublication
      } years since first published.`;
};
PrintedWork.prototype.changePrice = function (newPrice) {
      this.price = newPrice;
};
const book1 = new PrintedWork(
      "F. Scott Fitzgerald",
      "The Great Gatsby",
      1925,
      {
            city: "New York",
            name: "C. Scribner's Sons",
      },
      3.7 + "$"
);
