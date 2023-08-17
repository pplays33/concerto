"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import CounterReducer from  './Features/slice';
import sliceThem from "./Features/sliceThem";

const rootReducer = combineReducers({
    counter: CounterReducer,
    SwithThem: sliceThem,
},);

export const store = configureStore({
    reducer: rootReducer,
});