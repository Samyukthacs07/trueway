"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8
        }
    }, [])

    return (
        <section className="relative w-full h-[750px] flex items-center bg-secondary/90 text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent z-10" />

            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            <div className="container mx-auto px-4 md:px-6 relative z-20 pt-32 md:pt-30">
                <div className="max-w-3xl space-y-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-white/70  backdrop-blur-sm border border-primary/30 px-3 py-1 rounded-full text-black text-sm font-medium"
                    >
                        Premier Freight Brokerage in the GTA
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-tight"
                    >
                        Reliable. Transparent. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">On Time.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-200 md:text-xl max-w-xl leading-relaxed"
                    >
                        Trueway Freight connects you with a trusted network of carriers for seamless FTL, LTL, and expedited shipping solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 pt-0 pb-20"
                    >
                        <Button size="lg" className="text-base h-14 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow" asChild>
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-base h-14 px-8 border-white/30 text-white hover:bg-white hover:text-secondary hover:border-white backdrop-blur-sm" asChild>
                            <Link href="/contact">Talk to a Specialist <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
