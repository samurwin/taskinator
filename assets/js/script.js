// DOM object reference for the form element with the id #task-form
var formEl = document.querySelector("#task-form");
// DOM object reference for the tasks to do ul
var tasksToDoEl = document.querySelector("#tasks-to-do");

// a function that will: create a li, with the class #task-item, that says "This is a new task.", finally add (append) this li to the end of the ul
var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// When the form is submited perform the createTaskHandler() function
formEl.addEventListener("submit", createTaskHandler);