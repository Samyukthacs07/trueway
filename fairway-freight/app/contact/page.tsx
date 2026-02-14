"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col">
            <section className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        We are here to help with your logistics needs. Reach out to us directly or fill out the form.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading text-secondary mb-6">Get in Touch</h2>
                                <p className="text-muted-foreground mb-8">
                                    Our team is available to assist you with tracking, quotes, and general inquiries.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary">Head Office</h3>
                                        <p className="text-muted-foreground">123 Logistics Way, Suite 100<br />Mississauga, ON L5T 2E7</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary">Phone</h3>
                                        <p className="text-muted-foreground">Toll Free: 1-800-555-0123<br />Local: 416-555-0123</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary">Email</h3>
                                        <p className="text-muted-foreground">Quotes: quotes@truewayfreight.com<br />Support: support@truewayfreight.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary">Hours of Operation</h3>
                                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM EST<br />Saturday: 9:00 AM - 1:00 PM EST<br />24/7 Dispatch Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
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
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
