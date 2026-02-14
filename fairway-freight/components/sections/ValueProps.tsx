import { ShieldCheck, Clock, Layers } from "lucide-react"

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
        <section className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-heading tracking-tight text-secondary mb-4">Why Choose Trueway Freight?</h2>
                    <p className="text-muted-foreground text-lg">
                        We simplify logistics so you can focus on growing your business. Here is what sets us apart.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <value.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-3 text-secondary">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
