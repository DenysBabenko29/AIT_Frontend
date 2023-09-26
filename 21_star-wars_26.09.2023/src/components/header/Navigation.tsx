import React from "react";
import NavItem from "./NavItem";
import { navItem } from "../utils";

export default function Navigation() {
    return (
        <nav>
            <ul>
                {navItem.map((item, index) => (
                    <NavItem itemTitle={item} key={index}></NavItem>
                ))}
            </ul>
        </nav>
    );
}
