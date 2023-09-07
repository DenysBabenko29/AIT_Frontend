

function addTask(){
    const taskText = taskInput.value;

    if(taskText.trim() === ""){
        alert('Ваше поле не может быть пустым');
        return;
    }

    const li = document.createElement('li'); 
    li.innerHTML = `${taskText}<button onclick="removeTask(this)">Удалить</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(el){
    el.parentElement.remove();
}