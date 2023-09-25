import React, { useState, useEffect } from "react";

export default function DogEffect(): JSX.Element {
    const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
    const [numberOfCats, setNumberOfCats] = useState<number>(0);
    useEffect(() => {
        console.log("работает");
        
    }, [numberOfDogs]);
    return (
        <div>
            <h1>DogEffect</h1>
            NumerOfDogs: {numberOfDogs}
            <button onClick={() => setNumberOfDogs(numberOfDogs + 1)}>Add Dog</button>
            NumberOfCats: {numberOfCats}
            <button onClick={() => setNumberOfCats(numberOfCats + 1)}>Add Cat</button>
        </div>
    );
}
