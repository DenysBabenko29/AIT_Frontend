
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement} = CounterSlice.actions;

export default CounterSlice.reducer;