'use client'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const Slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) =>{
            state.value += 1;
        },
    }
});

export const { increment } = Slice.actions;

export default Slice.reducer;