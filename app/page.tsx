import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <CTASection />
    </div>
  );
}
