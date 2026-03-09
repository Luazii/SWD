"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 md:py-32 bg-primary">
            {/* Elegant text-based background gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-125 h-125 bg-accent/20 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-secondary/40 rounded-full blur-[150px] opacity-40" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 mix-blend-overlay" />
            </div>

            <div className="container relative z-10 px-4 md:px-8 text-center text-primary-foreground">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 md:mb-8 leading-tight max-w-5xl tracking-tight">
                        Elegance is not noticed, <br className="hidden md:block" />
                        <span className="italic font-serif font-light text-white/80">it is remembered.</span>
                    </h1>

                    <div className="w-24 h-px bg-accent/50 mb-8" />

                    <p className="text-base md:text-xl text-white/70 max-w-2xl mb-10 md:mb-12 font-light leading-relaxed">
                        Bespoke luxury suits and elegant dresses crafted for those who command attention.
                        Every stitch is a statement.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
                        <Button size="lg" className="text-base h-14 bg-accent hover:bg-accent/90 border-none px-10 text-white rounded-full shadow-lg shadow-accent/20" asChild>
                            <Link href="#contact">Start Your Journey</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-base h-14 bg-transparent border-white/20 text-white hover:bg-white hover:text-primary px-10 rounded-full backdrop-blur-sm" asChild>
                            <Link href="#portfolio">View Portfolio</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-px h-16 bg-linear-to-b from-transparent via-accent/50 to-transparent" />
            </motion.div>

            {/* Fade into next section which is light */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
}
