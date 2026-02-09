"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen min-h-200 flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1924&auto=format&fit=crop')" // Luxury fashion vibes
                }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>

            <div className="container relative z-10 px-4 md:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium">
                        Modern African Couture
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight max-w-4xl">
                        Elegance is not just noticed, <br className="hidden md:block" />
                        <span className="italic font-serif font-light text-white/90">it is remembered.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
                        Bespoke luxury suits and dresses designed for those who command attention.
                        From matric dances to red carpet events, we craft your legacy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Button size="lg" className="text-base h-14 bg-accent hover:bg-accent/90 border-none px-8" asChild>
                            <Link href="#contact">Start Your Journey</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-base h-14 bg-transparent border-white text-white hover:bg-white hover:text-primary px-8" asChild>
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
                <div className="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
            {/* Fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
        </section>
    );
}
