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

            {/* Hero Section - Cinematic Intro */}
            <section className="relative h-[70vh] min-h-150 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')" // Designer/Fashion abstract
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="container relative z-10 px-4 md:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4 block">The Soul of the Brand</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Story</h1>
                        <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto italic font-serif">
                            "Fashion is the armor to survive the reality of everyday life."
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
                        <div className="aspect-3/4 relative overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1599692996564-9f70d5a76c6d?q=80&w=2074&auto=format&fit=crop"
                                alt="Luxury Fashion Design Process"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-white p-4 shadow-xl hidden lg:block rounded-lg transform translate-y-4">
                            <img
                                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                                alt="Fabric Detail"
                                className="object-cover w-full h-full"
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
                                    src="https://images.unsplash.com/photo-1623190772740-4b2a8f880650?q=80&w=1974&auto=format&fit=crop"
                                    alt="African Couture"
                                    className="rounded-lg object-cover h-64 w-full"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1546015720-b8b30df5af97?q=80&w=1974&auto=format&fit=crop"
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
