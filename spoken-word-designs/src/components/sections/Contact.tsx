"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-muted/20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-accent uppercase tracking-[0.2em] text-sm font-medium">Get In Touch</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6 leading-tight">Let&apos;s Design Your Moment</h2>
                        <p className="text-muted-foreground text-lg mb-8 md:mb-12 font-light">
                            Ready to start your bespoke journey? Contact us to schedule a consultation.
                            We look forward to bringing your vision to life.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/5 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg">Email Us</h4>
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
                                    <h4 className="font-heading font-bold text-lg">Call / WhatsApp</h4>
                                    <a href="https://wa.me/27739023416" className="text-muted-foreground hover:text-accent transition-colors">
                                        +27 73 902 3416
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/5 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg">Location</h4>
                                    <p className="text-muted-foreground">
                                        Available for consultations in Gauteng & Surrounds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-background p-8 md:p-10 rounded-2xl shadow-lg border border-border/50"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="Your Name" required className="bg-muted/10" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                    <Input id="phone" placeholder="+27 ..." required type="tel" className="bg-muted/10" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" placeholder="example@email.com" type="email" required className="bg-muted/10" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="event" className="text-sm font-medium">Event Type</label>
                                <select
                                    id="event"
                                    className="w-full h-11 rounded-md border border-input bg-muted/10 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    <option value="">Select Event Type</option>
                                    <option value="matric">Matric Dance</option>
                                    <option value="wedding">Wedding / Bridal</option>
                                    <option value="suit">Bespoke Suit</option>
                                    <option value="traditional">Traditional Wear</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your vision..."
                                    className="min-h-30 bg-muted/10"
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                                Send Enquiry <Send className="w-4 h-4 ml-1" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
