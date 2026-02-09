import Link from "next/link";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-heading mb-4 text-accent">Spoken Word Designs</h2>
                        <p className="text-primary-foreground/70 max-w-sm">
                            Premium couture boutique specializing in luxury suits, dresses, and traditional African wear.
                            Elevating every occasion with bespoke elegance.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-heading mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
                            <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
                            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-heading mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent" />
                                <a href="mailto:spokenworddesigns@outlook.com" className="hover:text-accent transition-colors">
                                    spokenworddesigns@outlook.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent" />
                                <a href="https://wa.me/27739023416" className="hover:text-accent transition-colors">
                                    +27 73 902 3416
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent/20 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Spoken Word Designs. All rights reserved.</p>
                    <p>Designed with Luxury & Elegance.</p>
                </div>
            </div>
        </footer>
    );
}
