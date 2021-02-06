const todoForm = document.querySelector(".js-todo"),
    todoInput = todoForm.querySelector(".js-todo-input"),
    todoList = document.querySelector(".js-todo-list");

let todos = [];

//init -> load todos -> paint todos -> save
function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todos = cleanTodos;
    saveTodos();
}

function loadTodos(){ //local에 저장된 todos를 불러와서 존재하면 파싱 후 paintTodos호출한다.
    const loadedTodos = localStorage.getItem("todo_LS");
    if (loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        for(i=0;i<parsedTodos.length;i++){
            paintTodos(parsedTodos[i].text);
        }
        /*
        parsedTodos.forEach(function(todo){
            paintTodos(todo.text);
        });
        */
    }
}
function handleSubmit(event){
    event.preventDefault();
    const currVal = todoInput.value;
    paintTodos(currVal);
    todoInput.value = "";
}

function paintTodos(text){ // todos를 화면에 나타나게 한다.
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    todoList.appendChild(li);
    const todoObj = {
        text : text,
        id : newId
    };
    todos.push(todoObj);
    saveTodos();
}

function saveTodos(){ //todos를 localstorage에 저장한다.
    localStorage.setItem("todo_LS", JSON.stringify(todos));
}

function init(){ //local에 저장된 todos를 불러온다.
    loadTodos();
    todoForm.addEventListener("submit",handleSubmit);
}

init();