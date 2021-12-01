import { createSlice } from "@reduxjs/toolkit";

const initialState = {listEnd: 4}

const listEndSlice = createSlice({
    name: 'listEnd',
    initialState,
    reducers: {
        showMore: state => {
            state.listEnd += 4
        },
    }, 
})

export const {showMore} = listEndSlice.actions
export const listEndSelector = state => state.listEnd

export default listEndSlice.reducer