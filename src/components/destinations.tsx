"use client";

import { useState } from "react";
import { destinations } from "@/data/destinations";
import DestinationCard from "./destination-card";
import { cn } from "@/lib/utils";
import { SlidersHorizontal, ArrowRight } from "lucide-react";

const filters = ["All", "Beach", "Cultural", "Adventure", "Nature"];
const sortOptions = ["Most Popular", "Top Rated", "Price: Low", "Price: High"];

export default function DestinationsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [showSort, setShowSort] = useState(false);

  const filtered = destinations.filter(
    (d) => activeFilter === "All" || d.category === activeFilter
  );

  return (
    <section id="destinations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
              Curated For You
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Top Destinations
            </h2>
            <p className="mt-2 text-muted-foreground">
              {filtered.length} destinations with real traveler ratings
            </p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors self-end">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter + Sort Bar */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 no-scrollbar">
          <div className="flex items-center gap-2 flex-nowrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all",
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="ml-auto relative shrink-0">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {sortBy}
            </button>
            {showSort && (
              <div className="absolute top-full mt-2 right-0 bg-popover border border-border rounded-xl shadow-xl z-20 min-w-44 overflow-hidden">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setShowSort(false); }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-accent",
                      sortBy === opt ? "text-primary font-semibold" : "text-foreground"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest, i) => (
            <DestinationCard key={dest.id} destination={dest} priority={i < 3} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200">
            Load More Destinations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
