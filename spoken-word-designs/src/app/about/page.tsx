"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-background text-foreground selection:bg-accent selection:text-white">
            <Header />

            {/* Hero Section - Text-Based Cinematic Intro */}
            <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden bg-primary">
                {/* Decorative background elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[100px] opacity-60" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full blur-[120px] opacity-40" />
                </div>

                <div className="container relative z-10 px-4 md:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 block font-medium">The Soul of the Brand</span>
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 md:mb-8 leading-tight tracking-tight">Our Story</h1>
                        <p className="text-lg md:text-2xl font-light text-white/80 max-w-2xl mx-auto italic font-serif leading-relaxed">
                            &quot;Fashion is the armor to survive the reality of everyday life.&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Brand Story - Split Layout */}
            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="w-full h-[75vh] min-h-125 relative overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src="/images/useful/traditional5.jpeg"
                                alt="Luxury Fashion Design Process"
                                className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                    </motion.div>

                    <div className="space-y-8 lg:pl-10">
                        <div>
                            <h2 className="text-4xl font-heading font-bold mb-6">The Meaning Behind <br /><span className="text-primary/80">Spoken Word</span></h2>
                            <div className="w-20 h-1 bg-accent mb-6" />
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            Spoken Word Designs was born from a desire to communicate without speaking. We believe that what you wear is your opening statement to the world. It is a visual language, a dialogue of texture, silhouette, and fit.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed font-light">
                            Founded by [Designer Name], the brand has grown from a small studio to a premier destination for luxury bespoke wear. Our philosophy is simple: every garment must tell a story—your story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy & Craftsmanship */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Our Philosophy</span>
                        <h2 className="text-4xl font-heading font-bold mt-4 mb-6">Uncompromising Craftsmanship</h2>
                        <p className="text-muted-foreground text-lg">
                            True luxury lies in the details that others overlook. From the hand-selected fabrics to the final stitch, our process is an obsession with perfection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Bespoke Fit", desc: "Tailored precisely to your measurements, ensuring a silhouette that flatters and empowers." },
                            { title: "Premium Fabric", desc: "Sourced from the finest mills, our textiles offer superior drape, comfort, and longevity." },
                            { title: "Timeless Design", desc: "Merging classic elegance with modern trends to create pieces that transcend seasons." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-background p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow text-center"
                            >
                                <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* African Heritage Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary z-0" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay" /> {/* Pattern overlay */}

                <div className="container relative z-10 px-4 md:px-8 text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Heritage</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold">Rooted in African <br /> Luxury</h2>
                            <p className="text-white/80 text-lg leading-relaxed font-light">
                                We honor our roots by reimagining traditional African aesthetics for the modern era.
                                Whether it's the geometric precision of Shweshwe or the bold lines of Umbhaco,
                                we blend cultural heritage with contemporary couture techniques.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed font-light">
                                It is not just clothing; it is a celebration of identity, a nod to the ancestors, and a stride into the future.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/images/useful/traditional1.jpeg"
                                    alt="African Couture"
                                    className="rounded-lg object-cover h-64 w-full"
                                />
                                <img
                                    src="/images/useful/african luxury.jpg"
                                    alt="Heritage Fusion"
                                    className="rounded-lg object-cover h-64 w-full mt-12"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-heading font-bold mb-6">Ready to Tell Your Story?</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                        Book a consultation today and let us craft a garment that speaks for you.
                    </p>
                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8" asChild>
                        <Link href="/contact">Book Your Consultation <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
