document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("addBtn");
    const taskNameInput = document.getElementById("taskName");
    const completeNum = document.getElementById("completeNum");
    const incompleteNum = document.getElementById("incompleteNum");
    const taskList = document.createElement("div");
    taskList.id = "taskList";
    document.querySelector("main").appendChild(taskList);

    let tasks = [];

    addBtn.addEventListener("click", function () {
        const taskName = taskNameInput.value.trim();
        if (taskName !== "") {
            tasks.push({ name: taskName, complete: false });
            taskNameInput.value = "";
            renderTasks();
        }
    });

    function renderTasks() {
        taskList.innerHTML = "";
        let completeCount = 0;
        let incompleteCount = 0;

        tasks.forEach((task, index) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const taskCheckbox = document.createElement("input");
            taskCheckbox.classList.add("taskCheckbox");
            taskCheckbox.type = "checkbox";
            taskCheckbox.checked = task.complete;
            taskCheckbox.addEventListener("change", () => {
                tasks[index].complete = taskCheckbox.checked;
                renderTasks();
            });

            const taskLabel = document.createElement("span");
            taskLabel.textContent = task.name;
            taskLabel.classList.add(task.complete ? "complete" : "incomplete");

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("editBtn");
            editBtn.addEventListener("click", () => {
                const newName = prompt("Enter new task name:", task.name);
                if (newName !== null) {
                    tasks[index].name = newName;
                    renderTasks();
                }
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.classList.add("deleteBtn");
            deleteBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                renderTasks();
            });

            taskDiv.appendChild(taskCheckbox);
            taskDiv.appendChild(taskLabel);
            taskDiv.appendChild(editBtn);
            taskDiv.appendChild(deleteBtn);

            if (task.complete) {
                completeCount++;
            } else {
                incompleteCount++;
            }

            taskList.appendChild(taskDiv);
        });

        completeNum.textContent = `Number of complete tasks: ${completeCount}`;
        incompleteNum.textContent = `Number of incomplete tasks: ${incompleteCount}`;
    }

    renderTasks();
});
