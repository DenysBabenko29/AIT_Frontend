import React from "react";
import { navItem } from "../utils";
import Home from "../Home";
import AboutMe from "../AboutMe";
import StarWars from "../StarWars";
import Contacts from "../Contacts";

const Main: React.FC<{ currentPage: string }> = ({
    currentPage,
}): JSX.Element => {
    console.log(currentPage);

    switch (currentPage) {
        case navItem[1]:
            return <AboutMe />;
        case navItem[2]:
            return <StarWars />;
        case navItem[3]:
            return <Contacts />;
        default:
            return <Home />;
    }
};

export default Main;
