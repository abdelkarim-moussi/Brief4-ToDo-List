let task_Modal = document.getElementById("add-task_modal");
let form = document.getElementById("add-task_form");
let add_taskBtn = document.getElementById("add-task_button");
let close_ModalIcon = document.getElementById("close-modal");
let submit_Btn = document.getElementById("submit-Button");
let todoTasks_container = document.getElementById("todo-tasks-container");
let doingTasks_container = document.getElementById("doing-tasks-container");
let doneTasks_container = document.getElementById("done-tasks-container");
let singleTask = document.querySelector(".task");
//counters
let todoCounter = document.getElementById("todo-counter");
let doingCounter = document.getElementById("doing-counter");
let doneCounter = document.getElementById("done-counter");
//counters variables
let todoN;
let doingN;
let doneN;
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

  if (task_Title.value === "") {
    showErrorMessage(
      task_Title,
      "your title must contains at least 5 caracteres"
    );
  } else {
    showErrorMessage(task_Title, "");
    addTask();
    displaytasks();
    form.reset();
    filterByPriority();
  }
});

//tasks array
let tasks = [];
let filtredTask = [];
let todoTasks = [];
let doingTasks = [];
let doneTasks = [];
//---------------------
//add task function
let addTask = () => {
  // if (task_type.value === "todo") {
  //   todoTasks.push({
  //     title: task_Title.value,
  //     description: task_description.value,
  //     date: task_date.value,
  //     type: task_type.value,
  //     priority: task_priority.value,
  //   });
  // } else if (task_type.value === "doing") {
  //   doingTasks.push({
  //     title: task_Title.value,
  //     description: task_description.value,
  //     date: task_date.value,
  //     type: task_type.value,
  //     priority: task_priority.value,
  //   });
  // } else if (task_type.value === "done") {
  //   doneTasks.push({
  //     title: task_Title.value,
  //     description: task_description.value,
  //     date: task_date.value,
  //     type: task_type.value,
  //     priority: task_priority.value,
  //   });
  // }
  tasks.push({
    title: task_Title.value,
    description: task_description.value,
    date: task_date.value,
    type: task_type.value,
    priority: task_priority.value,
  });
};
let filterByPriority = () => {
  for (let item of tasks) {
    if (item.type === "todo") {
      filtredTask.push(item);
    }
  }
};

let displaytasks = () => {
  todoN = 0;
  doingN = 0;
  doneN = 0;
  todoTasks_container.innerHTML = "";
  doingTasks_container.innerHTML = "";
  doneTasks_container.innerHTML = "";
  console.log(filtredTask.length);
  // console.log(todoTasks);
  // todoTasks.map((task, taskId) => {
  //   if (task.type === "todo") {
  //   }
  //   todoTasks_container.innerHTML += `<div id=${taskId} class="task p-5 border border-l-4 m-2 rounded-3xl shadow-md">
  //       <div class="task-informations flex gap-10 flex-wrap">
  //           <h4 class="task-title">
  //               ${task.title}
  //           </h4>
  //           <p class="task-date">${task.date}</p>
  //       </div>
  //       <div class="task-actions mt-2 flex gap-3">
  //           <button type="button" onClick = "deleteTask(this)"
  //               class=" text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
  //               Delete <i class="fa fa-trash"></i>
  //           </button>
  //           <button type="button"
  //               class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000" >
  //               Edit <i class="fa-solid fa-pen-to-square"></i>
  //           </button>
  //         </div>
  //       </div>`;
  //   todoN = todoTasks.length;
  //   todoCounter.innerHTML = todoN;
  // });
  tasks.map((task, taskId) => {
    if (task.type === "todo") {
      todoTasks_container.innerHTML += `<div id=${taskId} class="task p-5 border border-l-4 m-2 rounded-3xl shadow-md">
      <div class="task-informations flex gap-10 flex-wrap">
          <h4 class="task-title">
              ${task.title}
          </h4>
          <p class="task-date">${task.date}</p>
      </div>
      <div class="task-actions mt-2 flex gap-3">
          <button type="button" onClick = "deleteTask(this)"
              class=" text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
              Delete <i class="fa fa-trash"></i>
          </button>
          <button type="button"
              class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000" >
              Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
      </div>`;
      todoN++;
      todoCounter.innerHTML = todoN;
    } else if (task.type === "doing") {
      doingTasks_container.innerHTML += `
      <div id=${taskId}  class="task p-5 border border-l-4 m-2 rounded-3xl">
         <div class="task-informations flex gap-10 flex-wrap">
          <h4 class="task-title">
          ${task.title}</
         </h4>
         <p class="task-date">${task.date}</p>
      </div>
      <div class="task-actions mt-2 flex gap-3">
      <button type="button" onClick = "deleteTask(this)"
          class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
          Delete <i class="fa fa-trash"></i>
      </button>
      <button type="button"
          class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
          Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
      </div>
      </div>
    `;
      doingN++;
      doingCounter.innerHTML = doingN;
    } else if (task.type === "done") {
      doneTasks_container.innerHTML += `<div id=${taskId}  class="task p-5 border border-l-4 m-2 rounded-3xl">
          <div class="task-informations flex gap-10 flex-wrap">
              <h4 class="task-title" id="done-task_title">
               ${task.title}
              </h4>
               <p class="task-date" id="done-task_date">${task.date}</p>
                </div>
              <div class="task-actions mt-2 flex gap-3">
                 <button type="button" onClick = "deleteTask(this)"
                   class="text-white bg-red-500 hover:bg-red-600  font-mono text-xs px-5 py-1.5  focus:outline-none rounded-3xl shadow-md transition ease-in-out duration-1000">
                    Delete <i class="fa fa-trash"></i>
                </button>
                <button type="button"
                class="text-white bg-orange-400 hover:bg-orange-500 font-mono text-xs px-5 py-1.5 focus:outline-none rounded-3xl shadow-emerald-800 transition ease-in-out duration-1000" >
                    Edit <i class="fa-solid fa-pen-to-square"></i>
                </button>
             </div>
          </div>`;
      doneN++;
      doneCounter.innerHTML = doneN;
    }
  });
};

let filterTasks = () => {
  for (let i = 0; i <= tasks.length; i++) {
    if (
      transferPriority(tasks[i].priority) >
      transferPriority(tasks[i + 1].priority)
    ) {
      tasks[i] = tasks[i + 1];
      console.log(tasks[i]);
      filtredTask.push(tasks[i]);
    }
  }
  // for(let i = 0; i <= tasks.length ; i++){

  //   if(tasks[i].)
  // }
};
let transferPriority = (p) => {
  if (p === "p1") return 1;
  else if (p === "p2") return 2;
  else if (p === "p3") return 3;
};
//delete task function
let deleteTask = (e) => {
  // console.log(tasks[n]);
  // console.log(task);
  e.parentElement.parentElement.remove();
  tasks.splice(e.parentElement.parentElement.id, 1);
};

//filter function

// let setPriorityColor = () => {
//   if (task_priority.value === "p1") {
//     singleTask.classList.add("border-red-500");
//     console.log(singleTask);
//   } else if (task_priority.value === "p2") {
//     singleTask.classList.add("border-blue-500");
//     console.log(singleTask);
//   } else if (task_priority.value === "p3") {
//     singleTask.classList.add("border-green-500");
//     console.log(singleTask);
//   }
// };

// deleteBtn.addEventListener("click", deletTask(deletTask(deleteBtn)));
add_taskBtn.addEventListener("click", showModal);
