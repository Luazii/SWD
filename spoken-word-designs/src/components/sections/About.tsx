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
                        className="relative w-full h-[50vh] lg:h-auto lg:aspect-3/4 lg:max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center transform-gpu"
                    >
                        <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none" />
                        {/* Designer/Brand Image resized to fit within layout without cropping */}
                        <img
                            src="/images/useful/african wedding.jpeg"
                            alt="Luxury Fashion Design Process"
                            className="object-cover object-[50%_25%] w-full h-full hover:scale-105 transition-transform duration-700"
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
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6 leading-tight">
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
