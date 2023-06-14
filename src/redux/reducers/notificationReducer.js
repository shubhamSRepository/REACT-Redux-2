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

    /**Extra Reducer method 1 (this method is not recommended to use) */
    // extraReducers: {
    //     /**'extraReducer' helps us to do actions which are based on another reducer or slice
    //      * for eg- in this extra reducer an alert will appear when "to-do list " adds any new task.
    //      */
    //     "todo/add": (state, action) => {
    //         state.message = "Todo is created";
    //     }
    // }


    /**Extra Reducer method 2 using 'builder'.
     * 'builder' is an inbuilt api.
    */
    // extraReducers: (builder) => {
    //     builder.addCase(action.add, (state, action) => {
    //         state.message = "Todo is created";
    //     })
    // }


    /**Extra Reducer method 3 using 'map'.*/
    extraReducers: {
        //map objects:[key]:value
        [action.add]: (state, action) => {
            state.message = "To Do is created";
        }
    }

})

export const notificationReducer = notificationSlice.reducer;
export const notificationResetAction = notificationSlice.actions.reset;

export const notificationSelector = (state) => state.notificationReducer.message;