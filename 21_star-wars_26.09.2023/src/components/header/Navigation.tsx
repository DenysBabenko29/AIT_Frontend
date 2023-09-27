import React from "react";
import NavItem from "./NavItem";
import { navItem } from "../utils";

 const Navigation: React.FC<{changePage: (currentPage: string) => void}> = ({changePage}) =>  {
    return (
        <nav>
            <ul>
                {navItem.map((item, index) => (
                    <NavItem itemTitle={item} key={index} changePage={changePage}></NavItem>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation
