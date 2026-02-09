"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-150 w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-primary/10 z-10" />
                        {/* Placeholder for Designer/Brand Image */}
                        <img
                            src="https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=1887&auto=format&fit=crop"
                            alt="Luxury Fashion Design Process"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-6 leading-tight">
                                We Don&apos;t Just Make Clothes, <br />
                                <span className="text-primary/90 italic font-serif">We Craft Identities.</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            Spoken Word Designs is a premium couture boutique rooted in the art of storytelling through fabric.
                            Founded on the belief that what you wear is a dialogue with the world, we specialize in creating bespoke
                            pieces that speak volumes before you even say a word.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            From the precise cut of a luxury suit to the flowing elegance of a matric dance gown,
                            our designs blend modern aesthetics with the rich heritage of African couture.
                            Every stitch is a promise of quality, every garment a masterpiece.
                        </p>

                        <div className="pt-4">
                            <div className="grid grid-cols-2 gap-8 mb-8 border-l-2 border-accent/30 pl-6">
                                <div>
                                    <h4 className="text-3xl font-heading font-bold text-primary">100+</h4>
                                    <p className="text-sm text-muted-foreground">Bespoke Creations</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-heading font-bold text-primary">100%</h4>
                                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                                </div>
                            </div>

                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                                <Link href="#contact">Book Your Consultation</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
