import { createSlice } from "@reduxjs/toolkit"
import { action } from "../reducers/todoReducer"

const initialState = {
    message: ""
}

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        reset: (state, action) => {
            state.message = "";
        }
    },

    /**Extra Reducer method 1 */
    // extraReducers: {
    //     /**'extraReducer' helps us to do actions which are based on another reducer or slice
    //      * for eg- in this extra reducer an alert will appear when "to-do list " adds any new task.
    //      */
    //     "todo/add": (state, action) => {
    //         state.message = "Todo is created";
    //     }
    // }
    

    /**Extra Reducer method 2 
     * 'builder' is an inbuilt api
    */
    extraReducers: (builder) => {
        builder.addCase(action.add, (state, action) => {
            state.message = "Todo is created";
        })
    }
})

export const notificationReducer = notificationSlice.reducer;
export const notificationResetAction = notificationSlice.actions.reset;

export const notificationSelector = (state) => state.notificationReducer.message;