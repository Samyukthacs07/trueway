import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative w-full h-[600px] flex items-center bg-secondary/90 text-white overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10" />

            {/* Background Image (Placeholder) */}
            {/* Replace with actual image in production */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-2xl space-y-6">
                    <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-1 rounded-full text-primary-foreground text-sm font-medium">
                        Premier Freight Brokerage in the GTA
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-tight">
                        Reliable. Transparent. <br className="hidden md:block" />
                        <span className="text-primary">On Time.</span>
                    </h1>
                    <p className="text-lg text-gray-200 md:text-xl max-w-lg leading-relaxed">
                        Trueway Freight connects you with a trusted network of carriers for seamless FTL, LTL, and expedited shipping solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="text-base h-12 px-8" asChild>
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-base h-12 px-8 border-white text-white hover:bg-white hover:text-secondary" asChild>
                            <Link href="/contact">Talk to a Specialist <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
