'use strict';
/** 
 * Домашнее задание к занятию 5.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Написать код, который заменит регистр каждого символа на противоположный
 * Например 'Hello world' -> 'hELLO WORLD'
*/
/**
let str = "Hello world";  
 
function lol(array) {
let newStr = "";
let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === str[i].toLowerCase()) {
        newStr += str[i].toUpperCase();
    } else {
        newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}
alert(lol(str));
*/

/**
 * Задание 2
 * Написать функцию, которая будет принимать 2 аргумента: строку и массив, а далее фильтровать строку и заменять запрещенные слова на конструкцию типа  '[первая буква слова]***'
 * Список запрещенных слов представляет из себя массив вида: ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
 * Пример работы функции: textFilter('I have a gun', ['fuck', 'criminal', 'drugs', 'gun', 'stupid']) => 'I nav a g***'
 * Проверка на запрещенное слово должна быть регистронезависимой
 * P.S. используйте map()
 * P.S.S. Строку необходимо разбить по символу пробела ' ' что бы получить массив слов
*/
/**
  function textfiltr(str, arr){
  const stringArray = str.split(' ');
  const newStr = stringArray.map((item) => {
    if(arr.includes(item.toLowerCase())) {
      return `${item[0]}***`
    }
    return item
  })
  return newStr.join(' ');  
}
textfiltr("I have a criminal fuck", [`fuck`, `criminal`, `drugs`, `gun`, `stupid`]);
 */  
 
/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив уникальных элементов. Т.е. массив, который не содержит повторных значений
 * Пример: getUniqueElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе", 1]
*/
/**
let lol = ["кришна", "кришна", "харе", "харе", 1 , "замок", "замок", 8, 8, "wow", "wow"] 
function unique(arr) {
    return Array.from(new Set(arr));
  }
  alert( unique(lol) );
  */
/**
 * Задание 4
 * Напишите код, который проверит является строка палиндромом (слово, которое с обеих сторон читается одинаково) и вернет true либо false
 * Например 'репер', 'шалаш'
 * Пример: palindrome('репер') => true
*/
/**
function textfiltr(str, arr){
  const stringArray = str.split(' ');
  const newStr = stringArray.map((item) => {
    if(arr.includes(item.toLowerCase())) {
      return `${item[0]}***`
    }
    return item
  })
  return newStr.join(' ');  
}
textfiltr("I have a criminal fuck", [`fuck`, `criminal`, `drugs`, `gun`, `stupid`]);
/**
 * Задание 5
 * Написать функцию которая отсортирует массив пользователей по возрасту сверху вниз
 * Пример: sortByAge([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]) => [{name: 'Петя', age: 30}, {name: 'Маша', age: 27}, {name: 'Вася', age: 12}]
*/
/**
function sortByAge(arr){
  let sort = arr.sort((a, b) => (a.age < b.age) ? 1 : -1)
  console.log(sort);
};
sortByAge([{name: 'Вася', age: 12} , {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]);
*/
  
/**
 * Задание 6
 * Написать функцию, которая будет искать пользователей, у которых возраст больше 18 лет.
 * Пример: getAdult([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]) => [{name: 'Маша', age: 18}, {name: 'Виктор', age: 40}]
 * Использовать метод filter/find
*/
/**
const lol = [{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}];
let getAdult = lol.filter((item,index,array) =>{
if(item.age >= 18){
    return item;
}
})
console.log(getAdult);
*/
/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
*/
/**
function item(arr, value) {
  for (let i = 0; i < arr.length; i++) {
  if (value === arr[i]) {
    console.log(i);
    return i
  };
    
  };
  return -1
};
  item(["John", "wow", 102, -1, "No"], "wow");
*/
/**
 * Задание 8
 * Создать массив из 10 чисел. Необходимо высчитать сумму всех элементов
 * Используем reduce
*/
/**
let anyNumber = [1,2,3,4,5,6,7,8,9,10];
let sum = anyNumber.reduce((total, value) => total * value)
console.log(sum);
*/
/**
 * Задание 9
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой.
 * Получите значения двумя разными способами: с помощью join и reduce
*/
/**
 let anyWords = ["yellow", 2 , "people", "wow", "mushin lering",{name: "Alex", age: 44}, "gun"];
 let arr = anyWords.join(", ")
 console.log(arr);
let sum = anyWords.reduce((total, amount, ) => {
    return total + "," + amount;
  },);
console.log(sum);
*/

/**
 * Задание 10.
 * Написать функцию, которая будет принимать в качестве параметра объект вида {start: Number, end: Number, string: String} и обрезать строку из центра в соответствии со значениями start и end.
 * Например: cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }) => 'r47qi...ntkpy'
*/
/**
function cropString({start, end, string}){
  const first = string.slice(0, start);
  const second = string.slice(string.length - end);
    return console.log(`${first}...${second}`);
}
cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' })
*/