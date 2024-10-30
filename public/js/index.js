let task_Modal = document.getElementById("add-task_modal");
let form = document.getElementById("add-task_form");
let add_taskBtn = document.getElementById("add-task_button");
let close_ModalIcon = document.getElementById("close-modal");
let submit_Btn = document.getElementById("submit-Button");
let task_date = document.getElementById("task-date");
let todoTasks_container = document.getElementById("todo-tasks-container");
let doingTasks_container = document.getElementById("doing-tasks-container");
let doneTasks_container = document.getElementById("done-tasks-container");
let field = document.getElementById("field");
//form inputs values
let task_Title = document.getElementById("task-Title");
let task_description = document.getElementById("task-description");
let task_priority = document.getElementById("task-priority");
let task_type = document.getElementById("task-type");

//functon for show and hide th modal
function showModal() {
  if (task_Modal.classList.contains("hidden")) {
    task_Modal.classList.remove("hidden");
  }
}

function hideModal() {
  task_Modal.classList.add("hidden");
}

function showErrorMessage(element, error) {
  const inputControl = element.parentElement;
  const erroDisplay = inputControl.querySelector(".error-message");
  erroDisplay.innerHTML = error;
}
//add task function
add_taskBtn.addEventListener("click", showModal);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //form validation
  // var isInvalide = true;

  if (task_Title.value === "") {
    // isInvalide = true;
    showErrorMessage(
      task_Title,
      "your title must contains at least 5 caracteres"
    );
  } else {
    // isInvalide = false;
    showErrorMessage(task_Title, "");
    addTask();
  }
  // task_Title.value = "";
  // task_description.value = "";
});
let tasks = [];
let addTask = () => {
  tasks.push({
    title: task_Title.value,
    task_description: task_description.value,
    date: task_date.value,
    type: task_type.value,
    priority: task_priority.value,
  });
  console.log(tasks);
  DisplayTasks();
};
let DisplayTasks = () => {
  // todoTask_container.innerHTML = "";
  tasks.map((x) => {
    if (x.type === "todo") {
      return (todoTasks_container.innerHTML += `<div class="task p-5 border border-l-4 border-red-500 m-2 rounded-3xl shadow-md">
      <div class="task-informations flex gap-10 flex-wrap">
          <h4 class="task-title">
              ${x.title}
          </h4>
          <p class="task-date">${x.date}</p>
      </div>
      <div class="task-actions mt-2 flex gap-3">
          <button type="button"
              class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000"
              id="delete">Delete <i class="fa fa-trash"></i>
          </button>
          <button type="button"
              class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000"
              id="edit">
              Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>`);
    } else if (x.type === "doing") {
      return (doingTasks_container.innerHTML += `
                            <div class="task p-5 border border-l-4 border-orange-400 m-2 rounded-3xl">
                        <div class="task-informations flex gap-10 flex-wrap">
                            <h4 class="task-title">
                                ${x.title}</
                            </h4>
                            <p class="task-date">${x.date}</p>
                        </div>
                        <div class="task-actions mt-2 flex gap-3">
                            <button type="button"
                                class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000"
                                id="delete">Delete <i class="fa fa-trash"></i>
                            </button>
                            <button type="button"
                                class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000"
                                id="edit">
                                Edit <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                        </div>
                    </div>
        `);
    } else if (x.type === "done") {
      return (doneTasks_container.innerHTML += `
         <div class="task p-5 border border-l-4 border-green-500 m-2 rounded-3xl">
                        <div class="task-informations flex gap-10 flex-wrap">
                            <h4 class="task-title" id="done-task_title">
                               ${x.title}
                            </h4>
                            <p class="task-date" id="done-task_date">${x.date}</p>
                        </div>
                        <div class="task-actions mt-2 flex gap-3">
                            <button type="button"
                                class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000"
                                id="delete">Delete <i class="fa fa-trash"></i>
                            </button>
                            <button type="button"
                                class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-emerald-800 transition ease-in-out duration-1000"
                                id="edit">
                                Edit <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                        </div>
                    </div>`);
    }
  });
};

let setPriority = () => {
if()
}

add_taskBtn.addEventListener("click", showModal);
