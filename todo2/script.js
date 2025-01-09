var inputBox = document.getElementById("input-box");
var container = document.getElementById("list");
var addButton = document.querySelector("button");
var editMode = false;
var currentEditItem = null;

const API_URL = "https://66a77a0d53c13f22a3cfe3ac.mockapi.io/user";

async function add() {
  if (inputBox.value === "") {
    let er = document.getElementById("error");
    er.innerHTML = "Enter Task Name!";
    return;
  }

  let todoItem = { text: inputBox.value, completed: false };

  if (editMode) {
    let id = currentEditItem.getAttribute("data-id");
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    });
    addButton.innerText = "Add";
    editMode = false;
    currentEditItem = null;
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoItem),
    });
  }

  inputBox.value = "";
  loadData();
}

async function deleteTodoItem(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadData();
}

async function toggleCompletion(id, completed) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: completed }),
  });
  loadData();
}

async function loadData() {
  let response = await fetch(API_URL);
  let todos = await response.json();
  container.innerHTML = "";
  todos.forEach((todo) => {
    let li = document.createElement("li");
    li.textContent = todo.text;
    li.classList.toggle("checked", todo.completed);
    li.setAttribute("data-id", todo.id);

    let deleteSpan = document.createElement("span");
    deleteSpan.innerHTML = "\u00d7";
    deleteSpan.classList.add("delete");
    li.appendChild(deleteSpan);

    let editSpan = document.createElement("span");
    editSpan.innerHTML = "🖉";
    editSpan.classList.add("edit");
    li.appendChild(editSpan);

    container.prepend(li);
  });

  container.querySelectorAll("span.edit").forEach((span) => {
    span.addEventListener("click", function (e) {
      editMode = true;
      currentEditItem = e.target.parentElement;
      inputBox.value = currentEditItem.firstChild.textContent;
      addButton.innerText = "Update";
    });
  });

  container.querySelectorAll("span.delete").forEach((span) => {
    span.addEventListener("click", function (e) {
      let id = e.target.parentElement.getAttribute("data-id");
      deleteTodoItem(id);
    });
  });
}

container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    let id = e.target.getAttribute("data-id");
    let completed = !e.target.classList.contains("checked");
    toggleCompletion(id, completed);

    e.target.classList.toggle("checked");

    if (e.target.className === "checked") {
      container.appendChild(e.target);
    } else {
      var parent = e.target.parentNode;

      parent.removeChild(e.target);

      parent.insertBefore(e.target, parent.firstChild);
    }
  }
});

loadData();
