// DOM object reference for the Add Task button
var buttonEl = document.querySelector("#save-task");
// DOM object reference for the tasks to do ul
var tasksToDoEl = document.querySelector("#tasks-to-do");

// a function that will: create a li, with the class #task-item, that says "This is a new task.", finally add (append) this li to the end of the ul
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
};

// When the button is clicked perform the createTaskHandler() function
buttonEl.addEventListener("click", createTaskHandler);