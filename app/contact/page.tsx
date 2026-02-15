"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
}

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col">
            <section className="relative min-h-[600px] flex items-center bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80" />
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("/contact_pattern.png")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "600px",
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                            Contact <span className="text-accent">Us</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            We are here to help with your logistics needs. Reach out to us directly or fill out the form.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <motion.div {...fadeInUp} className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading text-secondary mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground mb-8">
                                    Our team is available to assist you with tracking, quotes, and general inquiries.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, title: "Head Office", text: <>123 Logistics Way, Suite 100<br />Mississauga, ON L5T 2E7</> },
                                    { icon: Phone, title: "Phone", text: <>Toll Free: 1-800-555-0123<br />Local: 416-555-0123</> },
                                    { icon: Mail, title: "Email", text: <>Quotes: quotes@truewayfreight.com<br />Support: support@truewayfreight.com</> },
                                    { icon: Clock, title: "Hours of Operation", text: <>Monday - Friday: 8:00 AM - 6:00 PM EST<br />Saturday: 9:00 AM - 1:00 PM EST<br />24/7 Dispatch Support</> },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-secondary">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-border"
                        >
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Message Sent</h3>
                                    <p className="text-muted-foreground">We will get back to you shortly.</p>
                                    <Button className="mt-6" onClick={() => setSubmitted(false)}>Send Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-xl font-bold font-heading text-secondary mb-4">Send us a Message</h3>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" required placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" required placeholder="your.email@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                        <Input id="subject" required placeholder="Inquiry about..." />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <textarea
                                            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                            id="message"
                                            required
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">Send Message</Button>
                                </form>
                            )}
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}
