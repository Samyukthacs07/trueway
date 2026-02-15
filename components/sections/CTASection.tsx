import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-foreground/5 skew-x-12 transform origin-bottom-left" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 tracking-tight">Ready to Move Your Freight?</h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Contact Trueway Freight today for a competitive quote and detailed logistics plan tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="/quote">Get a Free Quote</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 text-white" asChild>
                        <Link href="/contact">Contact Our Team</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
