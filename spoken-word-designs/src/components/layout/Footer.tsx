import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 translate-y-1/2 translate-x-1/2" />
            
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <Link href="/" className="text-3xl font-bold font-heading tracking-tighter group inline-block">
                                Spoken Word <span className="text-accent">Designs</span>
                                <div className="h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500" />
                            </Link>
                            <p className="mt-6 text-primary-foreground/60 leading-relaxed text-lg font-light max-w-md">
                                Redefining African luxury through bespoke couture. 
                                From red-carpet suits to traditional royalty, 
                                we craft excellence for the modern icon.
                            </p>
                        </div>
                        
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "#", label: "Instagram" },
                                { Icon: Facebook, href: "#", label: "Facebook" },
                                { Icon: Mail, href: "mailto:spokenworddesigns@outlook.com", label: "Email" }
                            ].map((social) => (
                                <Link 
                                    key={social.label}
                                    href={social.href} 
                                    className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="md:col-span-3">
                        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-accent/80 mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "The Atelier", href: "/" },
                                { name: "Our Story", href: "/about" },
                                { name: "The Collection", href: "/portfolio" },
                                { name: "Bespoke Services", href: "/services" },
                                { name: "Inquiries", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-primary-foreground/70 hover:text-accent transition-all duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="w-0 h-4 group-hover:w-4 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Location Section */}
                    <div className="md:col-span-4 space-y-10">
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-accent/80 mb-8">Atelier Location</h3>
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent/10 transition-colors">
                                    <MapPin className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-primary-foreground">Durban, South Africa</p>
                                    <p className="text-primary-foreground/50 font-light mt-1">Available for worldwide consultations.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-accent/80 mb-8">Concierge</h3>
                            <div className="space-y-6">
                                <a 
                                    href="mailto:spokenworddesigns@outlook.com" 
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:border-accent transition-colors">
                                        <Mail className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-primary-foreground/70 group-hover:text-white transition-colors">spokenworddesigns@outlook.com</span>
                                </a>
                                <a 
                                    href="https://wa.me/27739023416" 
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full group-hover:border-accent transition-colors">
                                        <Phone className="w-4 h-4 text-accent" />
                                    </div>
                                    <span className="text-primary-foreground/70 group-hover:text-white transition-colors">+27 73 902 3416</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                        <p className="text-xs font-medium tracking-widest text-primary-foreground/30">
                            © {new Date().getFullYear()} SPOKEN WORD DESIGNS.
                        </p>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <Link href="/privacy" className="text-xs font-medium tracking-widest text-primary-foreground/30 hover:text-accent transition-colors">
                            PRIVACY POLICY
                        </Link>
                    </div>
                    
                    <p className="text-[10px] font-bold tracking-[0.5em] text-accent/40 uppercase">
                        Crafting Legacy, Stitch by Stitch
                    </p>
                </div>
            </div>
        </footer>
    );
}

