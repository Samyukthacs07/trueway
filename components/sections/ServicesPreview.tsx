import Link from "next/link"
import { Truck, Package, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold font-heading tracking-tight text-secondary mb-4">Comprehensive Freight Solutions</h2>
                        <p className="text-muted-foreground text-lg">
                            Whether you are shipping across town or across the border, Trueway Freight has the expertise and network to get it there.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group p-6 bg-accent/20 rounded-xl border border-transparent hover:border-primary/20 transition-all hover:bg-accent/40">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-primary group-hover:scale-110 transition-transform">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold font-heading mb-2 text-secondary">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <Link href="/services" className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center">
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
