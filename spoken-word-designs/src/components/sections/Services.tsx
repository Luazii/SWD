"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Gem } from "lucide-react";

const services = [
    {
        title: "Luxury Suits",
        description: "Impeccably tailored suits for weddings, corporate events, and red carpet moments. Experience the perfect fit.",
        icon: Scissors,
        image: "/images/useful/suits1.jpg"
    },
    {
        title: "Bespoke Dresses",
        description: "From Matric Dance ballgowns to evening couture. We turn your dream dress into reality with exquisite fabrics.",
        icon: Sparkles,
        image: "/images/useful/matricdance 3.jpg"
    },
    {
        title: "African Couture",
        description: "Modern interpretations of traditional wear. Umbhaco, Shweshwe, and contemporary African luxury.",
        icon: Gem,
        image: "/images/useful/african luxury.jpg"
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6">Designed For The Occasion</h2>
                    <p className="text-muted-foreground font-light">
                        Whether it&apos;s your wedding day or a gala dinner, we provide a full spectrum of luxury fashion services tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden group flex flex-col bg-card">
                                <div className="aspect-4/3 md:aspect-3/2 overflow-hidden relative flex flex-col justify-center">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base font-light">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 text-accent hover:text-accent/80 group-hover:translate-x-1 transition-transform" asChild>
                                        <Link href="#contact">Enquire Now &rarr;</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
