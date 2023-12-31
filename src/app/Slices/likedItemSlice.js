import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    likedItems:JSON.parse(localStorage.getItem("liked-items")) || [],
};

const likedItemSlice = createSlice({
    name: 'likedItem',
    initialState,
    reducers: {
        toggleLike(state, action) {
            // console.log(action.payload)
            const isLiked = state.likedItems.find((index) => index === action.payload);
            // console.log(isLiked)
           
            if (isLiked!==undefined) {
                state.likedItems = state.likedItems.filter((index) => index !== action.payload);
            } else {
                state.likedItems.push(action.payload);
            }
            localStorage.setItem("liked-items", JSON.stringify(state.likedItems));
        }
    },
});

export default likedItemSlice.reducer;
export const { toggleLike} = likedItemSlice.actions;
