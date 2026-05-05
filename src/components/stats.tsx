import { Globe, Users, MapPin, Star } from "lucide-react";

const stats = [
  { icon: MapPin, value: "190+", label: "Destinations", color: "text-teal-600 bg-teal-50" },
  { icon: Users, value: "2.4M+", label: "Happy Travelers", color: "text-blue-600 bg-blue-50" },
  { icon: Star, value: "52K+", label: "Verified Reviews", color: "text-amber-600 bg-amber-50" },
  { icon: Globe, value: "34", label: "Provinces Covered", color: "text-purple-600 bg-purple-50" },
];

const trustBadges = [
  "Tripadvisor Partner",
  "Google Certified",
  "ASITA Member",
  "Kemenpar Verified",
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="text-center">
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold mb-1 text-background">{value}</p>
              <p className="text-sm text-background/60">{label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-background/40 mb-5">
            Trusted by leading travel platforms
          </p>
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="px-4 py-2 rounded-lg border border-background/10 bg-background/5 text-background/60 text-xs font-medium"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
