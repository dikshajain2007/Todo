let taskList = document.getElementById("taskList");

window.onload = loadTasks;

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") return;

    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    loadTasks();
}

function loadTasks() {
    taskList.innerHTML = "";
    let tasks = getTasks();

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <span onclick="deleteTask(${index})">✖</span>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}
