let addTodoButton = document.getElementById("addJobRoleButton");
let saveTodoButton = document.getElementById("saveJobRoleButton");
let statusID = document.getElementById("status");

function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
    let userInputElement = document.getElementById("jobRoleUserInput");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        isChecked: false
    };
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick = function() {
    onAddTodo();
};

/*
 */


function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;

    let labelId = "label" + todo.uniqueNo;

    
    let todoElement = document.createElement("option");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    statusID.appendChild(todoElement);



    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("li");
    labelElement.id = labelId;
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}