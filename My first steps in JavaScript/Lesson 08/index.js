'use strict';
/** 
 * Домашнее задание к занятию 8.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1. Получить элемент с id="unordered_list" тремя способами. Сам элемент находится в файле index.html
*/
/**
const lol = document.querySelectorAll("#unordered_list");
console.log(lol);
const elem = document.getElementById("unordered_list");
console.log(elem);
const item = document.body.children[1];
console.log(item);
*/
/**
 * Задание 2. Изменить цвет каждого четного элемента (кроме элемента <h2>) в блоке с атрибутом name="text-container" на красный. HTML не изменять.
*/
/**
const elem = document.getElementsByName("text-container")[0];
let arr = Array.from(elem.children);
let arrNew = [];
for (let i = 0; i < arr.length; i++) {
  if(i % 2 && arr[i] !== document.querySelector('h2')){
    arrNew.push(arr[i])
  }
  
}
for(let keys of arrNew){
  keys.style.backgroundColor = "red";
}
*/
/**
 * Задание 3. Запросите у пользователя имя через prompt(). Значение, введенное в prompt необходимо вывести в html.
 * Формат вывода:
 * 1) Создаем новый элемент div через JS
 * 2) Выполняем базовую стилизацию. Добавим зеленый бэкграунд и желтую обводку. Так же стоит задать паддинги в 30px
 * 3) Вставляем новый элемент в качестве ПОСЛЕДНЕГО элемента внутрь body, не забываем добавить значение полученное из prompt внутрь этого элемента
*/
/**
let name = prompt("как вас зовут?");
let div = document.createElement("div");
document.body.append(div);
div.style.cssText=`background-color: green;
    border: 5px solid yellow;
    padding: 30px;
    font-size: 20px;
  `;
  div.innerHTML = name;
*/
/**
 * Задание 4. Заполните таблицу с классом my-table данными из объекта data. Таблицу уже есть в файле index.html
 * P.S. Проходимся по массиву и вставляем данные в таблицу. Один объект массива - один tr, свойство объекта - td.
 * P.S.S. Так же стоит вынести формирование tr в отдельную функцию
*/

const data = [
  {
    name: 'John',
    age: 23,
    salary: '100000'
  },
  {
    name: 'Mary',
    age: 34,
    salary: '58000'
  },
  {
    name: 'Max',
    age: 50,
    salary: '121500'
  },
  {
    name: 'Adam',
    age: 18,
    salary: '65200'
  }
];
/**
let tableData = data.map(n => `
  <tr>
    <td>${n.name}</td>
    <td>${n.age}</td>
    <td>${n.salary}</td>
  </tr>
`);
document.querySelector('.my-table').innerHTML += tableData.join('');
*/
/**
 * Задание 5. Написать функцию, которая будет доставать все данные из таблицы
 * На вход в эту функцию мы должны передавать DOM элемент таблицы.
 * Надо предусмотреть проверку на то, является ли элемент тэгом <table>
 * На выходе должен быть массив следующего вида:
 * 
  const data = [
    ['John', '23', '100000'], // Элемент массива data - это массив со всеми данными из <td>
    ['Mary', '34', '58000'],
    ['Max', '50', '121500'],
    ['Adam', '18', '65200'],
  ];
 */
// function getTable(table) {
//   const tableRows = Array.from(table. rows).slice(1);
  

//   for (const row of tableRows){
//     const celsData = [];

//     for (const cell of row.cells){
//       celsData.push(cell.textContent)
//     }
// console.log(celsData);
//   }
 
// };

// getTable(document.querySelector(".my-table"));