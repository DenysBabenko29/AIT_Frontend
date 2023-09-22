import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav style={{display: "flex", justifyContent: "space-around"}}>
                <ul style={{display: "flex", fontSize: "20px", listStyle: "none"}}>
                    <li className="li">
                        <Link className="link" to="/users">Users</Link>
                    </li>
                    <li  className="li">
                        <Link className="link" to="/comments">Comments</Link>
                    </li>
                    <li className="li">
                        <Link className="link" to="/posts">Posts</Link>
                    </li>
                    <li className="li">
                        <Link className="link" to="/todos">Todos</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
};

export default Layout;
