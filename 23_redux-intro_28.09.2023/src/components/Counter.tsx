import React from "react";
import {useSelector, useDispatch} from 'react-redux'
// import { RootState } from "../redux/store";
import { RootState } from "../redux/storeRTK";
import { decrement, increment } from "../redux/slices/counterSlice";

const Counter: React.FC = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch()

    // const handleMinus = (): void => {
    //     dispatch({type: 'counter/minus', payload: 1})
    // }

    // const handlePlus = (): void => {
    //     dispatch({type: 'counter/plus', payload: 1})
    // }

    const handleMinus = (): void => {
        dispatch(decrement())
    }

    const handlePlus = (): void => {
        dispatch(increment(1))
    }

    return (
        <>
            <div>Counter: {counter}</div>
            <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus}>+</button>
        </>
    );
};

export default Counter;
