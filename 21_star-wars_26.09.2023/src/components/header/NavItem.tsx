// import React, { useContext } from "react";
// import { PageContext } from "../../App";


const NavItem: React.FC<{
    itemTitle: string;
    changePage: (currentPage: string) => void;
}> = ({ itemTitle, changePage }) => {
    // const myFunction = useContext(PageContext);
    return (
        <li className="commonButton" onClick={() => changePage(itemTitle)}>
            {itemTitle}
        </li>
    );
};

export default NavItem;
