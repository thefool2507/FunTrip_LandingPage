"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-slate-900/90" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Join 50,000+ Travel Enthusiasts
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Get Exclusive Travel Deals &<br />Hidden Gem Alerts
        </h2>
        <p className="text-white/70 mb-8 text-lg">
          Weekly curated destination guides, seasonal discounts, and insider tips from our community of travelers.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 text-sm outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-teal-700 font-semibold text-sm hover:bg-white/90 transition-all shadow-lg active:scale-95"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 rounded-xl px-6 py-4 max-w-md mx-auto">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <p className="text-white font-medium text-sm">
              You're in! Check your inbox for a welcome gift 🎁
            </p>
          </div>
        )}

        <p className="mt-4 text-white/40 text-xs">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
