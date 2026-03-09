"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out mx-auto",
                isScrolled
                    ? "top-4 w-[calc(100%-2rem)] max-w-6xl bg-background/95 backdrop-blur-md shadow-lg py-3 rounded-full border border-border/50"
                    : "top-0 w-full bg-transparent py-6 text-white"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tight z-50 relative">
                    <span className={isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"}>
                        Spoken Word Designs
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:text-accent transition-colors",
                                isScrolled ? "text-primary" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "default" : "secondary"}
                        className={cn(
                            "ml-4",
                            !isScrolled && "bg-white text-primary border-transparent hover:bg-white/90"
                        )}
                        asChild
                    >
                        <Link href="#contact">Book Consultation</Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 relative p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-primary" />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-primary" : "text-white")} />
                    )}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-background pt-24 px-4 md:hidden flex flex-col items-center gap-8 shadow-xl"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-heading text-primary hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button size="lg" className="w-full max-w-xs mt-4" asChild onClick={() => setIsMobileMenuOpen(false)}>
                                <Link href="#contact">Book Consultation</Link>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
