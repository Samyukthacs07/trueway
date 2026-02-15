import Link from "next/link"
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground border-t border-white/10">
            <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/90 p-2 rounded-lg backdrop-blur-sm shadow-lg shadow-black/20">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-heading text-xl font-bold tracking-tight text-white">Trueway Freight</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Your reliable partner for freight brokerage services across the Greater Toronto Area and beyond. Transparent, on-time, and professional.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-white text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['Home', 'About Us', 'Services', 'Request a Quote', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-semibold text-white text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            {['Full Truckload (FTL)', 'Less-Than-Truckload (LTL)', 'Expedited Freight', 'Cross-Border Shipping', 'Carrier Sourcing'].map((service) => (
                                <li key={service} className="hover:text-gray-200 transition-colors cursor-default">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold text-white text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                                </div>
                                <span className="leading-relaxed">123 Logistics Way, Suite 100<br />Mississauga, ON L5T 2E7</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <Phone className="h-5 w-5 text-primary shrink-0" />
                                </div>
                                <a href="tel:+18005550123" className="hover:text-white transition-colors">1-800-555-0123</a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="h-5 w-5 text-primary shrink-0" />
                                </div>
                                <a href="mailto:quotes@truewayfreight.com" className="hover:text-white transition-colors">quotes@truewayfreight.com</a>
                            </li>
                        </ul>

                        {/* Socials */}
                        <div className="flex items-center gap-4 mt-8">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="bg-white/5 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110 border border-white/10 group">
                                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Trueway Freight. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
