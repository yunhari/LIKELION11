function addTodo(event) { 

    let input = document.getElementById('input');
    let ul = document.querySelector("ul");


    if(input.value !=="") {
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        li.addEventListener('click', toggleCompleted);

        let del = document.createElement('button');
        del.type = "button";
        del.classList.add("delbutton-text");
        del.addEventListener("click", deleteList);
        li.appendChild(del);
      
        let edit = document.createElement('button');
        edit.type = "button";
        edit.classList.add("editbutton-text");
        edit.addEventListener("click", editTodo);
        li.appendChild(edit);
        }

      

    input.value="";
    saveTodoList();
}

function deleteList(event) {
    let remove = event.target.parentElement;
    remove.remove();
    saveTodoList();
}

function editTodo(event) {
    let listItem = event.target.parentElement;
    let todoText = listItem.firstChild;
    let editText = prompt(("수정할 내용을 입력하세요"), todoText.textContent);
    
    if(editText !== null) {
        todoText.textContent = editText;
    }
    saveTodoList();
}

function toggleCompleted(event){
  let li = event.target;
  li.classList.toggle('completed')
}

function loadToDoList() {
  let ul = document.querySelector("ul");
  let loadedToDoList = localStorage.getItem("todoItems");
     let todoItems = JSON.parse(loadedToDoList); //js 객체변환
     ul.innerHTML = ""; //기존항목 비우고 + 새 목록 추가
  
     todoItems.forEach((text) => { //각 메소드에 지정된 함수 실행
     let li = document.createElement("li");
     li.innerText = text;

     let del = document.createElement("input");
     del.type = "button";
     del.value = "삭제";
     del.addEventListener("click", deleteList);
     li.appendChild(del);
  
     let edit = document.createElement("input");
     edit.type = "button";
     edit.value = "수정";
     edit.addEventListener("click", editTodo);
     li.appendChild(edit);
      
     li.addEventListener("click", toggleCompleted);

     ul.appendChild(li);
    });
    }
  
  
function saveTodoList() {
  let todoList = document.querySelectorAll("ul li");
  let todoItems = [];
  
  todoList.forEach((li) => {
    let todoText = li.innerText;
    todoItems.push(todoText);
  });
  
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }
  
function init() {
  loadToDoList();

let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
    });
  }
  
  init();


