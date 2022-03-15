'use strict';
/** 
 * Домашнее задание к занятию 6.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/

/**
 * Задание 1
 * Написать функцию, которая принимает произвольное количество параметров и возвращает сумму числовых элементов
 * Пример: sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5) => 15
*/
/**
function sumNambers(...args) {
    let sum = 0;
    let num = args.forEach(function(item){
     if((typeof item) === "number" || Number.isNaN(item)){
       return sum += item;
     }  
     args.push(sum) 
    });
   return console.log(sum);
};
sumNambers(1, 2, 3, 4, 'string', false, undefined, 5);
*/
/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b
*/
/**
function curry(f) {
    return function(a) {
     return function(b) {
         return f(a,b);
     }
    }
}
function sum(a,b) {
return a - b;   
}
let answer = curry(sum);
alert(answer(100)(81));
*/
/**
 * Задание 3
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
*/
/**
function makePassword(password){
return function getPas(str){
    if(str === password){
        return true
    }
    else return false
}
}
let checkPassword = makePassword('somePassword');
console.log(checkPassword('password'));
console.log(checkPassword('somePassword')); 
*/

/**
 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
*/
/**
function allWords(){
    let text = '';
let arr = "Республика Беларусь".split(' ');
for(let i=0; i<arr.length;i++) {
    text += arr[i].substr(0,1)
} 
return console.log(text);
}
allWords();
*/
/**
 * Задание 5
 * Сделайте функцию-конструктор с 2-я методами и которая принимает в качестве аргумента объект {from: Number, to: Number} 
 * При вызове метода generate() каждый вызов будет генерировать случайное числа от 'from' до 'to' и класть в массив. Число округлять до 3-х знаков после запятой 
 * Добавьте внутренний метод get(), который будет возвращать массив уже сгенерированных уникальных чисел
 * Добавьте метод clear() для отчистки массива
 * Все данные должны храниться внутри функции-конструктора.
*/
/**
function NewArray({from, to}) {
    let arr = [];
    this.generate = function() {
        let rand = from + Math.random() * (to + 1);
        return Math.floor(rand);
    }
    this.get = function() {
        return arr;
    }
    this.clear = function () {
        arr = [];
    }
}
const random = new NewArray({from: 1, to: 2});
random.generate();
random.generate();
random.generate();
random.generate();
console.log(random.get());
*/

/**
 * 
 * Задание 6
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.
 * Сравнение должно быть простым и поверхностным (только примитивы на одном уровне вложенности)
*/
/**
function arr(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;  
    }
 for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i]){
        return false; 
    }
}
 return true;
};
let arr1 = [ 4, 10, 14, 88, "lol"];
let arr2 = [ 4, 10, 14, 88, "lol"];
console.log(arr(arr1,arr2));
*/
/**
 * Задание 7
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
*/
/**
function pow(){
    let sum = 0;
    return function(){
        sum++;
        return Math.pow(sum, 2);
    }
   
}
let res = pow();
console.log(res());
console.log(res());
console.log(res());
*/