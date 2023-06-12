import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [
        { text: "Go to Gym at 6", completed: false },
        { text: "Study at 8", completed: true }
    ]
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





/*REACT REDUX WITHOUT TOOLKIT */

// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

// const initialState={
//     todos:[
//         {text:"Go to Gym at 6", completed: false},
//         {text: "Study at 8", completed: true}
//     ]
// }

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }