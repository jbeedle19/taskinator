var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    // a new <li> element is created
    var listItemEl = document.createElement("li");
    // it is given the "task-item" class to be styled
    listItemEl.className = "task-item";
    // the content added will say "This is a new task"
    listItemEl.textContent = "This is a new task.";
    // and finally it will be added into the HTML
    tasksToDoEl.appendChild(listItemEl);
}

// When the User clicks the "add task" button createTaskHandler runs
buttonEl.addEventListener("click", createTaskHandler);


