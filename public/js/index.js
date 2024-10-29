let task_Modal = document.getElementById("add-task_modal");
let add_taskBtn = document.getElementById("add-task_button");
let close_ModalIcon = document.getElementById("close-modal");
let submit_Btn = document.getElementById("submit-Button");
let form = document.getElementById("add-task_form");

//functon for show and hide th modal
function showModal() {
  if (task_Modal.classList.contains("hidden")) {
    task_Modal.classList.remove("hidden");
  }
}

function hideModal() {
  task_Modal.classList.add("hidden");
}

submit_Btn.onsubmit;

//add task function
add_taskBtn.addEventListener("click", showModal);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //form inputs values
  let task_Title = document.getElementById("task-Title");
  let task_description = document.getElementById("task-description");
  let task_date = document.getElementById("task-date");
  let task_priority = document.getElementById("task-priority");
  let task_type = document.getElementById("task-type");

  //form validation
  var isInvalide = true;

  if (task_Title.value == "" || task_Title.value.length <= 5) {
    isInvalide == true;
    alert("your title must contains at least 5 caracteres");
    task_Title.value = "";
  } else isInvalide == false;

  if (task_description.value == "" || task_description.value.length <= 50) {
    isInvalide = true;
    alert("your decription must contain more then 50 caracteres ");
    task_description.value = "";
  }

  task_Modal.classList.add("hidden");
});
