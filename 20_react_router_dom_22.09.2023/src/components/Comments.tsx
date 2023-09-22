import React, { useState } from "react";

const Comments = () => {
    const [blogs, setBlogs] = useState([]);
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((data) => setBlogs(data));

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {blogs.map(({ id, name, body, email }) => (
                <div key={id} style={{ border: "1px solid black", margin: "10px", padding: "10px", width: "30%" }}>
                    <p>Пользователь: {name}</p>
                    <p>Email: {email}</p>
                    <p>Comment: {body}</p>
                </div>
            ))}
        </div>
    );
};

export default Comments;
