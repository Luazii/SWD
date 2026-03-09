"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const allItems = [
    { id: 1, cat: "Matric", img: "/images/useful/matric dance1.jpg", title: "Emerald Elegance" },
    { id: 2, cat: "Matric", img: "/images/useful/matric dance 2.jpg", title: "Midnight Sparkle" },
    { id: 3, cat: "Matric", img: "/images/useful/matricdance 3.jpg", title: "Golden Hour" },
    { id: 4, cat: "Suits", img: "/images/useful/suits1.jpg", title: "The Classic Navy" },
    { id: 5, cat: "Suits", img: "/images/useful/suits2.jpg", title: "Business Elite" },
    { id: 11, cat: "Suits", img: "/images/useful/luazii graduation suit.JPG", title: "Midnight Charcoal" },
    { id: 12, cat: "Suits", img: "/images/useful/zwerh graduation suit.JPG", title: "The Graduate" },
    { id: 6, cat: "Traditional", img: "/images/useful/traditional1.jpeg", title: "Heritage Fusion" },
    { id: 7, cat: "Traditional", img: "/images/useful/african luxury.jpg", title: "African Luxury" },
    { id: 13, cat: "Traditional", img: "/images/useful/african couture.jpg", title: "Modern Heritage" },
    { id: 18, cat: "Traditional", img: "/images/useful/traditional4.jpg", title: "Cultural Roots" },
    { id: 19, cat: "Traditional", img: "/images/useful/traditional5.jpeg", title: "Woven History" },
    { id: 8, cat: "Dresses", img: "/images/useful/luxury dress.jpg", title: "Golden Gala" },
    { id: 9, cat: "Dresses", img: "/images/useful/bespoke dress.jpg", title: "Floral Romance" },
    { id: 10, cat: "Bridal", img: "/images/useful/african wedding.jpeg", title: "Ivory Dreams" },
    { id: 14, cat: "Bridal", img: "/images/useful/bridal1.jpg", title: "Elegance in White" },
    { id: 15, cat: "Bridal", img: "/images/useful/bridal2.jpg", title: "The Perfect Day" },
    { id: 16, cat: "Bridal", img: "/images/useful/bridal4.jpg", title: "Forever Yours" },
    { id: 17, cat: "Bridal", img: "/images/useful/bridal5.jpg", title: "Timeless Vows" },
];

const categories = ["All", "Suits", "Dresses", "Matric", "Traditional", "Bridal"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? allItems
        : allItems.filter(item => item.cat === filter);

    return (
        <main className="bg-background text-foreground selection:bg-accent selection:text-white">
            <Header />

            {/* Hero Section - Text-Based Cinematic Section */}
            <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-primary">
                {/* Decorative background elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-[100px] opacity-60" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/30 rounded-full blur-[120px] opacity-40" />
                </div>

                <div className="container relative z-10 px-4 md:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 block font-medium">Curated Excellence</span>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 md:mb-8 leading-tight tracking-tight">Our Portfolio</h1>
                        <p className="text-lg md:text-2xl font-light text-white/80 max-w-2xl mx-auto italic font-serif leading-relaxed">
                            A curated selection of our finest bespoke creations. <br className="hidden md:block" />
                            Each piece is a testament to our dedication to craft and detail.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-12 bg-background border-b border-border/40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
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
                <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
                                <div className="group relative aspect-4/5 md:aspect-auto md:h-[65vh] max-h-175 overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 pointer-events-none" />
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

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
