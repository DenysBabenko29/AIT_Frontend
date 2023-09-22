import React, { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    return (
        <div>
            {posts.map(({ id, title }) => (
                <li key={id}>{title}</li>
            ))}
        </div>
    );
};

export default Posts;
