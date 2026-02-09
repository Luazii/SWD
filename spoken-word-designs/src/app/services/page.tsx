"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Scissors, Sparkles, Gem, Ruler, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
        title: "Custom Couture Designs",
        desc: "One-of-a-kind masterpieces created from scratch. We work with you to conceptualize and craft a garment that is uniquely yours.",
        features: ["Sketch Consultation", "Fabric Sourcing", "Multiple Fittings"],
        icon: Sparkles
    },
    {
        title: "Luxury Dresses & Gowns",
        desc: "Evening wear that demands attention. From red carpet galas to sophisticated cocktail events, our gowns are designed to dazzle.",
        features: ["Evening Gowns", "Cocktail Dresses", "Mother of the Bride"],
        icon: Gem
    },
    {
        title: "Premium Suits",
        desc: "Sharp, structural, and sophisticated. Our bespoke suits are tailored to your exact measurements for a flawless fit.",
        features: ["Bespoke Tailoring", "Imported Wools", "Personalized Linings"],
        icon: Ruler
    },
    {
        title: "Matric Dance / Prom",
        desc: "Make a statement on your big night. We create show-stopping designs that ensure you are the belle of the ball.",
        features: ["Concept Design", "Showpiece Gowns", "Matching Partner Suits"],
        icon: Calendar
    },
    {
        title: "African Traditional Wear",
        desc: "Authentic cultural attire with a modern luxury twist. Celebrating heritage through contemporary fashion.",
        features: ["Modern Umbhaco", "Shweshwe Couture", "Traditional Wedding Attire"],
        icon: Users
    },
    {
        title: "Alterations & Tailoring",
        desc: "Expert adjustments to your existing wardrobe. Breathe new life into your favorite pieces with our precision tailoring.",
        features: ["Perfect Fit Adjustments", "Restoration", "Resizing"],
        icon: Scissors
    }
];

export default function ServicesPage() {
    return (
        <main className="bg-background text-foreground selection:bg-accent selection:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-120 flex items-center justify-center bg-primary text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589205566085-f5b9d3119156?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Our Services</h1>
                        <p className="text-xl max-w-2xl mx-auto font-light text-white/80">
                            From concept to creation, we offer a full suite of luxury fashion services designed to elevate your style.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-all border-border/50 bg-background group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-2xl font-heading font-bold">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-6 font-light">{service.desc}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-foreground/80">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-accent group-hover:translate-x-1 transition-all" asChild>
                                        <Link href="/contact">Enquire Now &rarr;</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">The Journey</span>
                        <h2 className="text-4xl font-heading font-bold mt-4">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "We meet to discuss your vision, style preferences, and measurements." },
                            { step: "02", title: "Design & Sketch", desc: "Our designers create exclusive sketches and select premium fabrics." },
                            { step: "03", title: "Fittings", desc: "Multiple fittings ensure the garment is molded perfectly to your body." },
                            { step: "04", title: "Final Reveal", desc: "You collect your finished masterpiece, ready to turn heads." }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-heading font-bold text-black/5 absolute -top-8 -left-4 z-0">{item.step}</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="py-12 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-6">Let’s Create Your Signature Look</h2>
                    <Button size="lg" className="bg-accent text-white hover:bg-accent/90" asChild>
                        <Link href="/contact">Book Your Consultation</Link>
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
