"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
    {
        category: "African Couture",
        image: "/images/useful/african luxury.jpg",
        title: "African Luxury",
        year: "2025"
    },
    {
        category: "Wedding Guest",
        image: "/images/useful/luxury dress.jpg",
        title: "Golden Gala",
        year: "2023"
    },
    {
        category: "Matric Dance",
        image: "/images/useful/matric dance1.jpg",
        title: "Emerald Elegance",
        year: "2024"
    },
    {
        category: "Bespoke Suit",
        image: "/images/useful/suits2.jpg",
        title: "The Classic Navy",
        year: "2024"
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

                <div className="grid grid-cols-2 gap-4 md:gap-8">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={index % 2 === 1 ? "md:mt-12" : ""}
                        >
                            <div className="group cursor-pointer relative overflow-hidden rounded-xl bg-muted">
                                <div className="relative aspect-4/5 md:aspect-auto md:h-[65vh] max-h-175 overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 pointer-events-none" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.category === "Matric Dance" ? "object-[50%_25%]" : item.category === "Wedding Guest" ? "object-[50%_20%]" : item.category === "Bespoke Suit" ? "object-[50%_50%]" : ""}`}
                                    />

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
