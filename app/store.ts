"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const isPersistEnabled = () => {
    try {
        return localStorage.getItem("persist_enabled") !== "false";
    } catch {
        return false;
    }
};

const loadCart = () => {
    try {
        if (!isPersistEnabled()) return undefined;
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
        if (!isPersistEnabled()) {
            localStorage.removeItem("cart");
            return;
        }
        localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    } catch {}
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
