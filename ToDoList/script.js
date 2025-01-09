var inputBox = document.getElementById("input-box");
var container = document.getElementById("list");
var addButton = document.querySelector("button");
var editMode = false;
var currentEditItem = null;

function add() {
  if (inputBox.value === "") {
    let er = document.getElementById("error");
    er.innerHTML = "Enter Task Name !";
  } else {
    if (editMode) {
      currentEditItem.childNodes[0].nodeValue = inputBox.value;
      addButton.innerText = "Add";
      editMode = false;
      currentEditItem = null;
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;

      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      span.classList.add("delete");
      li.appendChild(span);

      let editSpan = document.createElement("span");
      editSpan.innerHTML = "🖉";
      editSpan.classList.add("edit");
      li.appendChild(editSpan);

      container.prepend(li);
    }

    inputBox.value = "";
    saveData();
  }
}
// https://66a77a0d53c13f22a3cfe3ac.mockapi.io/user

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("edit")) {
    editMode = true;
    currentEditItem = e.target.parentElement;
    inputBox.value = currentEditItem.childNodes[0].nodeValue;
    addButton.innerText = "Update";
  }
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    if (e.target.className === "checked") {
      container.appendChild(e.target);
    } else {
      var parent = e.target.parentNode;
      parent.removeChild(e.target);
      parent.insertBefore(e.target, parent.firstChild);
    }
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}

function showData() {
  container.innerHTML = localStorage.getItem("data");
  let spans = container.querySelectorAll("span.edit");
  spans.forEach((span) => {
    span.addEventListener("click", function (e) {
      editMode = true;
      currentEditItem = e.target.parentElement;
      inputBox.value = currentEditItem.childNodes[0].nodeValue;
      addButton.innerText = "Update";
    });
  });
}

showData();
