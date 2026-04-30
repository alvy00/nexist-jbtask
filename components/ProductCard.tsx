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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
            whileHover={{
                y: -4,
                transition: { duration: 0.2 },
            }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
            {/* Emoji area */}
            <div className="h-28 flex items-center justify-center text-5xl bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <motion.span
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                    }}
                >
                    {product.emoji}
                </motion.span>

                {/* "In cart" badge */}
                <AnimatePresence>
                    {inCart && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            className="absolute top-2 right-2 bg-indigo-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        >
                            In cart
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Card body */}
            <div className="p-3 space-y-3">
                <div>
                    <p className="font-semibold text-sm text-gray-900">
                        {product.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {product.desc}
                    </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-sm text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    <motion.button
                        whileTap={{ scale: 0.93 }}
                        disabled={inCart}
                        onClick={() => onAdd(product)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all
              ${
                  inCart
                      ? "bg-indigo-50 border-indigo-200 text-indigo-600 cursor-not-allowed"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer"
              }`}
                    >
                        {inCart ? "✓ Added" : "Add to cart"}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
