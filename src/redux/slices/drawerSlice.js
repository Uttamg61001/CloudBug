import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
    name:"drawer",
    initialState : {
       open : true
    },
    reducers:{
       setOpen : (state , action) => {
        state.open = action.payload
       }
    },
    extraReducers:(builder) => {

    }
})

const drawerReducer = drawerSlice.reducer
export const {setOpen} = drawerSlice.actions
export default drawerReducer