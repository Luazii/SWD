"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-background text-foreground selection:bg-accent selection:text-white">
            <Header />

            {/* Hero */}
            <section className="py-24 pt-32 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Contact Us</h1>
                    <p className="text-xl font-light text-white/80 max-w-2xl mx-auto">
                        Begin your journey to bespoke luxury. We are here to answer your questions and schedule your private consultation.
                    </p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-heading font-bold mb-6">Send an Enquiry</h2>
                        <form className="space-y-6 bg-muted/20 p-8 rounded-xl border border-border/50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <Input placeholder="Your Name" required className="bg-background" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone</label>
                                    <Input placeholder="+27 ..." required type="tel" className="bg-background" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input placeholder="example@email.com" type="email" required className="bg-background" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Service Interested In</label>
                                    <select className="w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                        <option value="">Select Service</option>
                                        <option value="custom">Custom Couture</option>
                                        <option value="wedding">Wedding / Bridal</option>
                                        <option value="suit">Bespoke Suit</option>
                                        <option value="traditional">Traditional Wear</option>
                                        <option value="matric">Matric Dance</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Event Date (Optional)</label>
                                    <Input type="date" className="bg-background" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <Textarea placeholder="Tell us about your vision..." className="min-h-30 bg-background" />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>

                    {/* Info Section */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
                            <p className="text-muted-foreground mb-8 text-lg font-light">
                                Based in Gauteng, we proudly serve clients across South Africa. We operate by appointment for exclusive studio sessions and offer virtual consultations for nationwide clients.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/5 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-lg">Email</h4>
                                        <a href="mailto:spokenworddesigns@outlook.com" className="text-muted-foreground hover:text-accent transition-colors">
                                            spokenworddesigns@outlook.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/5 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-lg">Phone / WhatsApp</h4>
                                        <a href="https://wa.me/27739023416" className="text-muted-foreground hover:text-accent transition-colors">
                                            +27 73 902 3416
                                        </a>
                                        <div className="mt-2">
                                            <Button size="sm" variant="outline" className="gap-2 text-green-600 border-green-600 hover:bg-green-50" asChild>
                                                <a href="https://wa.me/27739023416" target="_blank">Chat on WhatsApp <MessageCircle className="w-4 h-4" /></a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/5 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-lg">Location</h4>
                                        <p className="text-muted-foreground">
                                            Based in Gauteng, Serving Clients Nationwide<br />
                                            (Virtual Consultations Available)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Placeholder */}
                        <div className="w-full h-64 bg-muted/20 rounded-xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.75546252932!2d27.962006326269273!3d-26.151897455806655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1707474000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
