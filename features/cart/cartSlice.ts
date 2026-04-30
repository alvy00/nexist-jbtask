"use client";
import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "./types";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.find((item) => item.id === action.payload.id)) {
                state.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
