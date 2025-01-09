document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://66a77a0d53c13f22a3cfe3ac.mockapi.io/user";
  const tableBody = document.querySelector("tbody");

  function fetchData() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        tableBody.innerHTML = "";
        data.forEach((user) => {
          const row = document.createElement("tr");

          const idCell = document.createElement("td");
          idCell.textContent = user.id;
          row.appendChild(idCell);

          const avatarCell = document.createElement("td");
          const avatarImg = document.createElement("img");
          avatarImg.src = user.avatar;
          avatarCell.appendChild(avatarImg);
          row.appendChild(avatarCell);

          const nameCell = document.createElement("td");
          const nameSpan = document.createElement("span");
          nameSpan.textContent = user.name;
          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = nameSpan.textContent;
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.addEventListener("click", () => {
              const newName = input.value;
              fetch(`${apiUrl}/${user.id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...user, name: newName }),
              })
                .then((response) => response.json())
                .then((updatedUser) => {
                  nameSpan.textContent = updatedUser.name;
                  nameCell.replaceChild(nameSpan, input);
                  nameCell.removeChild(saveButton);
                })
                .catch((error) => console.error("Error updating data:", error));
            });
            nameCell.appendChild(saveButton);
            nameCell.replaceChild(input, nameSpan);
          });
          nameCell.appendChild(nameSpan);
          nameCell.appendChild(editButton);
          row.appendChild(nameCell);

          const textCell = document.createElement("td");
          textCell.textContent = user.text || "";
          row.appendChild(textCell);

          const completedCell = document.createElement("td");
          const dropdown = document.createElement("select");
          const optionYes = document.createElement("option");
          optionYes.value = "true";
          optionYes.textContent = "Yes";
          const optionNo = document.createElement("option");
          optionNo.value = "false";
          optionNo.textContent = "No";

          dropdown.appendChild(optionYes);
          dropdown.appendChild(optionNo);
          dropdown.value = user.completed ? "true" : "false";

          dropdown.addEventListener("change", () => {
            const newCompletedStatus = dropdown.value === "true";
            fetch(`${apiUrl}/${user.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...user, completed: newCompletedStatus }),
            })
              .then((response) => response.json())
              .then((updatedUser) => {
                dropdown.value = updatedUser.completed ? "true" : "false";
              })
              .catch((error) => console.error("Error updating data:", error));
          });

          completedCell.appendChild(dropdown);
          row.appendChild(completedCell);

          const orderCell = document.createElement("td");
          orderCell.textContent = user.order || "";
          row.appendChild(orderCell);

          tableBody.appendChild(row);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  fetchData();
});
