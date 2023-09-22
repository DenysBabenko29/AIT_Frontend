import React, { useState, useEffect } from "react";

interface IUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
    phone: string;
}

const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    const [result, setResult] = useState<IUsers>({
        id: 0,
        name: "",
        username: "",
        email: "",
        address: { city: "" },
        phone: "",
    });

    const DisplayUser = (username: string) => {
        users
            .filter((user) => user.username === username)
            .map((user) => setResult(user));
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
    return (
        <>
            <h1>Users</h1>
            <div style={{ display: "flex"}}>
                <ul style={{ width: "30%" }}>
                    {users.map(({ id, name, username }) => (
                        <li
                            onClick={() => DisplayUser(username)}
                            key={id}
                            style={{
                                border: "1px solid black",
                                margin: "10px",
                                padding: "10px",
                                cursor: "pointer",
                                textAlign: "center",
                                listStyle: "none",
                            }}
                        >
                            <p>{name}</p>
                            <p>{username}</p>
                        </li>
                    ))}
                </ul>
                <div
                    style={result.username !== "" ? {
                        marginLeft: "40%",
                        fontSize: "1.5em",
                        backgroundColor: "lightblue",
                        height: "fit-content",
                        padding: "10px",
                        position: "fixed",
                    } : {}}
                >
                    {result.username !== "" && (
                        <>
                            <p>Name: {result.name}</p>
                            <p>Username: {result.username}</p>
                            <p>Email: {result.email}</p>
                            <p>City: {result.address.city}</p>
                            <p>Phone: {result.phone.split(" ")[0]}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Users;
