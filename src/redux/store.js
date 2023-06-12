/*STORE USING REACT REDUX TOOLKIT */
import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer
    }
})













/*STORE WITHOUT USING REACT REDUX TOOLKIT */
// // const redux = require("redux");

// import * as redux from "redux";
// import {todoReducer} from "./reducers/todoReducer";
// import { noteReducer } from "./reducers/noteReducer";
// import { combineReducers } from "redux";

// const result=combineReducers({
//     // using short hand
//     todoReducer,
//     noteReducer
// })

// export const store = redux.createStore(result);


