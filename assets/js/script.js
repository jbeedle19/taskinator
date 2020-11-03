var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do")

var createTaskHandler = function() {

    // Prevents the page from reloading when form is submitted
    event.preventDefault();

    // Creates a variable that will be what is typed in the task name field
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // Creates a variable that will be what is selected as the task type
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // a new <li> element is created
    var listItemEl = document.createElement("li");
    // it is given the "task-item" class to be styled
    listItemEl.className = "task-item";

    // Create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // Give it a class name
    taskInfoEl.className = "task-info";
    // Add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span";

    // Add it to the HTML
    listItemEl.appendChild(taskInfoEl);
    
    // and finally it will be added into the HTML
    tasksToDoEl.appendChild(listItemEl);
};

// When the User submits the form to add task, createTaskHandler runs
// It is listening for the User to hit submit OR hit the enter key
formEl.addEventListener("submit", createTaskHandler);


