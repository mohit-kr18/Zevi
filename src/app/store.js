import { configureStore } from '@reduxjs/toolkit'
import likedItemReducer from './Slices/likedItemSlice'
import filterItemReducer from './Slices/filterItemSlice'

export const store = configureStore({
    reducer:{
        likedItem:likedItemReducer,
        filterItem:filterItemReducer,
    }
})
