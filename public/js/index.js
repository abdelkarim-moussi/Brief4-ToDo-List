let task_Modal = document.getElementById("add-task_modal");
let form = document.getElementById("add-task_form");
let add_taskBtn = document.getElementById("add-task_button");
let close_ModalIcon = document.getElementById("close-modal");
let submit_Btn = document.getElementById("submit-Button");
let todoTasks_container = document.getElementById("todo-tasks-container");
let doingTasks_container = document.getElementById("doing-tasks-container");
let doneTasks_container = document.getElementById("done-tasks-container");
let singleTask = document.querySelector(".task");
//form inputs values
let task_Title = document.getElementById("task-Title");
let task_description = document.getElementById("task-description");
let task_priority = document.getElementById("task-priority");
let task_type = document.getElementById("task-type");
let task_date = document.getElementById("task-date");
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

//validation form function
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
    DisplayTodoTasks();
    DisplayDoingTasks();
    DisplayDoneTasks();
    form.reset();
  }
});
//tasks arrays
let todo_tasks = [];
let doing_tasks = [];
let done_tasks = [];
//---------------------
//add task function
let addTask = () => {
  if (task_type.value === "todo") {
    todo_tasks.push({
      title: task_Title.value,
      description: task_description.value,
      date: task_date.value,
      type: task_type.value,
      priority: task_priority.value,
    });
    console.log("todotasks", todo_tasks);
  } else if (task_type.value === "doing") {
    doing_tasks.push({
      title: task_Title.value,
      description: task_description.value,
      date: task_date.value,
      type: task_type.value,
      priority: task_priority.value,
    });
    console.log("doingtasks", doing_tasks);
  } else if (task_type.value === "done") {
    done_tasks.push({
      title: task_Title.value,
      description: task_description.value,
      date: task_date.value,
      type: task_type.value,
      priority: task_priority.value,
    });
    console.log("donetasks", done_tasks);
  }
};

//function for display To Do tasks
let DisplayTodoTasks = () => {
  todoTasks_container.innerHTML = "";
  todo_tasks.map((task, taskId) => {
    todoTasks_container.innerHTML += `<div id=${taskId} class="task p-5 border border-l-4 m-2 rounded-3xl shadow-md">
      <div class="task-informations flex gap-10 flex-wrap">
          <h4 class="task-title">
              ${task.title}
          </h4>
          <p class="task-date">${task.date}</p>
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
      </div>`;
    // if (task.priority === "p1") {
    //   singleTask.classList.add("border-red-500");
    //   console.log(singleTask);
    // }
    setPriorityColor();
  });
};

//function for display doing tasks
let DisplayDoingTasks = () => {
  doingTasks_container.innerHTML = "";
  doing_tasks.map((task) => {
    doingTasks_container.innerHTML += `
                            <div id="task"  class="task p-5 border border-l-4 m-2 rounded-3xl">
                        <div class="task-informations flex gap-10 flex-wrap">
                            <h4 class="task-title">
                                ${task.title}</
                            </h4>
                            <p class="task-date">${task.date}</p>
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
        `;
    // if (task.priority === "p1") {
    //   singleTask.classList.add("border-red-500");
    //   console.log(singleTask);
    // }
  });
};

//function for display done tasks
let DisplayDoneTasks = () => {
  doneTasks_container.innerHTML = "";
  done_tasks.map((task) => {
    doneTasks_container.innerHTML += `<div id="task"  class="task p-5 border border-l-4 m-2 rounded-3xl">
                        <div class="task-informations flex gap-10 flex-wrap">
                            <h4 class="task-title" id="done-task_title">
                               ${task.title}
                            </h4>
                            <p class="task-date" id="done-task_date">${task.date}</p>
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
                    </div>`;
    // if (task.priority === "p1") {
    //   singleTask.classList.add("border-red-500");
    //   console.log(singleTask);
    // }
  });
};

let setPriorityColor = () => {
  if (task_priority.value === "p1") {
    singleTask.classList.add("border-red-500");
    console.log(task_priority.value);
  } else if (task_priority.value === "p2") {
    singleTask.classList.add("border-blue-500");
  } else if (task_priority.value === "p3") {
    singleTask.classList.add("border-green-500");
  }
};

add_taskBtn.addEventListener("click", showModal);
