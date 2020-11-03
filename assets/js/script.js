var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do")

var createTaskHandler = function() {

    // Prevents the page from reloading when form is submitted
    event.preventDefault();

    // a new <li> element is created
    var listItemEl = document.createElement("li");
    // it is given the "task-item" class to be styled
    listItemEl.className = "task-item";
    // the content added will say "This is a new task"
    listItemEl.textContent = "This is a new task.";
    // and finally it will be added into the HTML
    tasksToDoEl.appendChild(listItemEl);
};

// When the User submits the form to add task, createTaskHandler runs
// It is listening for the User to hit submit OR hit the enter key
formEl.addEventListener("submit", createTaskHandler);


