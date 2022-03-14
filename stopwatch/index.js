/**
 * Основная трудность может заключаться в правильном рассчете времени. Для этого надо использовать setInterval.
 * При запуске функции start() мы должны сохранять время Date.now() в переменную startTime.
 * Date.now() возвращает кол-во миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
 * Внутри фукнции start() должен быть setInterval который каждые 10мс будет отнимать от текущего Date.now() сохраненное значения Date.now (которое в переменной startTime) и обновлять значение переменной lastTime
 * В таком случае мы получим разницу между стартом таймера и текущим временем в миллисекундах, которая будет храниться в переменной lastTime
 * Далее конвертируем это значение в нужный нам формат с помощью функции timeToString
 */

// Функция конвертации времени. В качестве аргумента принимает время в миллисекундах.
function timeToString(time) {
    let diffInHrs = time / 3600000; // В 1 часе 3600000 миллисекунд. Разделив наше время на это число мы получим значение в часах.
    let hh = Math.floor(diffInHrs); // Округляем значение
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  
  let startTime;
  let lastTime = 0;
  let interval;
  let count = 1;
  
  
  const startButtons = document.querySelectorAll('.button--start');
  const resetButton = document.querySelector('.button--reset');
  const pauseButton = document.querySelector('.button--pause');
  const value = document.querySelector('.value');
  const controls = document.querySelector('.controls-active');
  const controlsPaused = document.querySelector('.controls-paused');
  const controlsInitial = document.querySelector('.controls-initial');
  const lapButton = document.querySelector('.button--lap');
  const table = document.querySelector('.table');
  table.classList.add('hidden');
   
  for (const startButton of startButtons) {
    startButton.addEventListener('click',() => {
    controlsInitial.classList.add('hidden');
    controlsPaused.classList.add('hidden');
    controls.classList.remove('hidden');
    start();
  });
  };
  pauseButton.addEventListener('click',() => {
    controlsPaused.classList.remove('hidden');
    controls.classList.add('hidden');
    pause();
  });
  
  resetButton.addEventListener('click', () => {
    table.classList.add('hidden');
    controlsPaused.classList.add('hidden');
    controlsInitial.classList.remove('hidden');
    reset();
    return count = 1;
  }); 
  
  lapButton.addEventListener('click', () => {
    table.insertAdjacentHTML('beforeend', newLap(counter(), timeToString(lastTime)));
    table.classList.remove('hidden');
  
    function counter(){ 
      return count++;
    };
    getTable();
  });
  
  let newLap = (id, time) => `
    <div class="table-row">
    <div class="table-cell">Круг ${id}</div>
    <div class="table-cell">Время ${time}</div>
    `;
  
  function start() {
    startTime = Date.now() - lastTime;
    interval = setInterval(() => {
      lastTime = Date.now() - startTime;
      value.innerHTML = timeToString(lastTime);
    
        
    }, 10);
  };
  
  function pause() {
    clearInterval(interval);
  };
  
  function reset() {
    clearInterval(interval);
    lastTime = 0;
    value.innerHTML = timeToString(0);
    for(let key of document.querySelectorAll('.table-row')){
      if(key === document.querySelector('.table-row')){
        key.remove();
      };
    };
  };
   
  function getTable(){
    let arr = [];
    let newArr = [];
    const allArr = Array.from(document.querySelectorAll('.table-cell'));
    for(let key of allArr){
      arr.push(key.textContent);
    };
    newArr.push(arr);
  };