/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";

export default function Loading() {
    const [tagline, setTagline] = useState("");

    const taglines = [
        "Curating our latest collection",
        "Unpacking new arrivals",
        "Preparing the showroom",
        "Organizing premium inventory",
    ];

    useEffect(() => {
        const randomTagline =
            taglines[Math.floor(Math.random() * taglines.length)];
        setTagline(randomTagline);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
            <div className="relative flex items-center justify-center">
                <div className="flex items-end gap-1.5 h-10">
                    <div className="w-2 bg-indigo-600 rounded-full animate-[loading_1s_ease-in-out_infinite]" />
                    <div className="w-2 bg-indigo-500 rounded-full animate-[loading_1s_ease-in-out_0.2s_infinite]" />
                    <div className="w-2 bg-indigo-400 rounded-full animate-[loading_1s_ease-in-out_0.4s_infinite]" />
                </div>

                <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl rounded-full animate-pulse" />
            </div>

            <div className="mt-8 flex flex-col items-center">
                <div className="mt-8 flex flex-col items-center">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.3em] mb-1">
                        Exclusives
                    </span>
                    <p className="text-sm font-medium text-gray-900 tracking-tight">
                        {tagline}
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes loading {
                    0%,
                    100% {
                        height: 1rem;
                        opacity: 0.4;
                    }
                    50% {
                        height: 2.5rem;
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
