import React from 'react';

const Approach = () => {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Philosophy</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            The work is minimalist and exacting. We remove noise, train perception, and align intention with action. Results are measurable in life, not slides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-medium">Discretion</h3>
            <p className="mt-2 text-white/70 text-sm">No press. No social. Direct line only. Your world remains private.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-medium">Rigor</h3>
            <p className="mt-2 text-white/70 text-sm">Classical Buddhist training applied to modern power, finance, and family systems.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-medium">Outcomes</h3>
            <p className="mt-2 text-white/70 text-sm">We aim for clarity, courage, and clean execution. Transformation without theatrics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
