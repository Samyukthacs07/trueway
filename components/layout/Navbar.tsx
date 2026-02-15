"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed top-8 md:top-10 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.header
                className={cn(
                    "pointer-events-auto",
                    "flex items-center justify-between gap-4",
                    "w-full max-w-7xl h-20",
                    "px-8 md:px-12 py-3",
                    // White Liquid Glass Effect
                    "bg-white/70 backdrop-blur-xl backdrop-saturate-[1.8]",
                    "border border-white/60",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
                    "rounded-full transition-all duration-300",
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0 pl-2">
                    <Image
                        src="/trueway_freight_logo_transparent.png"
                        alt="Trueway Freight Logo"
                        width={280} // Increased from 200
                        height={90} // Increased from 70
                        className="h-18 md:h-28 w-auto object-contain filter drop-shadow-md" // Increased height class
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 bg-gray-100/50 rounded-full px-6 py-2 border border-gray-200/50 mx-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-all group rounded-full hover:bg-white/80"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center shrink-0 gap-4">
                    <Link href="tel:1-800-555-0123" className="hidden lg:flex items-center md:hidden xl:flex gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>1-800-555-0123</span>
                    </Link>
                    <Button asChild className="rounded-full h-12 px-8 shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white">
                        <Link href="/quote">Request Quote</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-3 text-gray-700 bg-gray-100/60 rounded-full hover:bg-gray-200/80 transition-colors border border-gray-200/50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                        className="pointer-events-auto absolute top-32 left-4 right-4 bg-secondary/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl md:hidden overflow-hidden max-w-lg mx-auto z-40"
                    >
                        <nav className="flex flex-col p-8 space-y-4">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-xl font-medium py-3 px-6 text-center text-gray-200 hover:text-white hover:bg-white/10 rounded-2xl transition-all border border-transparent hover:border-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 mt-4 border-t border-white/10 space-y-4">
                                <Link href="tel:1-800-555-0123" className="flex items-center justify-center gap-2 text-base font-medium text-gray-400 py-2">
                                    <Phone className="h-5 w-5" />
                                    <span>1-800-555-0123</span>
                                </Link>
                                <Button className="w-full h-14 rounded-2xl text-lg font-semibold shadow-xl shadow-primary/20" asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/quote">Request a Quote</Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
