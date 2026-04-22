"use client";

import Image from "next/image";
import { Download, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="section-fade max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-mono text-sm text-accent mb-4 tracking-widest uppercase">
              Economics &amp; Finance · D&apos;Amore-McKim School of Business
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Yunyu Ke
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Finance &amp; Economics graduate (May 2026) bridging quantitative
              rigor with practical financial judgment — from tax compliance to
              multi-factor equity strategies.
            </p>

            <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              3.85 GPA · Dean&apos;s List every semester. Co-op experience in
              corporate tax at{" "}
              <span className="text-foreground font-medium">
                American Tower Corporation
              </span>{" "}
              and tax services at{" "}
              <span className="text-foreground font-medium">
                Wellington Management
              </span>
              . Built factor-based statistical arbitrage portfolios ranked first
              in class and delivered a 100+ page strategy for a GenAI consulting
              firm. Seeking full-time roles in equity research, asset management,
              or investment analysis in 2026.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium
                  hover:opacity-90 transition-all duration-200 shadow-lg shadow-accent/20"
              >
                View Projects
              </a>
              <a
                href="/Resume - Yunyu Ke（Jan 14, 2026).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg border border-card-border text-sm font-medium
                  text-muted-foreground hover:text-foreground hover:border-accent/50
                  transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-card-border">
                <Image
                  src="/photo.png"
                  alt="Yunyu Ke"
                  fill
                  className="object-cover object-top"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
            text-muted-foreground/40 animate-bounce"
        >
          <span className="text-xs font-mono tracking-widest">scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
