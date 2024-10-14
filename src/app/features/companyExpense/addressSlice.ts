import { createSlice } from "@reduxjs/toolkit";


const addressSlice = createSlice({
    name : 'address',
    initialState : {
        allAddress : []
    },
    reducers : {
        setAllAddress : (state,action) =>{
            state.allAddress = action.payload;
        }
    }
});

export const {setAllAddress} =addressSlice.actions;
export default addressSlice.reducer;