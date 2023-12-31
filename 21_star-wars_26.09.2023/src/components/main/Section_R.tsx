import React from "react";
import { friends } from "../utils";
import Friend from "./Friend";

const SectionR = (): JSX.Element => {
    return (
        <section className="right">
            <h2>Dream Team</h2>
            {friends.map((friend, index) => (
                <Friend href={friend} key={index} count={index} />
            ))}
        </section>
    );
};

export default SectionR;
