// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || !email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid name and email.");
    e.preventDefault();
  }
});

// To-Do List Functionality
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => li.remove(); // remove task on click
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

