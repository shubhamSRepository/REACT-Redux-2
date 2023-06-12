import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notes: []
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


