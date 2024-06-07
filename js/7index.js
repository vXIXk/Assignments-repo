function User(name, surname, age, isMale, email, isSubscribed) {
      this.firstName = name;
      this.lastName = surname;
      this.age = age;
      this.isMale = isMale;
      this.email = email;
      this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
      const user = new User(
            `Username${i}`,
            `Usersurname${i}`,
            Math.floor(Math.random() * 90),
            Math.random() < 0.5,
            `useremail${i}@gmail.com`,
            Math.random() < 0.5
      );
      users.push(user);
}

console.log(users);

//* №0

User.prototype.getFullName = function () {
      return `${this.firstName} ${this.lastName}`;
};
const pullFullName = el => console.log(el.getFullName());

//* №1

const notSubscribed = users.filter(el => !el.isSubscribed);

//* №2

users.forEach(pullFullName);

//* №3

const schoolAgeFemales = users
      .filter(el => !el.isMale && el.age < 18 && el.age >= 6)
      .map(el => {
            pullFullName(el);
      });

//* №4

let bannedUser = users.findIndex(el => el.email === `useremail5@gmail.com`);
users.splice(bannedUser, 1);
