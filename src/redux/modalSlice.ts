import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalSlice = createSlice({
    name: 'openModal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            console.log('toggle modal')
            return !state;
        }
    }
})

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;