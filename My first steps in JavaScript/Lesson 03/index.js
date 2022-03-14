'use strict';
/** 
 * Домашнее задание к занятию 3.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
*/
/**
let i = 0;
while (i<15) {
    i++;
    if (i % 2 == 0){
        console.log(`${i} это четное`)
    } else if(i % 2 == 1)
    console.log(`${i} это нечетное`)
}
*/
/**
 * Задание 2
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 * Надо написать 2 варианта: с помощью цикла for и while
*/
/**
let i = 1;
while (i<100) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 5 == 0) {
        console.log("Buzz")
    } 
    else  (i % 3 == 0); {
        console.log("Fizz")
    }   
    i++;
};
*/
/**
for (let i = 1; i<100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
}    
if(i % 3 == 0) {
    console.log("Fizz");
}  
if(i % 5 == 0) {
    console.log("Buzz");
} 
};
*/


/**
 * Задание 3
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
*/
/**
let sum = 0;
for (let i = 0; i<1000; i++) {
    console.log(i);
    if(i % 4 == 0 || i % 3 == 0)  {
    sum += i;
}
};
console.log(sum)
*/
/**
 * Задание 4
 * Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
*/
/**
let i = 45;
let a = 67;
while (i<a) {
    console.log(i++);
};
*/
/**
 * Задание 5
 * Нарисовать треугольник с помощью цикла.
 * Для рисования использовать символ *(звездочка) и консоль.
 * P.S. Для рисования при каждой итерации цикла необходимо добавлять к переменной один знак "*". Например let a = '*', на каждой итерации => a+='*'
*/
// Пример:
//*
//**
//***
//****
//*****
/**
for (let e = "*"; e.length < 6; e += "*"){
    console.log(e);
}
*/

  



/**
 * Задание 6
 * Написать функцию, которая будет принимать 2 аргумента и возвращать наименьшее их них
*/
/**
function sum (a,b) {
    if(a>b) {
        return a;
    }
    else if (a<b){
        return b;
    }
    
}
let result = sum(55, 33)
alert(result);
*/
/**
 * Задание 7
 * Написать функцию, которая будет принимать в качестве аргумента объект пользователя вида: {name: 'имя', age: 'возраст'}, а так же 2 коллбэка (success и error)
 * Если возраст больше 18, то надо вызвать коллбэк succcess
 * В противном случае - error
 * success и error коллбэки оформите в качестве alert или console.log
*/
/**
function chekAge(name, age, succcess, error ){
if (age > 18) {
    return succcess();
} 
    return error();
}
chekAge (
    function() {
        alert("Имя");
    },
   19,
    function() {
        alert("succcess");
    },
    function() {
        alert("error");
    }
);
console.log(typeof chekAge.name)
*/
/**
 * Задание 8
 * Написать функцию, которая выведет в консоль числа из диапазона от 'a' до 'b'
 * Аргумент 'a' является обязательным, аргумент 'b' по умолчанию имеет значение 30
 * Если нету аргумента 'a', то надо выводить ошибку
 * Надо предусмотреть возможность вывода и обратного диапазона (если 'a' будет больше, чем 'b', то надо вывести цифры в порядке от 'b' до 'a')
 * Если числа равно, то надо вывести соответствующее сообщение.
*/
/**
function range(a, b) {
    if(a == b) {
      console.log(`Ошибка!!!Числа равны!!`);
      return;
    } else if(a == Number.isNaN(a) || b == Number.isNaN(b)){
      console.log("Произошла ошибка!!");
      return;
    };
  
    if(a < b) {
      for (let i = a; i <= b; i++) {
        console.log(i);
      }
    }
  
    if(a > b) {
      for (let i = b; i <= a; i++) {
        console.log(i);
      }
    }
  };
  range(1,30);
*/
/**
 * Задание 9
 * Написать функцию, которая будет принимать в качестве аргумента объект, удалять все пустые ключи и возвращать этот объект.
 * Пример:
 * { name: 'John', city: 'Minsk', job: '' } => { name: 'John', city: 'Minsk' }
*/
/**
let test = {
    name: 'John',
    city: 'Minsk',
    job: "",
}
function clean(obj) {
  for (let propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
      delete obj[propName];
    }
  }
}
clean(test);
console.log(test)
*/

/**
 * Задание 10
 * Написать функцию, которая будет принимать 2 аргумента: объект и ключ
 * Сделать проверку на существание ключа в объекте
 * Если ключ существует необходимо вернуть true, иначе - false
*/
/**
function getObject(name,age){ 
    return {
        name,
        age,
    };
  };
  let show = getObject ("John", 30)
  if (show.name){
      console.log(show.name)
  }
  if (show.age){
    console.log(show.age)
    
}
  else{
      console.log("false")
  }
*/
/**
 * Задание 11
 * Создать объект типа {name: 'John', age: 42, city: 'Minsk'}
 * Клонируйте этот массив в новую переменную. Используйте 2 способа: Object.assign и цикл for in.
*/
/**
let user = { 
    name: 'John', 
    age: 42, 
    city: 'Minsk',
    
};
for (let key in user) {
    alert(key)
    alert( user[key] );  
  }
let userInfo = Object.assign({}, user);
console.log(userInfo);
*/