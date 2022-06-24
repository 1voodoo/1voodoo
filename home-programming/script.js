const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const imgContainer = document.querySelector('.imgContainer')
let count = 0;

btnRight.addEventListener('click', () => {
    count = count + 100;
    if (count > 300) {
        count = 0
    }
    imgContainer.style.left = -count + "px"; 
});

btnLeft.addEventListener('click', () => {
    count = count - 100;
    if (count < 0) {
        count = 300
    }
        imgContainer.style.left = -count + "px";    
});
// Первая и последняя буква заглавные
function sliceKnife(word) {
    let result = word.slice(0,1).toUpperCase() + word.slice(1,-1) + word.slice(-1).toUpperCase();
    return result
}
// Разный размер букв
function anotherSize(word) {
    let cut = word.split('');
    let arr = [];
    for(letter of cut) {
      if(letter === letter.toUpperCase()) {
        letter = letter.toLowerCase();
        arr.push(letter);
      }
      else if(letter === letter.toLowerCase()) {
        letter = letter.toUpperCase();
        arr.push(letter);
      } 
    }
    return arr.join('');
};

// имя и фамилия = S.S.
function twice(addUser) {
    let arr = addUser.split(' ');
    let arrTwo = []
    for (const word of arr) {
        let change = word.slice(0,1).toUpperCase() + '.';
        arrTwo.push(change);
    }
    return arrTwo.join('');
};
// изменения массива по условию
function spinWords(string){
    let arr = string.split(' ');
   for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[i].length >= 5) {
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ')
}
  console.log(spinWords('Hey market123 ILoveMyMother'));
// изменения массива по условию
function openOrSenior(data){
    let newArr = [];
  for (let i = 0; i < data.length; i++) {
    if(data[i][0] >= 55 && data[i][1] >= 7){
      newArr.push('Senior')
     } else {
      newArr.push('Open')
      }
    }
    return newArr
}
// найти максимальное и минимальное число в строке
function highAndLow(numbers){
    let arr = numbers.split(' ');
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
      let num = Number(arr[i])
      arr[i] = num
    };
    let big;
    let less;
      less = Math.min.apply(null, arr)
      big = Math.max.apply(null, arr)
    
      arrNew.push(big)
      arrNew.push(less)
      return arrNew.join(' ')
}
// найти друзей по условию
let arr = ['mark', 'Lona', 'Kate', 'lol', 'mom']
let myFriend = []
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].length);
  if(arr[i].length === 4) {
    arr[i] = arr[i]
    myFriend.push(arr[i])
  }
  
}
// перемножить все числа строки
function squareDigits(num){
  let str = String(num)
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
        
    }
    return Number(arr.join(''))
 
}
// Ёлочка
function towerBuilder(nFloors) {
  let arr= []
  let j = 0
  let sum = ''
  for (let i = '*'; j < nFloors; j++) {
      sum += i
      arr.push(sum)
  }
  return arr
}
console.log(towerBuilder(10));  