import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

/*Creating Reducer using Redux Toolkit */

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        //this is add reducer
        add: (state, action) => {
            state.todos.push({
                text: action.payload, //'payload' indicates that what ever is sent as an argument
                completed: false
            })
        },

        //this is toggle reducer
        toggle: (state, action) => {
            state.todos.map((todo, i) => {
                if (i == action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        }
    }
});

export const todoReducer = todoSlice.reducer;
export const action = todoSlice.actions;

//selector
export const todoSelector = (state) => state.todoReducer.todos;



