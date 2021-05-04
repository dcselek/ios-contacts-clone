import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'UserInfo',
    initialState: {
        info: []
    },
    reducers: {
        getUserInfo: (state,action) => {
            state.info = []
            state.info.push(action)
        },
    }
})

export const { getUserInfo } = userSlice.actions;

export default userSlice.reducer;