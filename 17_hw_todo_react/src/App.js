import React, { useState } from "react";
import "./App.css";

function App() {
    const [taskList, setTaskList] = useState([]);
    const addTask = () => {
        const newTask = document.getElementById("taskInput").value;
        if (newTask) {
            setTaskList([...taskList, newTask]);
            document.getElementById("taskInput").value = "";
        }
    };

    const deleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <div className="main">
            <h1>Todo List</h1>
            <div className="input-container">
                <input className="form-label" type="text" id="taskInput" />
                <button onClick={addTask}>Add</button>
            </div>
            <div></div>
            <ul id="taskList">
                {taskList.map((task) => (
                    <li className="marker">
                        <span>{task}</span>
                        <button onClick={() => deleteTask(taskList.indexOf(task))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
