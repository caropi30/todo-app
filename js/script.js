let btnThemeChange = document.querySelector("#btnThemeChange");
let taskInput = document.querySelector("#taskInput");
let btnSaveTask = document.querySelector("#btnSave");
let btnClearCompletedTasks = document.querySelector("#btnClearCompletedTasks");
let taskUl = document.querySelector('#taskUl');
var tasksList = [];
let taskLi = document.querySelector('.taskLi');
let body = document.querySelector("body");
let main = document.querySelector("main");
let header = document.querySelector("header");


//CREACIÓN DE TAREA

function savingTask() {
  console.log(taskInput.value);

  if (taskInput.value !== "") {
    console.log("Se ha ingresado una tarea al sistema");
  } else {
    console.log("No se ha ingresado tarea");
  }
}


//Función random que permite tomar número aleatorios que luego serán asinads en los id de cada tarea para poder identificarlos como únicos y poder manipular su eliminación y o estado (activo / inactivo)
function randomId(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
}

//Esta función guarda cada tarea agregada a través del input en un array general con todas las listas, ella en su interior de igual forma genera convierte el str del input en un objeto asignandole el texto ingrsado más un id que será asignado con la llamada de la función randomId
function tasksArr(task) {
  if (taskInput !== "") {
    var newTask = {
      id: randomId(0, 99999999),
      text: taskInput.value,
    };
  }
  tasksList.push(newTask);
  console.log(tasksList);
}

/*Esta función hace dos cosas: 
1. Imprime en el DOM la tareas agregadas con los estilos correctos a ravés del template literal, que permite asignar de manera dinámica el id (creado con el randomId) y el texto.
2. Se le asigna un innerHTML al nodo padre que en este caso es un ul antes de renderizar la tarea, de manera que permita limpiar el renderizado cada vez que se agrega una nueva tarea.
*/

function writeTaskInDom() {
  taskUl.innerHTML = '';
  for (let i = 0; i < tasksList.length; i++) {
    taskUl.insertAdjacentHTML('afterbegin',
      ` <li id="${tasksList[i].id}" class="list-group-item d-flex justify-content-between taskLi">
          <div class="form-check">
            <input
              id="${tasksList[i].id}"
              class="form-check-input"
              type="checkbox"
              name="completedTask"
              value="completed"
            />
            <label for="${tasksList[i].id}">${tasksList[i].text}</label>
          </div>
          <button class="btnDeleteTask">
            <figure class="list-crossover-img">
              <img src="images/icon-cross.svg" alt="Eliminar tarea" />
            </figure>
          </button>
        </li>`
    )
  }

  // Acá se agrega el lsitener del botón btnDeleteTask por cada renderizado de la lista
  addDeleteListener();

}


// Este listener hace el llamado de todas las funciones generadas para guardar cada tarea y ser impresa en el DOM.
btnSaveTask.addEventListener("click", function (event) {
  event.preventDefault();
  savingTask();
  tasksArr();
  writeTaskInDom();
  document.querySelector("form").reset();
});


//ELIMINAR TAREA: este bloque contendrá dos funciones
//Esta función permite añadir el listener a cada btnDeleteTask para así poder eliminar la tarea

function addDeleteListener() {
  let btnDeleteTask = document.querySelectorAll('.btnDeleteTask');
  console.log(`se agrego una nueva tarea ${btnDeleteTask}`);
  for (let i = 0; i < btnDeleteTask.length; i++) {
    btnDeleteTask[i].addEventListener('click', () => { deleteTask(btnDeleteTask[i]) });
  }
}

//Esta función me permitirá eliminar la tarea y renderizar la lista de tareas en el DOM nuevamete con el listado filtrado

function deleteTask(task) {
  const taskId = task.parentElement.getAttribute("id");
  tasksList = tasksList.filter((task) => task.id !== Number(taskId));

  writeTaskInDom();
  addDeleteListener();
}


//VACIAR LISTA 

btnClearCompletedTasks.addEventListener("click", () => {
  taskUl.innerHTML = "";
  tasksList = [];
});


//CAMBIO DE THEME

/*function changeTheme() {
  if (body.style.backgroundColor === '' && taskInput.style.backgroundColor === '' && header.style.backgroundColor === '') {
    body.setAttribute("class", "dark");
    main.setAttribute("class", "dark-main");
    header.setAttribute("class", "dark-header");
  }
  else if (body.style.backgroundColor === "#2c3e50" && taskInput.style.backgroundColor === "#2c3e50" && header.style.backgroundColor === "#2c3e50") {
    body.removeAttribute("dark");
    main.removeAttribute("dark-main");
    header.removeAttribute("dark-header");
  }
}


btnThemeChange.addEventListener('click', function (e) {
  e.preventDefault();
  changeTheme()
})
*/
