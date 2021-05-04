import {configureStore} from '@reduxjs/toolkit'
import contactReducer from './addContact'
import userReducer from './getUserInfo'

export default configureStore({
    reducer: {
        contact: contactReducer,
        userInfo: userReducer
    }
})