import React from 'react';
import { Shield, Compass, Infinity, Star } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Private Counsel',
    desc: 'Discrete, high-stakes guidance for leaders navigating complexity, reputation, legacy, and decisive transitions.'
  },
  {
    icon: Compass,
    title: 'Retreats',
    desc: 'Ultra-private spiritual immersions in select locations — silence, precision practice, and strategic reset.'
  },
  {
    icon: Infinity,
    title: 'Long-Term Stewardship',
    desc: 'Ongoing companionship for sovereign life design: mind training, ethics, relationships, health, and power.'
  },
  {
    icon: Star,
    title: 'Group Intensives',
    desc: 'Small, invitation-only sessions for family offices and leadership cells — alignment, clarity, and cohesion.'
  }
];

const Offerings = () => {
  return (
    <section id="offerings" className="relative bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold">Work we can do together</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            No programs. No mass content. Only precision interventions tailored to your situation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
