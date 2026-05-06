"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const popularSearches = ["Bali", "Raja Ampat", "Lombok", "Komodo", "Yogyakarta"];

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("explore");

  const tabs = [
    { id: "explore", label: "Explore" },
    { id: "hotels", label: "Hotels" },
    { id: "activities", label: "Activities" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 via-slate-800/50 to-slate-900/80" />

      {/* Floating Stats */}
      <div className="absolute top-32 left-6 md:left-16 hidden md:block">
        <div
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          <p className="text-xs font-medium text-white/70 mb-0.5">Travelers Today</p>
          <p className="text-lg font-bold">12,482</p>
        </div>
      </div>
      <div
        className="absolute top-48 right-6 md:right-16 hidden md:block"
        style={{ animation: "float 4s ease-in-out infinite 1.5s" }}
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-white">
          <p className="text-xs font-medium text-white/70 mb-0.5">Top Rated</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-sm font-bold">4.9</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Discover Indonesia's Best Destinations
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Your Next{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-300 to-cyan-300">
            Adventure
          </span>
          <br />
          Starts Here
        </h1>

        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover hidden gems, read authentic reviews, and plan your perfect trip
          with curated recommendations and real traveler insights.
        </p>

        {/* Search Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-2 max-w-3xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-1 mb-3 px-1 pt-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* Destination */}
            <div className="flex-1 flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3 group focus-within:ring-2 focus-within:ring-primary/30 transition-all">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Where to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm font-medium placeholder:text-muted-foreground outline-none"
              />
            </div>

            {/* Dates */}
            <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3 sm:w-44 cursor-pointer hover:bg-muted/60 transition-all">
              <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground">Pick dates</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-3 sm:w-36 cursor-pointer hover:bg-muted/60 transition-all">
              <Users className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground">2 guests</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
          <span className="text-white/60 text-sm">Popular:</span>
          {popularSearches.map((search) => (
            <button
              key={search}
              onClick={() => setSearchQuery(search)}
              className="text-sm text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-3 py-1 transition-all hover:bg-white/10"
            >
              {search}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
