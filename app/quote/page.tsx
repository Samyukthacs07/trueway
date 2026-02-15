"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
}

export default function QuotePage() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true)
        }, 1000)
    }

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold font-heading mb-4 text-secondary">Quote Request Received!</h1>
                <p className="text-lg text-muted-foreground max-w-md mb-8">
                    Thank you for reaching out. One of our freight specialists will review your details and contact you within 2 business hours.
                </p>
                <Button onClick={() => setSubmitted(false)}>Submit Another Quote</Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <section className="relative min-h-[600px] flex items-center bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80" />
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("/quote_pattern.png")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "600px",
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10 pt-22">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                            Request a Quote
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                            Get a Freight <span className="text-accent">Quote</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            Complete the form below to receive a competitive shipping rate. Fast response guaranteed.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8 bg-white p-8 rounded-xl shadow-sm border border-border"
                    >

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold border-b pb-2">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                    <Input id="name" required placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                                    <Input id="company" required placeholder="Acme Logistics" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                    <Input id="email" type="email" required placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                    <Input id="phone" type="tel" required placeholder="(416) 555-0123" />
                                </div>
                            </div>
                        </div>

                        {/* Shipment Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold border-b pb-2">Shipment Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="pickup" className="text-sm font-medium">Pickup City/Zip</label>
                                    <Input id="pickup" required placeholder="Toronto, ON" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="dropoff" className="text-sm font-medium">Drop-off City/Zip</label>
                                    <Input id="dropoff" required placeholder="Chicago, IL" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="type" className="text-sm font-medium">Freight Type</label>
                                    <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" id="type" required>
                                        <option value="">Select Type</option>
                                        <option value="FTL">Full Truckload (FTL)</option>
                                        <option value="LTL">Less-Than-Truckload (LTL)</option>
                                        <option value="Expedited">Expedited</option>
                                        <option value="Intermodal">Intermodal</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium">Shipment Date</label>
                                    <Input id="date" type="date" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="details" className="text-sm font-medium">Additional Details (Weight, Dimensions, Instructions)</label>
                                <textarea
                                    className="flex min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    id="details"
                                    placeholder="E.g., 5 pallets, 2000 lbs total, require liftgate at delivery."
                                />
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full text-lg">Submit Quote Request</Button>

                    </motion.form>
                </div>
            </section>
        </div>
    )
}
