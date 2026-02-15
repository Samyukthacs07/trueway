"use client"
import { ShieldCheck, Clock, Layers } from "lucide-react"
import { motion } from "framer-motion"

const values = [
    {
        icon: ShieldCheck,
        title: "Reliable Network",
        description: "We vet every carrier in our extensive network to ensure your freight is handled with the utmost care and professionalism."
    },
    {
        icon: Layers,
        title: "Transparent Pricing",
        description: "No hidden fees or surprise charges. We provide clear, competitive quotes upfront so you can budget with confidence."
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Time is money. Our logistics experts monitor your shipment 24/7 to ensure it arrives at its destination on schedule."
    }
]

export function ValueProps() {
    return (
        <section className="py-24 bg-gradient-to-b from-accent/70 to-accent/0 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold font-heading tracking-tight text-secondary mb-4"
                    >
                        Why Choose Trueway Freight?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        We simplify logistics so you can focus on growing your business. Here is what sets us apart.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300 text-primary shadow-inner">
                                <value.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-secondary">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
