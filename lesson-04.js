// TASK 01
// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const listElement = document.createElement("ol");
// const btnAddElement = document.createElement("button");
// btnAddElement.textContent = "add";
// const btnRemoveElement = document.createElement("button");
// btnRemoveElement.textContent = "remove";
// const inputElement = document.createElement("input");

// document.body.append(
//   inputElement,
//   btnAddElement,
//   btnRemoveElement,
//   listElement
// );

// btnAddElement.addEventListener("click", addItem);
// function addItem() {
//   const inputValue = inputElement.value;
//   if (inputValue === "") {
//    return;
//   }
//   const itemElement = document.createElement("li");
//   itemElement.textContent = inputValue;
//   listElement.append(itemElement);
//   inputElement.value = "";
//   const lengthList =listElement.children.length;
// //   if(lengthList%2 !== 0 ){
// //     itemElement.style.backgroundColor = "blue";
// //   } else{
// //     itemElement.style.backgroundColor = "yellow";
// //   }
// itemElement.style.backgroundColor = lengthList%2 !== 0 ? "blue" : "yellow";

// }

// btnRemoveElement.addEventListener("click", removeItem);
// function removeItem() {
//   const lastItemElement = listElement.lastChild;
//   // if(!lastItemElement){
//   //     return;
//   // }
//   if (lastItemElement) {
//     lastItemElement.remove();
//   }
// }
// ******************************task02
// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування

// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }

// const elementPlay = document.createElement('div');
// changePosition();
// document.body.append(elementPlay);

// elementPlay.addEventListener('click', changePosition);

// function changePosition() {
//   elementPlay.style.cssText = forms[randomither(forms.length)];
//   elementPlay.style.backgroundColor = getRandomHexColor();
//   elementPlay.style.position = "absolute";
//   elementPlay.style.top = `${randomither(100)}%`;
//   elementPlay.style.left = `${randomither(100)}%`;
// }
