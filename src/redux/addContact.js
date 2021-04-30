import {createSlice} from '@reduxjs/toolkit'

export const contactSlice = createSlice({
    name: 'addContact',
    initialState: {
        rehber: []
    },
    reducers: {
        addFirstName: (state,action) => {
            state.rehber.push(action.payload)
        },
    }
})

export const { addFirstName } = contactSlice.actions;

export default contactSlice.reducer;