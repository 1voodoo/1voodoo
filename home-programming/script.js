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
