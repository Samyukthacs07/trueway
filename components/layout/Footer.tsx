import Link from "next/link"
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-1.5 rounded-md">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-heading text-xl font-bold tracking-tight">Trueway Freight</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Your reliable partner for freight brokerage services across the Greater Toronto Area and beyond. Transparent, on-time, and professional.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/quote" className="hover:text-primary transition-colors">Request a Quote</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Full Truckload (FTL)</li>
                            <li>Less-Than-Truckload (LTL)</li>
                            <li>Expedited Freight</li>
                            <li>Cross-Border Shipping</li>
                            <li>Carrier Sourcing</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Logistics Way, Suite 100<br />Mississauga, ON L5T 2E7</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+18005550123" className="hover:text-white transition-colors">1-800-555-0123</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:quotes@truewayfreight.com" className="hover:text-white transition-colors">quotes@truewayfreight.com</a>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="flex items-center gap-4 mt-6">
                            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"><Facebook className="h-4 w-4" /></a>
                            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"><Twitter className="h-4 w-4" /></a>
                            <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"><Linkedin className="h-4 w-4" /></a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center bg-secondary gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Trueway Freight. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
