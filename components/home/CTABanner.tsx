import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { RevealWrapper } from "@/components/ui/RevealWrapper";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <RevealWrapper>
          <div className="cta-banner-bg rounded-3xl lg:rounded-4xl px-8 py-14 lg:px-16 lg:py-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-widest mb-5">
                  Ready to Get Started?
                </div>
                <h2 className="font-display font-extrabold text-display-sm text-white text-balance leading-tight mb-4">
                  Let&rsquo;s Build Your Enterprise Infrastructure
                </h2>
                <p className="text-white/65 text-lg leading-relaxed">
                  Get a custom IT proposal from our certified engineers — within 24 hours, no commitment required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/contact#quote" className="btn-accent btn btn-lg">
                  Get Free Quote <ArrowRight size={18} className="btn-arrow" />
                </Link>
                <Link href="/contact" className="btn-outline-white btn btn-lg">
                  <Phone size={16} /> Talk to Expert
                </Link>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
