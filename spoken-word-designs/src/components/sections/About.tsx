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
                        <Image
                            src="/images/useful/african wedding.jpeg"
                            alt="Luxury Fashion Design Process"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-[50%_25%] hover:scale-105 transition-transform duration-700"
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
                            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold">The Atelier Narrative</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-8 leading-[1.1] tracking-tighter">
                                Where Couture <br />
                                <span className="text-primary/90 italic font-serif">Meets Identity.</span>
                            </h2>
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed font-light">
                            Spoken Word Designs is a premier Durban-based luxury fashion house dedicated to the art of bespoke sartorial storytelling. 
                            Founded on the principle that clothing is a powerful form of dialogue, we specialize in high-concept couture—from 
                            breathtaking bridal masterpieces to red-carpet precision tailoring.
                        </p>

                        <p className="text-lg text-muted-foreground/80 leading-relaxed font-light italic border-l-2 border-accent/30 pl-6">
                            "Our journey began with a singular vision: to turn a deep-seated passion for structural excellence into a legacy of unique, 
                            culturally-rich fashion solutions that speak volumes before a single word is uttered."
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-4">
                            <div>
                                <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Our Mission</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">To deliver peerless craftsmanship and custom-tailored luxury that empowers our clients to command every room they enter.</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Our Vision</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">To be the preeminent luxury fashion brand of South Africa, recognized globally for innovation and sartorial perfection.</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-14 text-base font-bold transition-all hover:scale-105" asChild>
                                <Link href="#contact">Consult with the Designer</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
