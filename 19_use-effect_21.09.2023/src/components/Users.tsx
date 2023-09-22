import React, { useState, useEffect } from "react";

interface IUsers {
    id: number;
    name: string;
    username: string;
}

const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(({ id, name, username }) => (
                    <li
                        key={id}
                        style={{
                            border: "1px solid black",
                            margin: "10px",
                            padding: "10px",
                            width: "30%",
                        }}
                    >
                        <p>{name}</p>
                        <p>{username}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Users;
