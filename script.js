const input = document.querySelector(".add_new");
const toDoBtn = document.querySelector(".addbtn");
const toDoList = document.querySelector(".todolist");
const filterOptions = document.querySelector(".filterToDos");

toDoBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", doneDel);
filterOptions.addEventListener("change", filter);


function addToDo(e) {
  e.preventDefault();

  const toDoItem = document.createElement("div");
  toDoItem.classList.add("item");

  const newToDo = document.createElement("li");
  newToDo.classList.add("todo-item");
  newToDo.innerHTML = " 🔸 " + input.value;

  const completebtn = document.createElement("button");
  completebtn.innerHTML = `✔️`;
  completebtn.classList.add("completebtn");

  const deletebtn = document.createElement("button");
  deletebtn.innerHTML = `✖️`;
  deletebtn.classList.add("deletebtn");

  toDoItem.appendChild(newToDo);
  toDoItem.appendChild(completebtn);
  toDoItem.appendChild(deletebtn);

  toDoList.appendChild(toDoItem);

  input.value = "";
}
function doneDel(e) {
  const chosen = e.target;

  if (chosen.classList[0] === "deletebtn") {
    const chosenToDo = chosen.parentElement;
    chosenToDo.remove();
  }

  if (chosen.classList[0] === "completebtn") {
    const chosenToDo = chosen.parentElement;
    chosenToDo.classList.toggle("completed");
  }
}
function filter(e) {
  const todos = toDoList.childNodes;
  todos.forEach(function (todo) {
    if (todo.classList !== undefined) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    toDoBtn.click();
  }
});
