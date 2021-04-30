import {configureStore} from '@reduxjs/toolkit'
import contactReducer from './addContact'

export default configureStore({
    reducer: {
        contact: contactReducer
    }
})