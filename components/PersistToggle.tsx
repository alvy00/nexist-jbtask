/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PersistToggle() {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        setEnabled(localStorage.getItem("persist_enabled") !== "false");
    }, []);

    const toggle = () => {
        const next = !enabled;
        setEnabled(next);
        localStorage.setItem("persist_enabled", String(next));

        if (!next) {
            localStorage.removeItem("cart");
        }

        window.location.reload();
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 font-medium">
                localStorage persistence
            </span>

            <button
                onClick={toggle}
                className={`relative w-10 h-5 rounded-full border transition-colors duration-300 cursor-pointer
                    ${
                        enabled
                            ? "bg-indigo-600 border-indigo-600"
                            : "bg-gray-200 border-gray-300"
                    }`}
            >
                <motion.div
                    animate={{ x: enabled ? 18 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow"
                />
            </button>

            <span
                className={`text-xs font-semibold ${enabled ? "text-indigo-600" : "text-gray-400"}`}
            >
                {enabled ? "ON" : "OFF"}
            </span>
        </div>
    );
}
