import ProductGrid from "@/components/ProductGrid";

export default function Home() {
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
