"use client";

import { Check, Info } from "lucide-react";

const budgetTiers = [
  {
    name: "Budget Explorer",
    range: "Rp 500k – 1.5jt",
    perDay: "per person / day",
    color: "emerald",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    icon: "🎒",
    features: [
      "Guesthouses & hostels",
      "Local warung dining",
      "Public transport",
      "Free & low-cost activities",
      "Basic snorkeling gear",
    ],
    destinations: ["Yogyakarta", "Bromo", "Malang"],
  },
  {
    name: "Comfort Traveler",
    range: "Rp 1.5jt – 4jt",
    perDay: "per person / day",
    color: "primary",
    bg: "from-teal-600 to-cyan-700",
    border: "border-transparent",
    badge: "bg-white/20 text-white",
    btn: "bg-white text-teal-700 hover:bg-white/90",
    icon: "✈️",
    popular: true,
    features: [
      "Boutique hotels & villas",
      "Mix of local & restaurants",
      "Private transfers",
      "Guided tours included",
      "Diving & activities",
    ],
    destinations: ["Bali", "Lombok", "Labuan Bajo"],
  },
  {
    name: "Luxury Escape",
    range: "Rp 4jt – 12jt+",
    perDay: "per person / day",
    color: "amber",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    btn: "bg-amber-500 hover:bg-amber-600",
    icon: "👑",
    features: [
      "5-star resorts & overwater villas",
      "Fine dining experiences",
      "Private yacht & helicopter",
      "Personal butler service",
      "Exclusive dive charters",
    ],
    destinations: ["Raja Ampat", "Komodo", "Nusa Penida"],
  },
];

export default function PricingGuide() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            Budget Planning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Travel Budget Guide
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estimated daily costs to help you plan your Indonesian adventure. Prices vary by season and availability.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {budgetTiers.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isPopular
                    ? `bg-linear-to-br ${tier.bg} text-white shadow-lg shadow-teal-200`
                    : `bg-linear-to-br ${tier.bg} ${tier.border}`
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 text-center py-1.5 bg-white/20 text-white text-xs font-bold uppercase tracking-widest">
                    ★ Most Popular
                  </div>
                )}

                <div className={`p-6 ${isPopular ? "pt-10" : "pt-6"}`}>
                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{tier.icon}</span>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tier.badge}`}>
                        {tier.name}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <p className={`text-2xl font-bold leading-tight ${isPopular ? "text-white" : "text-foreground"}`}>
                      {tier.range}
                    </p>
                    <p className={`text-xs mt-0.5 ${isPopular ? "text-white/70" : "text-muted-foreground"}`}>
                      {tier.perDay}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isPopular ? "text-white/80" : "text-primary"}`} />
                        <span className={`text-sm ${isPopular ? "text-white/90" : "text-muted-foreground"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Recommended Destinations */}
                  <div className={`rounded-xl p-3 mb-5 ${isPopular ? "bg-white/10" : "bg-white/60"}`}>
                    <p className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${isPopular ? "text-white/70" : "text-muted-foreground"}`}>
                      Great For
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tier.destinations.map((d) => (
                        <span
                          key={d}
                          className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                            isPopular ? "bg-white/20 text-white" : "bg-white text-foreground border border-border"
                          }`}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-black ${tier.btn}`}
                  >
                    Explore {tier.name.split(" ")[0]} Trips →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
