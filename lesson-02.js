// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
//Видаліть перший елемент масива та виведіть його в консоль
// Додайте 'Реп' та 'Реггі' на початок списку.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");

// const index = styles.indexOf("Блюз");
// // styles[index] = "Класика";
// styles.splice(index, 1, "Класика");
// console.log(styles.shift());
// styles.unshift("Реп", "Реггі");

// console.log(styles);


// **************task_02_02

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(arr) {

//     let loginValue = prompt("Введіть логін");

//     if (arr.includes(loginValue)) {
//         alert("Доступ дозволено");
//     } else {
//         alert("Користувач не знайден")
//     }
// }

// checkLogin(logins);