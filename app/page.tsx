"use client";
import Loading from "@/components/Loading";
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
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-10">
                    <p className="text-xs font-medium text-indigo-600 uppercase tracking-widest mb-2">
                        New arrivals
                    </p>
                    <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
                        Our Products
                    </h1>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-6 py-10">
                <ProductGrid />
            </main>
        </div>
    );
}
