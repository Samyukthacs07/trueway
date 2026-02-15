"use client"

import {
    Truck,
    Package,
    Clock,
    Globe,
    Map,
    Ship,
    ArrowRight,
    CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        icon: Truck,
        title: "Full Truckload (FTL)",
        description: "For large shipments that require a dedicated truck. We match your freight with the right equipment—dry vans, reefers, flatbeds—ensuring direct, secure transport.",
        features: ["Dedicated capacity", "Direct routes", "All equipment types", "GPS tracking"],
        color: "from-primary to-primary/80"
    },
    {
        icon: Package,
        title: "Less-Than-Truckload (LTL)",
        description: "Ideal for smaller shipments. We consolidate your cargo with others to optimize costs while maintaining reliable transit times.",
        features: ["Cost-effective", "Flexible scheduling", "Consolidated shipping", "Terminal network"],
        color: "from-accent to-accent/80"
    },
    {
        icon: Clock,
        title: "Expedited Freight",
        description: "Time-critical shipping solutions. We utilize team drivers and direct routes to get your urgent freight to its destination faster.",
        features: ["Team drivers", "24/7 availability", "Priority handling", "Real-time updates"],
        color: "from-primary to-primary/80"
    },
    {
        icon: Globe,
        title: "Cross-Border Shipping",
        description: "Seamless shipping between Canada and the USA. We handle the complexities of customs documentation and coordination.",
        features: ["Customs clearance", "Bonded carriers", "Documentation", "Duty management"],
        color: "from-accent to-accent/80"
    },
    {
        icon: Map,
        title: "Local & Regional GTA",
        description: "Specialized local distribution within the Greater Toronto Area. Fast, reliable pickup and delivery for your local supply chain.",
        features: ["Same-day delivery", "Route optimization", "Dedicated fleet", "White glove service"],
        color: "from-primary to-primary/80"
    },
    {
        icon: Ship,
        title: "Drayage & Intermodal",
        description: "Connecting rail and ocean ports to your warehouse. Efficient container transport solutions to complete your logistics chain.",
        features: ["Port connections", "Rail integration", "Container tracking", "Multi-modal"],
        color: "from-accent to-accent/80"
    }
]

const processSteps = [
    { step: "01", title: "Request a Quote", description: "Fill out our simple form or call us with your freight details." },
    { step: "02", title: "Get Matched", description: "We source the best carrier from our vetted network for your shipment." },
    { step: "03", title: "Ship with Confidence", description: "Track your freight in real-time with 24/7 support from our team." },
    { step: "04", title: "Delivered On Time", description: "Your freight arrives safely and on schedule. Every time." },
]

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
}

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[450px] flex items-center bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary/80" />
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                            Freight Solutions That <span className="text-accent">Deliver</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            From full truckloads to cross-border logistics, we provide comprehensive shipping solutions tailored to your unique needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mt-3 mb-4">
                            End-to-End Logistics Solutions
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Every service backed by our network of 500+ vetted carriers and dedicated logistics experts.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                            >
                                {/* Top accent gradient bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500`} />

                                <div className="p-8">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading mb-3 text-secondary">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                                        {service.description}
                                    </p>

                                    {/* Feature list */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="/quote"
                                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                                    >
                                        Get a Quote
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-accent font-semibold uppercase tracking-widest text-sm">How It Works</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mt-3 mb-4">
                            Simple. Fast. Reliable.
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Getting your freight moving with Trueway is as easy as 1-2-3-4.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative text-center p-8 group"
                            >
                                {/* Connector line */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
                                )}
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-heading font-bold text-xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold font-heading text-secondary mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Banner */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div {...fadeInUp} className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                                Why Businesses <span className="text-accent">Choose Trueway</span>
                            </h2>
                            <p className="text-gray-300">
                                Competitive rates, reliable carriers, and a team that genuinely cares about your shipment.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-6">
                            {[
                                { value: "500+", label: "Carriers" },
                                { value: "98%", label: "On-Time" },
                                { value: "24/7", label: "Support" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="text-center px-6"
                                >
                                    <div className="text-3xl font-bold font-heading text-accent">{stat.value}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-secondary via-primary/90 to-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-accent/60 to-transparent" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Need a Custom Logistics Solution?</h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Every business is unique. Talk to our freight specialists to craft a plan that fits your budget, timeline, and freight requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white" asChild>
                                <Link href="/quote">Request a Quote</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 text-white" asChild>
                                <Link href="/contact">Contact Our Team</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
