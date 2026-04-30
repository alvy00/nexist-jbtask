"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types";

interface CartSectionProps {
    cart: Product[];
    total: number;
    onRemove: (item: Product) => void;
}

export function CartSection({ cart, total, onRemove }: CartSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
        >
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                    Cart
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={cart.length}
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-medium"
                        >
                            {cart.length}
                        </motion.span>
                    </AnimatePresence>
                </h2>
                {cart.length > 0 && (
                    <span className="text-xs text-gray-400">
                        {cart.length} item{cart.length > 1 ? "s" : ""}
                    </span>
                )}
            </div>

            <AnimatePresence mode="wait">
                {cart.length === 0 ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-14 text-gray-300 gap-3"
                    >
                        <span className="text-5xl">🛒</span>
                        <p className="text-sm font-medium">
                            Your cart is empty
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="items"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{
                                        opacity: 0,
                                        x: 16,
                                        height: 0,
                                        padding: 0,
                                    }}
                                    transition={{ duration: 0.25 }}
                                    className="flex items-center justify-between px-5 py-3 border-b border-gray-100 last:border-b-0"
                                >
                                    <span className="text-sm text-gray-800 flex items-center gap-2">
                                        <span className="text-lg">
                                            {item.emoji}
                                        </span>
                                        {item.name}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-semibold text-gray-900">
                                            ${item.price.toFixed(2)}
                                        </span>
                                        <button
                                            onClick={() => onRemove(item)}
                                            className="text-xs text-gray-300 hover:text-red-500 transition-colors cursor-pointer font-medium"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Summary Footer */}
                        <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-t border-gray-200">
                            <span className="text-sm font-medium text-gray-600">
                                Total
                            </span>
                            <span className="text-base font-bold text-gray-900">
                                ${total.toFixed(2)}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
