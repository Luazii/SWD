"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";

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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];

    const menuVariants: Variants = {
        closed: {
            clipPath: "circle(0% at 92% 5%)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
        open: {
            clipPath: "circle(150% at 92% 5%)",
            transition: {
                type: "spring",
                stiffness: 100,
                restDelta: 2,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants: Variants = {
        closed: { opacity: 0, y: 30, filter: "blur(10px)" },
        open: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        },
    };

    return (
        <header
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out mx-auto",
                isScrolled
                    ? "top-4 w-[calc(100%-2rem)] max-w-6xl bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-3 rounded-full border border-border/40"
                    : "top-0 w-full bg-transparent py-8 text-white"
            )}
        >
            <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tighter z-[60] relative group">
                    <span className={cn(
                        "transition-colors duration-300",
                        (isScrolled || isMobileMenuOpen) ? "text-primary" : "text-white"
                    )}>
                        Spoken Word <span className="text-accent">Designs</span>
                    </span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[13px] font-semibold uppercase tracking-widest hover:text-accent transition-all duration-300 relative group",
                                isScrolled ? "text-primary/80" : "text-white/90"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Button
                        variant={isScrolled ? "default" : "outline"}
                        className={cn(
                            "ml-4 rounded-full px-8 font-bold tracking-tight transition-all duration-500 hover:scale-105 active:scale-95",
                            !isScrolled && "bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white hover:text-primary"
                        )}
                        asChild
                    >
                        <Link href="#contact">Book Consultation</Link>
                    </Button>
                </nav>

                {/* Mobile Actions */}
                <div className="flex items-center gap-4 md:hidden z-[60]">
                    <button
                        className={cn(
                            "relative p-3 rounded-full transition-all duration-300",
                            isMobileMenuOpen ? "bg-primary text-white" : (isScrolled ? "bg-primary/10 text-primary" : "bg-white/10 text-white")
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isMobileMenuOpen ? "close" : "menu"}
                                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[55] flex flex-col items-center justify-center"
                        >
                            {/* Decorative Background Elements */}
                            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

                            <nav className="flex flex-col items-center gap-6 w-full max-w-sm px-10">
                                {navLinks.map((link, idx) => (
                                    <motion.div 
                                        key={link.name} 
                                        variants={linkVariants} 
                                        className="w-full"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="group flex items-baseline justify-center gap-4 text-center"
                                        >
                                            <span className="text-5xl font-bold font-heading tracking-tighter text-primary group-hover:text-accent transition-all duration-300 group-hover:italic group-hover:tracking-normal">
                                                {link.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                <motion.div variants={linkVariants} className="w-12 h-0.5 bg-accent/30 my-8" />

                                <motion.div variants={linkVariants} className="w-full px-4">
                                    <Button 
                                        size="lg" 
                                        className="w-full rounded-full h-16 text-lg font-bold shadow-2xl shadow-primary/20" 
                                        asChild 
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Link href="#contact">Book Consultation</Link>
                                    </Button>
                                </motion.div>
                            </nav>

                            {/* Mobile Menu Footer */}
                            <motion.div 
                                variants={linkVariants}
                                className="absolute bottom-12 flex flex-col items-center gap-4"
                            >
                                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">
                                    Spoken Word Designs © 2026
                                </p>
                                <div className="flex gap-6">
                                    {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                                        <span key={social} className="text-[10px] uppercase tracking-widest text-primary/40 hover:text-accent cursor-pointer transition-colors">
                                            {social}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

