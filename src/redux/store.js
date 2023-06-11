
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { combineReducers } from "redux";

const result=combineReducers({
    // using short hand
    todoReducer,
    noteReducer
})

export const store = redux.createStore(result);


