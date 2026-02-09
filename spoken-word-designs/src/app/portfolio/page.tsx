"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Mock Data
const allItems = [
    { id: 1, cat: "Matric", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1924&auto=format&fit=crop", title: "Emerald Elegance" },
    { id: 2, cat: "Suits", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=2000&auto=format&fit=crop", title: "The Classic Navy" },
    { id: 3, cat: "Traditional", img: "https://images.unsplash.com/photo-1546015720-b8b30df5af97?q=80&w=1974&auto=format&fit=crop", title: "Heritage Fusion" },
    { id: 4, cat: "Dresses", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop", title: "Golden Gala" },
    { id: 5, cat: "Suits", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", title: "Business Elite" },
    { id: 6, cat: "Matric", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop", title: "Midnight Sparkle" },
    { id: 7, cat: "Traditional", img: "https://images.unsplash.com/photo-1623190772740-4b2a8f880650?q=80&w=1974&auto=format&fit=crop", title: "African Couture" },
    { id: 8, cat: "Dresses", img: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1939&auto=format&fit=crop", title: "Floral Romance" },
];

const categories = ["All", "Suits", "Dresses", "Matric", "Traditional"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? allItems
        : allItems.filter(item => item.cat === filter);

    return (
        <main className="bg-background text-foreground selection:bg-accent selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-24 pt-32 bg-background border-b border-border/40">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Portfolio</h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        A curated selection of our finest bespoke creations. Each piece is a testament to our dedication to craft and detail.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 container mx-auto px-4 md:px-8 min-h-[50vh]">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="group relative aspect-3/4 overflow-hidden rounded-xl bg-muted cursor-pointer">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white">
                                        <span className="text-accent text-sm font-medium uppercase tracking-wider mb-2">{item.cat}</span>
                                        <h3 className="text-2xl font-heading font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-muted/20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-4">Inspired by what you see?</h2>
                    <p className="text-muted-foreground mb-8">Let&apos;s create your own masterpiece.</p>
                    <Button size="lg" className="bg-primary text-white px-8" asChild>
                        <Link href="/contact">Enquire Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
