//* 1‣ Задане значення isDay (true - зараз день, false - зараз ніч).

/* const isDay = false;
 isDay
      ? document.write(
              `<p style="margin:2.5rem; color:#070f2b;">Світла тема</p>`
        )
      : document.write(
              `<body style="background-color:#070f2b;"><p style="margin:2.5rem; color:#eeeeee;">Темна тема</p></body>`
        ); */

//* 2‣ Відомо, чи користувач онлайн (isOnline).

/* const isOnline = true;
 if (!isOnline) {
      document.write(
            `<p style="font-size:1.5rem; margin:2.5rem;">Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет.</p></body>`
      );
}; */

//* 3‣ Користувач вводить суму покупки.

/* const userSum = +prompt("Введіть суму покупки:");
if (userSum > 800) {
      let sum = userSum - userSum * 0.05;
      alert(`Сума вашої покупки — ${sum} грн.`);
} else if (userSum <= 800 && userSum > 500) {
      let sum = userSum - userSum * 0.03;
      alert(`Сума вашої покупки — ${sum} грн.`);
} else {
      alert(`Сума вашої покупки — ${userSum} грн.`);
} */

//* 4‣*

let isLogin = true;
isMale = false;

if (!isMale) {
      let color = document.querySelector(".pfp-wrapper");
      color.style.cssText =
            "height:5rem; width:5rem; border-radius:50%; overflow:hidden; border: 3px solid red";
}

//* Switch..case  1‣

/* const userDay = +prompt("Який сьогодні номер дня тижня?");
switch (userDay) {
      case 1:
            alert("Понеділок");
            break;
      case 2:
            alert("Вівторок");
            break;
      case 3:
            alert("Середа");
            break;
      case 4:
            alert("Четвер");
            break;
      case 5:
            alert("П'ятниця");
            break;
      case 6:
            alert("Субота");
            break;
      case 7:
            alert("Неділя");
            break;
      default:
            alert("Дня тижня з таким номером не існує.");
} */

//* Switch..case  2‣*

/* for (day = 1; day <= 31; day++) {
      switch (true) {
            case day <= 10:
                  console.log(day + " число:   Перша декада.");
                  break;
            case day > 10 && day <= 20:
                  console.log(day + " число:   Друга декада.");
                  break;
            case day > 20 && day <= 31:
                  console.log(day + " число:   Третя декада.");
                  break;
      }
} */
