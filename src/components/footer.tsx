import Link from "next/link";
import { Globe, Mail, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Destinations: ["Bali", "Raja Ampat", "Komodo", "Yogyakarta", "Lombok", "Labuan Bajo"],
  Company: ["About FunTrip", "How it Works", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-background">
                Fun<span className="text-primary">Trip</span>
              </span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-5 max-w-xs">
              Your trusted companion for discovering Indonesia's most breathtaking destinations — powered by real traveler experiences.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:hello@funtrip.id" className="text-sm text-background/60 hover:text-primary transition-colors">
                hello@funtrip.id
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center text-background/60 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-background/40 mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            © 2026 FunTrip. All rights reserved. Designed and developed by the reza.lnc.
          </p>
          <div className="flex items-center gap-1 text-xs text-background/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
