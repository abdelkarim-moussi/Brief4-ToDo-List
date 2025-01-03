let task_Modal = document.getElementById("add-task_modal");
let form = document.getElementById("add-task_form");
let add_taskBtn = document.getElementById("add-task_button");
let submit_Btn = document.getElementById("submit-Button");
let todoTasks_container = document.getElementById("todo-tasks-container");
let doingTasks_container = document.getElementById("doing-tasks-container");
let doneTasks_container = document.getElementById("done-tasks-container");
let filter = document.getElementById("filter");
let sort = document.getElementById("sortBy-Date");
//form inputs values
let task_Title = document.getElementById("task-Title");
let task_description = document.getElementById("task-description");
let task_priority = document.getElementById("task-priority");
let task_status = document.getElementById("task-status");
let task_date = document.getElementById("task-date");

//tasks counters variables
let Todo_counter = document.getElementById("todo-counter");
let Doing_counter = document.getElementById("doing-counter");
let Done_counter = document.getElementById("done-counter");
let todoC;
let doingC;
let doneC;

//functions for show and hide the modal
function showModal() {
  if (task_Modal.classList.contains("hidden")) {
    task_Modal.classList.remove("hidden");
  }
}

function hideModal() {
  task_Modal.classList.add("hidden");
}
//-----------------------------------------

//error message function
function showErrorMessage(element, error) {
  const inputControl = element.parentElement;
  const erroDisplay = inputControl.querySelector(".error-message");
  erroDisplay.innerHTML = error;
}

//add events to buttons
add_taskBtn.addEventListener("click", showModal);
// submit_Btn.addEventListener("click", hideModal);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

//form validation
let validateForm = () => {
  if (task_Title.value === "" || task_Title.value > 10) {
    showErrorMessage(task_Title, "the title can not be empty");
  } else if (task_description.value === "") {
    showErrorMessage(task_description, "description field can not be empty");
  } else if (task_date.value === "") {
    showErrorMessage(task_date, "you need to give a date for your task");
  } else {
    showErrorMessage(task_Title, "");
    showErrorMessage(task_description, "");
    showErrorMessage(task_date, "");
    addTasks();
    form.reset();
  }
};

let tasks = [];
let p1tasks = [];
let p2tasks = [];
let p3tasks = [];

//add task function
let addTasks = () => {
  tasks.push({
    title: task_Title.value,
    description: task_description.value,
    date: task_date.value,
    status: task_status.value,
    priority: task_priority.value,
  });
  displayTasks(tasks);
  setPriorityColor(tasks);
  p1tasks = tasks.filter((task) => task.priority === "p1");
  p2tasks = tasks.filter((task) => task.priority === "p2");
  p3tasks = tasks.filter((task) => task.priority === "p3");
};

//display tasks function
let displayTasks = (tasks) => {
  todoTasks_container.innerHTML = "";
  doingTasks_container.innerHTML = "";
  doneTasks_container.innerHTML = "";
  todoC = 0;
  doingC = 0;
  doneC = 0;
  tasks.map((task, taskId) => {
    if (task.status === "todo") {
      todoTasks_container.innerHTML += `<div id = ${taskId} class="task p-5 border border-l-4 m-2 rounded-3xl">
    <div class="task-informations flex gap-10 flex-wrap">
        <h4 class="task-title">
            ${task.title}
        </h4>
        <p class="task-date">${task.date}</p>
    </div>
        <div class="task-actions mt-2 flex gap-3">
          <button type="button" onclick = "deleteTask(this)"
            class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
            Delete <i class="fa fa-trash"></i>
          </button>
          <button type="button" onclick = "changeTaskStatus(this)"
            class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
            Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
     </div>
     </div>`;
      todoC++;
      Todo_counter.innerText = todoC;
    } else if (task.status === "doing") {
      doingTasks_container.innerHTML += `<div id = ${taskId} class="task p-5 border border-l-4 m-2 rounded-3xl">
    <div class="task-informations flex gap-10 flex-wrap">
        <h4 class="task-title">
            ${task.title}
        </h4>
        <p class="task-date">${task.date}</p>
    </div>
        <div class="task-actions mt-2 flex gap-3">
          <button type="button" onclick = "deleteTask(this)"
            class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
            Delete <i class="fa fa-trash"></i>
          </button>
          <button type="button" onclick = "changeTaskStatus(this)"
            class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
            Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
     </div>
     </div>`;
      doingC++;
      Doing_counter.innerText = doingC;
    } else if (task.status === "done") {
      doneTasks_container.innerHTML += `<div id = ${taskId} class="task p-5 border border-l-4 m-2 rounded-3xl">
    <div class="task-informations flex gap-10 flex-wrap">
        <h4 class="task-title">
            ${task.title}
        </h4>
        <p class="task-date">${task.date}</p>
    </div>
        <div class="task-actions mt-2 flex gap-3">
          <button type="button" onclick = "deleteTask(this)"
            class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
            Delete <i class="fa fa-trash"></i>
          </button>
          <button type="button" onclick = "changeTaskStatus(this)"
            class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
            Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
     </div>
     </div>`;
      doneC++;
      Done_counter.innerText = doneC;
    }
  });
};

