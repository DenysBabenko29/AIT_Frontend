import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState([]);
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTodo(data));

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {todo.map(({ id, userId, title }) => (
                <div
                    key={id}
                    style={{
                        border: "1px solid black",
                        margin: "10px",
                        padding: "10px",
                        width: "30%",
                    }}
                >
                    <p>UserId: {userId}</p>
                    <p>Title: {title}</p>
                </div>
            ))}
        </div>
    );
};

export default Todo;
