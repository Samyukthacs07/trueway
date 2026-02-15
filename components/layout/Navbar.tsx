"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-24 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/trueway_freight_logo_transparent.png"
                            alt="Trueway Freight Logo"
                            width={240}
                            height={80}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* GTA & Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="tel:1-800-555-0123" className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
                            <Phone className="h-4 w-4" />
                            <span>Need Updates? Call Us</span>
                        </Link>
                        <Button asChild>
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-foreground" />
                        ) : (
                            <Menu className="h-6 w-6 text-foreground" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-background">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <nav className="flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="pt-4 border-t space-y-3">
                            <Link href="tel:1-800-555-0123" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>Call Us</span>
                            </Link>
                            <Button className="w-full" asChild onClick={() => setIsOpen(false)}>
                                <Link href="/quote">Request a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
