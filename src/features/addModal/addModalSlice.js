import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isAddOpen: false
}

const modalAddSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        openAddModal :(state,action ) =>{
            state.isAddOpen= true
        },
        closeAddModal :(state,action ) =>{
            state.isAddOpen= false
        }
    }
})


export const {openAddModal , closeAddModal} =modalAddSlice.actions;
export default modalAddSlice.reducer;
