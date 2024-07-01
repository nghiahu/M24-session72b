import { createSlice } from "@reduxjs/toolkit";

const statusModal = createSlice({
    name:"modalStatus",
    initialState:{
        statusML:false,
        postUpdate:{}
    },
    reducers:{
        openModal(state, action) {
            state.statusML = true;
            state.postUpdate = action.payload;
        },
        closeModal(state) {
            state.statusML = false;
            state.postUpdate = {};
        },
    }
})

export const { openModal, closeModal } = statusModal.actions;
export default statusModal.reducer;
