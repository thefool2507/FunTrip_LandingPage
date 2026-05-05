"use client";

import { categories } from "@/data/destinations";
import { ArrowRight } from "lucide-react";

// Simple SVG icons for categories
const CategoryIcons: Record<string, React.ReactNode> = {
  Beach: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  ),
  Adventure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polygon points="12 2 22 20 2 20" />
    </svg>
  ),
  Cultural: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="3" y="10" width="18" height="11" rx="1" />
      <path d="M3 10 L12 3 L21 10" />
    </svg>
  ),
  Nature: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 22V12M12 12C12 7 17 4 17 4C17 4 17 9 12 12ZM12 12C12 7 7 4 7 4C7 4 7 9 12 12Z" />
    </svg>
  ),
  City: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="2" y="7" width="7" height="15" />
      <rect x="9" y="2" width="7" height="20" />
      <rect x="16" y="10" width="6" height="12" />
    </svg>
  ),
  Mountain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M8 22L2 22L9 10L13 16L16 12L22 22L8 22Z" />
    </svg>
  ),
};

const categoryColors: Record<string, { bg: string; icon: string; border: string }> = {
  Beach: { bg: "from-cyan-50 to-blue-50", icon: "text-cyan-600 bg-cyan-100", border: "hover:border-cyan-200" },
  Adventure: { bg: "from-orange-50 to-red-50", icon: "text-orange-600 bg-orange-100", border: "hover:border-orange-200" },
  Cultural: { bg: "from-purple-50 to-pink-50", icon: "text-purple-600 bg-purple-100", border: "hover:border-purple-200" },
  Nature: { bg: "from-emerald-50 to-teal-50", icon: "text-emerald-600 bg-emerald-100", border: "hover:border-emerald-200" },
  City: { bg: "from-slate-50 to-gray-50", icon: "text-slate-600 bg-slate-100", border: "hover:border-slate-200" },
  Mountain: { bg: "from-indigo-50 to-blue-50", icon: "text-indigo-600 bg-indigo-100", border: "hover:border-indigo-200" },
};

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
              Browse By Type
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Explore Categories
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              Find your perfect travel style — from pristine beaches to ancient temples.
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const colors = categoryColors[cat.name] || categoryColors.City;
            return (
              <button
                key={cat.name}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border border-transparent ${colors.border} transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer text-center`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors.icon} transition-transform group-hover:scale-110`}>
                  {CategoryIcons[cat.name]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{cat.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{cat.count} places</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
