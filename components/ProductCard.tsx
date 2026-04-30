"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    index: number;
    inCart: boolean;
    onAdd: (product: Product) => void;
}

export function ProductCard({
    product,
    index,
    inCart,
    onAdd,
}: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
            {/* Visual Header / Emoji Area */}
            <div className="h-32 flex items-center justify-center relative overflow-hidden bg-gray-50">
                {/* Elegant, Slower Shine Animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <motion.div
                        initial={{ x: "-100%", rotate: 45 }}
                        whileHover={{ x: "100%" }}
                        transition={{
                            duration: 1.5, // Slower, more elegant sweep
                            ease: [0.4, 0, 0.2, 1], // Smooth professional easing
                            repeat: 0,
                        }}
                        className="absolute inset-0 w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -top-1/2"
                    />
                </div>

                <motion.span
                    className="text-6xl select-none relative z-10"
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                    }}
                >
                    {product.emoji}
                </motion.span>

                <AnimatePresence>
                    {inCart && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute top-3 right-3 z-20"
                        >
                            <div className="bg-indigo-600 text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-lg">
                                In Cart
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Content Body */}
            <div className="p-4 space-y-4">
                <div className="space-y-1">
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                        {product.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                        {product.desc}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-col">
                        <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest">
                            Price
                        </span>
                        <span className="font-extrabold text-sm text-gray-950">
                            ${product.price.toFixed(2)}
                        </span>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        disabled={inCart}
                        onClick={() => onAdd(product)}
                        className={`text-[10px] px-4 py-2 rounded-xl font-bold transition-all duration-200
              ${
                  inCart
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                      : "bg-gray-900 text-white hover:bg-indigo-600 active:bg-indigo-700 shadow-md cursor-pointer"
              }`}
                    >
                        {inCart ? "ADDED" : "ADD TO CART"}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
