"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, TrendingUp, Users, Truck, MapPin, Shield, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
    { value: "500+", label: "Trusted Carriers", icon: Truck },
    { value: "10K+", label: "Shipments Delivered", icon: TrendingUp },
    { value: "98%", label: "On-Time Rate", icon: Clock },
    { value: "24/7", label: "Support Available", icon: Shield },
]

const milestones = [
    { year: "Founded", title: "Built on Trust", description: "Trueway Freight was established with a vision to bring transparency and reliability to freight brokerage." },
    { year: "Growth", title: "Expanding Horizons", description: "Grew our carrier network to 500+ vetted partners across Canada and the USA." },
    { year: "Innovation", title: "Tech-Driven Logistics", description: "Integrated real-time tracking and digital quoting to streamline every shipment." },
    { year: "Today", title: "Industry Leaders", description: "Serving businesses across North America with unmatched service and competitive rates." },
]

const values = [
    { icon: Shield, title: "Integrity", description: "We operate with honesty and transparency in every interaction." },
    { icon: Users, title: "Partnership", description: "Your success is our success. We treat every client like family." },
    { icon: Award, title: "Excellence", description: "We never settle. Every shipment is handled with precision and care." },
    { icon: Clock, title: "Reliability", description: "Consistent, on-time delivery you can count on, every single time." },
]

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
}

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section with Gradient Overlay */}
            <section className="relative min-h-[500px] flex items-center bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                {/* Decorative accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                            About Trueway Freight
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                            Moving Freight the <span className="text-accent">Right Way</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            We connect shippers with trusted carriers across North America. Built on reliability, powered by transparency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="relative -mt-12 z-20 pb-8">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                        <stat.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp} className="space-y-6">
                            <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Mission</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary leading-tight">
                                Simplifying Logistics, <br />Driving Your Growth
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Trueway Freight, our mission is simple: to streamline the logistics process for businesses of all sizes. We act as your strategic partner, leveraging our vast network of vetted carriers to ensure your freight moves efficiently, safely, and cost-effectively.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe in transparency. In an industry often clouded by hidden fees and uncertain timelines, we stand out by providing clear communication and honest pricing from quote to delivery.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    "Extensive Carrier Network",
                                    "24/7 Shipment Tracking",
                                    "Dedicated Account Management",
                                    "Cross-Border Expertise"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-lg"
                                    >
                                        <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                                        <span className="font-medium text-secondary text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                                    <Link href="/contact">Contact Our Team</Link>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Image with accent border */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-3xl blur-xl" />
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                            </div>
                            {/* Floating accent card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 border border-border"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-secondary">GTA & Beyond</div>
                                        <div className="text-sm text-muted-foreground">Serving North America</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Journey/Timeline Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mt-3 mb-4">
                            From Vision to Industry Leader
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Every milestone brings us closer to our goal of redefining freight brokerage.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="inline-block bg-accent/10 text-accent font-bold text-sm px-3 py-1 rounded-full mb-4">
                                    {milestone.year}
                                </span>
                                <h3 className="text-xl font-bold font-heading text-secondary mb-3">{milestone.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{milestone.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">What Drives Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mt-3 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            These principles guide every decision we make and every shipment we handle.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-8 rounded-2xl border border-transparent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                    <value.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3 text-secondary">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Partner with Trueway?</h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Join hundreds of businesses who trust us to move their freight safely, on time, and at competitive rates.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white" asChild>
                                <Link href="/quote">Get a Free Quote</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 text-white" asChild>
                                <Link href="/contact">Talk to Our Team</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
