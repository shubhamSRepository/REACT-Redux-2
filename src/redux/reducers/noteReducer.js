import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
    notes: [
        { text: "first note", createdOn: new Date() },
        { text: "second note", createdOn: new Date() }
    ]
}

export function noteReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        text: action.text,
                        createdOn: new Date()
                    }
                ]
            }

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note, i) => i != action.index)
            }

        default:
            return state;
    }
}