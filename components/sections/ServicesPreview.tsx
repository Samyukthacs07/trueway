"use client"
import Link from "next/link"
import { Truck, Package, Clock, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const services = [
    {
        icon: Truck,
        title: "Full Truckload (FTL)",
        description: "Dedicated trucks for your large shipments across Canada and the US. Direct routes for faster delivery."
    },
    {
        icon: Package,
        title: "Less-Than-Truckload (LTL)",
        description: "Cost-effective solutions for smaller shipments. We consolidate freight to save you money without compromising speed."
    },
    {
        icon: Clock,
        title: "Expedited Freight",
        description: "When time is critical, our expedited services ensure your urgent cargo reaches its destination as fast as possible."
    },
    {
        icon: Globe,
        title: "Carrier Sourcing",
        description: "Access our vast network of pre-vetted carriers. We handle the logistics so you can focus on your business."
    }
]

export function ServicesPreview() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-secondary"
                        >
                            Comprehensive Freight Solutions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-muted-foreground text-lg"
                        >
                            Whether you are shipping across town or across the border, Trueway Freight has the expertise and network to get it there.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button variant="outline" size="lg" className="group" asChild>
                            <Link href="/services">
                                View All Services
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-accent/100 transition-all duration-300 hover:bg-accent/20 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                <service.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            <div className="mt-auto">
                                <Link href="/services" className="text-sm font-semibold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                                    Learn more <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
