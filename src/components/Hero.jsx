import React from 'react';
import { Crown, Orbit, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mx-auto mb-6 flex items-center justify-center gap-2 text-sm text-white/70">
          <Crown className="h-4 w-4" />
          <span>Private Counsel for UHNWI & Powerful Individuals</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
          Rinpoche — Strategic Clarity & Inner Sovereignty
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
          French Buddhist Rinpoche guiding elite leaders through decisive transitions, complex challenges, and deep spiritual refinement — discreet, effective, and uncompromisingly bespoke.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
            <Sparkles className="h-4 w-4" />
            Request a private audience
          </a>
          <a href="#offerings" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/5 transition">
            <Orbit className="h-4 w-4" />
            Explore the work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
