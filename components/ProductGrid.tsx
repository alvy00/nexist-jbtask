"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import { Product } from "@/types";
import { toast } from "react-toastify";
import { ProductCard } from "./ProductCard";
import { CartSection } from "./CartSection";

export const products: Product[] = [
    {
        id: 1,
        name: "Wireless Headphones",
        desc: "Premium sound...",
        price: 89.99,
        emoji: "🎧",
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        desc: "Tactile switches...",
        price: 129.99,
        emoji: "⌨️",
    },
    { id: 3, name: "Webcam HD", desc: "1080p...", price: 64.99, emoji: "📷" },
    {
        id: 4,
        name: "USB-C Hub",
        desc: "7-in-1 ports...",
        price: 39.99,
        emoji: "🔌",
    },
    {
        id: 5,
        name: "Desk Lamp",
        desc: "Adjustable...",
        price: 29.99,
        emoji: "💡",
    },
    {
        id: 6,
        name: "Mouse Pad XL",
        desc: "Extended size...",
        price: 19.99,
        emoji: "🖱️",
    },
];

export default function ProductGrid() {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleAdd = (product: Product) => {
        const inCart = cart.find((i) => i.id === product.id);
        if (inCart) {
            toast.warn(`${product.name} is already in your cart`);
            return;
        }
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart`);
    };

    const handleRemove = (item: Product) => {
        dispatch(removeFromCart({ id: item.id }));
        toast.error(`${item.name} removed from cart`);
    };

    return (
        <div className="space-y-10">
            {/* Product list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={i}
                        inCart={!!cart.find((item) => item.id === product.id)}
                        onAdd={handleAdd}
                    />
                ))}
            </div>

            {/* Cart summary */}
            <CartSection cart={cart} total={total} onRemove={handleRemove} />
        </div>
    );
}
