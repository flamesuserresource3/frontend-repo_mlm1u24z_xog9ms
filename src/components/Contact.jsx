import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // For this static site example, we'll just simulate a send and show success.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">Request a private audience</h2>
        <p className="mt-3 text-white/70">All enquiries are received directly. Please be concise. A member of the inner circle will reply.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <input name="name" required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" />
          <input name="contact" required placeholder="Secure contact (email/Signal)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" />
          <textarea name="message" required rows={5} placeholder="What are you navigating?" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-white/20" />

          <button type="submit" disabled={status==='loading'} className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition disabled:opacity-60">
            <Send className="h-4 w-4" />
            {status === 'loading' ? 'Sending…' : status === 'success' ? 'Received — we will reach out' : 'Send securely'}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-sm">An error occurred. Please try again later.</p>
          )}
        </form>

        <p className="mt-6 text-white/60 text-sm">By invitation and referral only. Europe, Middle East, North America. IRL & encrypted online sessions.</p>
      </div>
    </section>
  );
};

export default Contact;