//set color for easch task function
let setPriorityColor = (tasks) => {
  tasks.map((task, taskId) => {
    let singleTask = document.getElementById(taskId);
    if (task.priority === "p1") {
      singleTask.classList.add("border-red-500");
    } else if (task.priority === "p2") {
      singleTask.classList.add("border-orange-400");
    } else if (task.priority === "p3") {
      singleTask.classList.add("border-green-500");
    }
  });
};

//delete task function
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  tasks.splice(e.parentElement.parentElement, 1);
  tasks.forEach((task, taskId) => {
    if (task.status === "todo" && e.parentElement.parentElement.id == taskId) {
      todoC--;
      Todo_counter.innerText = todoC;
    } else if (task.status === "doing") {
      doingC--;
      Doing_counter.innerText = todoC;
    } else if (task.status === "done") {
      doneC--;
      Done_counter.innerText = todoC;
    }
  });
  console.log("tasks", tasks);
};

//filter function
let filterTasks = () => {
  switch (filter.value) {
    case "all":
      displayTasks(tasks);
      setPriorityColor(tasks);
      break;
    case "p1":
      displayTasks(p1tasks);
      setPriorityColor(p1tasks);
      break;
    case "p2":
      displayTasks(p2tasks);
      setPriorityColor(p2tasks);
      break;
    case "p3":
      displayTasks(p3tasks);
      setPriorityColor(p3tasks);
      break;
    default:
      displayTasks(tasks);
      setPriorityColor(tasks);
      break;
  }
};
filter.addEventListener("change", filterTasks);

//change task status
let changeTaskStatus = (e) => {
  showModal();
  tasks.map((task, taskId) => {
    if (e.parentElement.parentElement.id == taskId) {
      task_Title.value = task.title;
      task_description.value = task.description;
      task_date.value = task.date;
      task_status.value = task.status;
      task_priority.value = task.priority;
    }
  });
  e.parentElement.parentElement.remove();
  tasks.splice(e.parentElement.parentElement.id, 1);
};

//sort by date function

let sortByDate = () => {
  if (sort.value === "new") {
    tasks.sortByDate();
    displayTasks(tasks);
    // setPriorityColor(tasks);
  }
};

sort.addEventListener("change", sortByDate);

//animations

task_Modal.animate(
  [
    {
      transform: "translateX(0)",
      opacity: 0,
    },
    {
      transform: "translateX(100P)",
      opacity: 1,
    },
  ],
  {
    duration: 2000,
    transition: "all .5s ease-in-out",
  }
);

const main = document.querySelector("main");
const header = document.querySelector("header");
main.animate(
  [
    {
      transform: "scale(0.9)",
      opacity: 0.5,
    },
    {
      transform: "scale(1)",
      opacity: 1,
    },
  ],
  {
    duration: 3000,
  }
);

header.animate(
  [
    {
      transform: "scale(0.8)",
      opacity: 0.5,
    },
    {
      transform: "scale(1)",
      opacity: 1,
    },
  ],
  {
    duration: 2000,
  }
);
