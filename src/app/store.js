import { configureStore } from '@reduxjs/toolkit'
import likedItemReducer from './Slices/likedItemSlice'


export const store = configureStore({
    reducer:{
        likedItem:likedItemReducer,
    }
})
