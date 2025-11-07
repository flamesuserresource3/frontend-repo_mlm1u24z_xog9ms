import React from 'react';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Approach from './components/Approach';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-medium tracking-wide">Rinpoche</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#offerings" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Offerings />
        <Approach />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black text-white/60">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Rinpoche — All rights reserved</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-white">Private audience</a>
            <span className="opacity-30">•</span>
            <span>Discreet. By referral.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
