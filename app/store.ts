"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const loadCart = () => {
    try {
        const saved = localStorage.getItem("cart");
        if (saved === null) return undefined;
        return { cart: JSON.parse(saved) };
    } catch {
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: loadCart(),
});

store.subscribe(() => {
    try {
        localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    } catch (e) {
        console.log(e);
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
