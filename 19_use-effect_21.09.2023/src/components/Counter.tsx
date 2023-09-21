import React, { FC, useState, useEffect } from "react";

interface ICounterProps {
    initialValue: number;
}

interface IJson {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const Counter: FC<ICounterProps> = ({ initialValue }): JSX.Element => {
    const [count, setCount] = useState<number>(initialValue);
    const [json, setJson] = useState<IJson | null>(null);

    useEffect(() => {
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => setJson(data));

        return () => {
            console.log("componentWillUnmount");
        };
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate");
    }, [count]);

    const increment = (): void => {
        setCount(count + 1);
    };

    return (
        <>
            {json && (
                <>
                    {json.userId}
                    {json.title}
                    {json.completed}
                    {json.id}
                </>
            )}
            <h2>Counter: {count}</h2>
            <button onClick={(): void => setCount(count - 1)}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </>
    );
};

export default Counter;
