"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-secondary z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-30" />
            </div>

            {/* Abstract Background Elememts */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom-left z-0 pointer-events-none" />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
                        Ready to Move Your Freight?
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Contact Trueway Freight today for a competitive quote and detailed logistics plan tailored to your needs.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5"
                >
                    <Button size="lg" className="h-16 px-10 text-lg shadow-2xl shadow-black/20 relative overflow-hidden group" asChild>
                        <Link href="/quote">
                            <span className="relative z-10 flex items-center gap-2">
                                Get a Free Quote <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/50 backdrop-blur-sm transition-all" asChild>
                        <Link href="/contact">Contact Our Team</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
