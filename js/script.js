const inputTask = document.getElementById("add-box");
const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-task");

function addTask() {
    if (inputTask.value === '') {
        alert("Please add a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = '';
}

addButton.addEventListener("click", addTask);

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);  