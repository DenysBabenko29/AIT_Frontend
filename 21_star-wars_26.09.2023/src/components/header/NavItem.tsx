import React from "react";

const NavItem: React.FC<{ itemTitle: string }> = ({ itemTitle }) => {
    return <li className="commonButton">{itemTitle}</li>;
};

export default NavItem;
