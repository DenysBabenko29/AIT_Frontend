import React from "react";
import { mainImg } from "../utils";


const SectionL = (): JSX.Element => {
    return (
        <section className="left">
            {/* <img src={process.env.PUBLIC_URL + '/images/main.jpg'} alt="hero" /> */}
            <img src={mainImg} alt="hero" />
        </section>
    );
};

export default SectionL;
