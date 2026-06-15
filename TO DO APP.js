const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let count = 0;

function addTask() {

    const task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${task}</span>

        <div class="actions">
            <button class="complete-btn">
                <i class="fa-solid fa-check"></i>
            </button>

            <button class="delete-btn">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    taskList.appendChild(li);

    count++;
    updateCount();

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskText = li.querySelector(".task-text");

    completeBtn.addEventListener("click", () => {
        taskText.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
        count--;
        updateCount();
    });

    taskInput.value = "";
}

function updateCount(){
    taskCount.textContent = `${count} Tasks`;
}

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});