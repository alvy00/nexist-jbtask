"use client";
import Loading from "@/components/Loading";
import PersistToggle from "@/components/PersistToggle";
import ProductGrid from "@/components/ProductGrid";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sticky header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🛍️</span>
                        <span className="font-semibold text-gray-900 tracking-tight">
                            Nexist Store
                        </span>
                    </div>
                    <PersistToggle />
                </div>
            </header>

            {/* Hero */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-10">
                    <p className="text-xs font-medium text-indigo-600 uppercase tracking-widest mb-2">
                        New arrivals
                    </p>
                    <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                        Our Products
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Pick what you need. No duplicates, no fuss.
                    </p>
                </div>
            </div>

            {/* Main content */}
            <main className="max-w-5xl mx-auto px-6 py-10">
                <ProductGrid />
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 mt-16">
                <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                        © 2025 Nexist Store
                    </span>
                    <span className="text-xs text-gray-400">
                        Built with Next.js + Redux
                    </span>
                </div>
            </footer>
        </div>
    );
}
