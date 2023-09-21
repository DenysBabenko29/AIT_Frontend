import React, { useState, ChangeEvent } from "react";

interface ITask {
    name: string;
    completed: boolean;
}

const TodoList: React.FC = (): JSX.Element => {
    const [taskList, setTaskList] = useState<ITask[]>([]);

    const [task, setTask] = useState<ITask>({ name: "", completed: false });

    const [check, setCheck] = useState<boolean>(false);

    const AddTask = () => {
        const taskInput = document.getElementById(
            "taskInput"
        ) as HTMLInputElement;

        // const newTask = { name: taskInput.value, completed: false };
        // setTaskList(prev => [...prev, newTask]);

        // setTask({name: taskInput.value, completed: false});
        setTaskList((prev) => [...prev, task]);
        setTask({ name: "", completed: false });
        taskInput.value = "";
        
    };

    const handelIsDone = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(check);
        setCheck(e.target.checked);
        const copy = [...taskList];
        const arr = copy.filter((task) => task.name === e.target.value);
        arr[0].completed = e.target.checked;
        const index = copy.findIndex((task) => (arr[0].name = task.name));
        copy[index] = arr[0];
        setTaskList(copy);
    };

    const handelRemoveTask = (index: number): void => {
        const updatedTask = [...taskList];
        updatedTask.splice(index, 1);
        setTaskList(updatedTask);
    };

    return (
        <div className="container">
            <h1>TODO List App</h1>
            <div className="input-container">
                <input
                    onChange={(e) => {
                        setTask({ ...task, name: e.target.value });
                    }}
                    className="form-label"
                    type="text"
                    id="taskInput"
                    placeholder="Enter of task..."
                />
                <button onClick={AddTask} id="addTask">
                    Add
                </button>
            </div>
            <ul id="taskList">
                {taskList
                    .filter((task) => task.name !== "")
                    .map((task, index) => (
                        <li key={index} style={task.completed ? { color: 'green'} : {}}>
                            {task.name}
                            <input
                                onChange={handelIsDone}
                                type="checkbox"
                                id="isDone"
                                value={task.name}
                            />
                            <button onClick={() => handelRemoveTask(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default TodoList;
