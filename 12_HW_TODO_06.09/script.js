addTask.addEventListener("click", addTaskF);

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }

    if (e.target.tagName === "SPAN") {
        if (e.target.textContent === "radio_button_unchecked") {
            e.target.textContent = "check_circle";
            e.target.style.color = "green";
            e.target.nextElementSibling.style.textDecoration = "line-through";
            e.target.nextElementSibling.style.color = 'green';

        } else {
            e.target.textContent = "radio_button_unchecked";
            e.target.style.color = "black";
            e.target.nextElementSibling.style.textDecoration = "";
            e.target.nextElementSibling.style.color = 'black';

        }
    }
});

function addTaskF() {
    const taskName = taskInput.value.trim();
    if (taskName) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="marker material-symbols-outlined">radio_button_unchecked</span>
        <span>${taskName}</span>
        <button>Delete</button>`;
        taskList.appendChild(li);
    }
    taskInput.value = "";
}
