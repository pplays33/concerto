
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
};

export const slice = createSlice({
    name: "themSw",
    initialState,
    reducers:{
        Switch: (state) => {
            state.value = !(state.value);
            // alert(state.value);
        },
    }
});

export const { Switch } = slice.actions;

export default slice.reducer;