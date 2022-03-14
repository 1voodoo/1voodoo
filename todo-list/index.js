// Пример объекта для TODO-элемента: 
// const todo = {
//   id: уникальный ID, // Формируется при добавлении TODO элемента
//   name: 'Learn JS', // Название задачи
//   done: true/false // Статус. По умолчанию false
// }

// Функция для формирования уникального идентификатора
function generateUniqID() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  
  const list = document.querySelector('.list');
  const inputAdd = document.getElementById("ferstInput");
  const buttonAdd = document.getElementById("addButton");
  const search = document.querySelector(".input--search");
  const buttonsSelect = document.querySelectorAll(".buttons");
  const buttonEdit = document.querySelectorAll(".button-edit");
  const container = document.getElementById("container");
  const todoEditable = document.querySelectorAll(".todo--editable");
  
  for (const tab of document.querySelectorAll('.tabs .button')) {
    tab.addEventListener('click', (event) => {
      document.querySelector('.tabs .button.blue').classList.remove('blue'); 
      event.target.classList.add('blue'); 
      const activeTab = document.querySelector('.tabs .button.blue').textContent;
  
      for (const todo of document.querySelectorAll('.todo')) {
        if(activeTab === 'Все') {
          todo.classList.remove('hidden')
          
        }
  
        if(activeTab === 'Активные') {
          const isActiveTodo = todo.querySelector('.todo--active');
           
  
          if(isActiveTodo) {
            todo.classList.add('hidden')
            
          } else {
            todo.classList.remove('hidden')
            
          }
        }
  
        if(activeTab === 'Завершенные') {
          const isActiveTodo = todo.querySelector('.todo--active');
  
          if(!isActiveTodo) {
            todo.classList.add('hidden')
          } else {
            todo.classList.remove('hidden')
          }
        }
  
      }
    })
    
  }
  
  let tasks = !localStorage.tasks ? [] : JSON.parse(localStorage.getItem("tasks"));
  let todoItemsElems = [];
  !localStorage.getItem('tasks') ? tasks = [] : tasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(container);
  if(tasks.length > 0) {
    container.classList.remove('hidden');
  }
  
  const newLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function Task(discription) {
    this.id = generateUniqID();
    this.discription = discription;
    this.complited = false;
    
  }
  
  buttonAdd.addEventListener("click", () => {
    
    container.classList.remove('hidden');
    tasks.push(new Task(inputAdd.value));
    inputAdd.value = "";
    newLocalStorage();
    fillHtmllist();
    
  });
  
  const completTask = id => {
    tasks[id].complited = !tasks[id].complited;
    
    if (tasks[id].complited){
        todoItemsElems[id].classList.add("checked");
    } else{
      todoItemsElems[id].classList.remove("checked");
    }
    newLocalStorage();
    fillHtmllist();
    
  };
  
  const createTamplayde = (task, index) => {
    return `
          <div class="todo" data-id=${task.id}>
          <div class="todo--initial flex ${task.complited ? 'todo--active' : ''}">
            <label class="checkbox">
              <input onclick = "completTask(${index})" type="checkbox" ${task.complited ? "checked" : ""}> 
              <div class="checkbox-icon"></div>
            </label>
            <span class="text">${task.discription}</span>
            <button onclick = "deleteTask(${index})"  class="negative ui button">Удалить</button>
            <button class="circular ui icon button button-edit">
              <i class="icon cog"></i>
            </button>
          </div>
          <div class="todo--editable flex hidden">
          <div class="ui small input input-edit">
            <input type="text" class="input-editable" value="${task.discription}" placeholder="Введите новое название...">
          </div>
          <button class="ui positive button small button-save">Сохранить</button>
          <button class="ui button small button-cancel">Отмена</button>
        </div>
      </div
        `
  }
  
  const deleteTask = id => {
    
    let ans = confirm('Вы действительно хотите удалить элемент?');
    if (ans === true){
      tasks.splice(id, 1);
    }
    newLocalStorage();
    fillHtmllist();
  }
  
  const fillHtmllist = () =>{
    list.innerHTML = "";
    if (tasks.length > 0){
      tasks.forEach((item, index) => {
        list.innerHTML += createTamplayde(item, index)
      })
      editButton()
      todoItemsElems = document.querySelectorAll(".todo");
    }
  };
  
  fillHtmllist();
  
  search.addEventListener("input", (even) => {
    const value = even.target.value
    for(let item of document.getElementsByClassName('text')){
      const todo = item.closest('.todo')
      if(item.textContent.toLowerCase().includes(value.toLowerCase())){
       
        todo.classList.remove('hidden');
       
      }
      
      else{
        
        todo.classList.add('hidden');
        
      }
  
    }
    
  });
  console.log(tasks);
  
  function handeEdit(main,initial,editable) {
   
      list.classList.add('hidden--setting')
      editable.classList.remove('hidden');
      const inputEdit = editable.querySelector('.input-editable');
      const cancelButton = editable.querySelector('.button-cancel');
      const saveButton = editable.querySelector('.button-save');
      saveButton.addEventListener('click', () => {
        tasks = tasks.map((item) => {
          if(item.id === main.dataset.id){
            
            return {
              ...item,
              discription: inputEdit.value,
            }
          };
          return item;
        });
        
        newLocalStorage();
        main.querySelector('.text').innerHTML = inputEdit.value;
        initial.classList.remove('hidden');
        editable.classList.add('hidden'); 
        
        
      })
  
      cancelButton.addEventListener('click', () => {
        initial.classList.remove('hidden');
        editable.classList.add('hidden');
  
      })
      initial.classList.add('hidden');
     
    };
   function editButton() {
    for(let edit of document.getElementsByClassName('button-edit')){
      edit.addEventListener('click', (event) => {
        const main = event.target.closest('.todo');
        const initial = main.querySelector('.todo--initial');
        const editable = main.querySelector('.todo--editable');
        handeEdit(main,initial,editable);
        
      });
    };
  }