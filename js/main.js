let btnThemeChange = document.querySelector("#btnThemeChange");
let taskInput = document.querySelector("#taskInput");
let btnSaveTask = document.querySelector("#btnSave");
let btnCrossover = document.querySelector("#btnCrossover");
let btnClearCompletedTasks = document.querySelector("#btnClearCompletedTasks");
let taskList = [];

function savingTask() {
  console.log(taskInput.value);

  if (taskInput.value !== "") {
    console.log("Se ha ingresado una tarea al sistema");
  } else {
    console.log("No se ha ingresado tarea");
  }
}

function tasksArr() {
  if (taskInput !== "") {
    taskList.push(taskInput.value);
    console.log(taskList);
  }
}

function call() {
  savingTask();
  tasksArr();
}

/*function writeTaskInDom() {
  for (let i = 0; i < tasks.length; i++) {
    innerHMTK;
  }
}*/

btnSaveTask.addEventListener("click", call);
