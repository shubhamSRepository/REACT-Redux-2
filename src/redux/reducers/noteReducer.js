import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notes: [
        { text: "first note", createdOn: new Date() },
        { text: "second note", createdOn: new Date() }
    ]
}

/*Creating Reducer using Redux Toolkit */
const noteSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.notes.push({
                text: action.payload,
                createdOn: new Date()
            })
        },

        delete: (state, action) => (
            state.notes.filter((note, i) => i != action.payload)
        )
    }

})

export const noteReducer = noteSlice.reducer;
export const noteAction = noteSlice.actions;

export const noteSelector = (state) => state.noteReducer.notes;





/*REACT REDUX WITHOUT TOOLKIT */
// import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

// const initialState = {
//     notes: [
//         { text: "first note", createdOn: new Date() },
//         { text: "second note", createdOn: new Date() }
//     ]
// }

// export function noteReducer(state = initialState, action) {

//     switch (action.type) {
//         case ADD_NOTE:
//             return {
//                 ...state,
//                 notes: [
//                     ...state.notes,
//                     {
//                         text: action.text,
//                         createdOn: new Date()
//                     }
//                 ]
//             }

//         case DELETE_NOTE:
//             return {
//                 ...state,
//                 notes: state.notes.filter((note, i) => i != action.index)
//             }

//         default:
//             return state;
//     }
// }