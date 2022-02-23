let btnThemeChange = document.querySelector("#btnThemeChange");
let taskInput = document.querySelector("#taskInput");
let btnSaveTask = document.querySelector("#btnSave");
let btnClearCompletedTasks = document.querySelector("#btnClearCompletedTasks");
let taskUl = document.querySelector('#taskUl');
var taskList = [];
let taskLi = document.querySelector('#taskLi');
let btnDeleteTask = document.querySelector('#btnDeleteTask');


//CREACIÓN DE TAREA

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

function writeTaskInDom() {
  taskUl.innerHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    taskUl.insertAdjacentHTML('afterbegin',
      ` <li id="taskLi" class="list-group-item d-flex justify-content-between">
          <div class="form-check">
            <input
              id="completedTask"
              class="form-check-input"
              type="radio"
              name="completedTask"
              value="completedTask"
            />
            ${taskList[i]}
          </div>
          <button class="btnDeleteTask">
            <figure class="list-crossover-img">
              <img src="images/icon-cross.svg" alt="Eliminar tarea" />
            </figure>
          </button>
        </li>`
    )
  }
}

btnSaveTask.addEventListener("click", function (event) {
  event.preventDefault();
  savingTask();
  tasksArr();
  writeTaskInDom();
  document.querySelector("form").reset();
});


/*ELIMINAR TAREA

function deleteTask() {
  console.log(taskList.pop());
  return taskList;
}


btnDeleteTask.addEventListener('click', function (event) {
  event.preventDefault();
  deleteTask();
});
*/