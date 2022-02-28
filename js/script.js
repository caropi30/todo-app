let btnThemeChange = document.querySelector("#btnThemeChange");
let taskInput = document.querySelector("#taskInput");
let btnSaveTask = document.querySelector("#btnSave");
let btnClearCompletedTasks = document.querySelector("#btnClearCompletedTasks");
let taskUl = document.querySelector('#taskUl');
var taskList = [];
let taskLi = document.querySelector('.taskLi');
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

function randomId(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
}

function tasksArr(task) {
  if (taskInput !== "") {
    var newTask = {
      id: randomId(0, 99999999),
      text: taskInput.value,
    };
  }
  taskList.push(newTask);
  console.log(taskList);
}


function writeTaskInDom() {
  taskUl.innerHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    taskUl.insertAdjacentHTML('afterbegin',
      ` <li id="${taskList[i].id}" class="list-group-item d-flex justify-content-between taskLi">
          <div class="form-check">
            <input
              id="${taskList[i].id}"
              class="form-check-input"
              type="checkbox"
              name="completedTask"
              value="completed"
            />
            <label for="${taskList[i].id}">${taskList[i].text}</label>
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


//TACHAR TAREA
function crossOutTask() {
  let completedTask = document.querySelector("input[name=completedTask]:checked");
  let taskLiParagrapgh = document.querySelector(".taskLi p");

  completedTask.addEventListener("click", function (task) {
    if (completedTask.value === checked) {
      taskList.forEach(element => {
        taskLiParagrapgh.setAttribute('done', task.class);
      }
      )
    }
  })
}








//CAMBIAR TEMA



