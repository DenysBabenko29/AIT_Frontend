import React, { useState } from "react";

const Todos = () => {
    const [todos, setTodos] = useState([]);
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {todos.map(({ id, userId, title }) => (
                <div
                    key={id}
                    style={{
                        border: "1px solid black",
                        margin: "10px",
                        padding: "10px",
                        width: "30%",
                    }}
                >
                    <p>UsId: {userId}</p>
                    <p>Title: {title}</p>
                </div>
            ))}
        </div>
    );
};

export default Todos;
