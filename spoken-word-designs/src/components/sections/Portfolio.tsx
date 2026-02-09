"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
    {
        category: "Matric Dance",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop",
        title: "Emerald Elegance",
        year: "2024"
    },
    {
        category: "Bespoke Suit",
        image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=2000&auto=format&fit=crop",
        title: "The Classic Navy",
        year: "2024"
    },
    {
        category: "African Couture",
        image: "https://images.unsplash.com/photo-1546015720-b8b30df5af97?q=80&w=1974&auto=format&fit=crop",
        title: "Heritage Fusion",
        year: "2025"
    },
    {
        category: "Wedding Guest",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1966&auto=format&fit=crop",
        title: "Golden Gala",
        year: "2023"
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Selected Works</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">Curated Excellence</h2>
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2" asChild>
                        <Link href="/portfolio">View Full Portfolio <ArrowRight className="w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={index % 2 === 1 ? "md:mt-12" : ""}
                        >
                            <div className="group cursor-pointer relative overflow-hidden rounded-xl">
                                <div className="relative aspect-3/4 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-accent text-sm font-medium bg-black/80 px-2 py-1 rounded inline-block mb-2 backdrop-blur-sm">
                                            {item.category}
                                        </span>
                                        <h3 className="text-2xl font-heading text-white font-bold">{item.title}</h3>
                                        <p className="text-white/80 text-sm mt-1">{item.year}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full gap-2" asChild>
                        <Link href="/portfolio">View Full Portfolio <ArrowRight className="w-4 h-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
