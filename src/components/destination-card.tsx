"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Star, Heart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  priority?: boolean;
}

function formatPrice(min: number, max: number): string {
  const fmt = (n: number) =>
    n >= 1_000_000
      ? `Rp ${(n / 1_000_000).toFixed(0)}jt`
      : `Rp ${(n / 1_000).toFixed(0)}k`;
  return `${fmt(min)} – ${fmt(max)}`;
}

/** Format review count without toLocaleString() to avoid SSR/CSR hydration mismatch.
 *  e.g. 2847 → "2,847"  |  15432 → "15,432" */
function formatCount(n: number): string {
  const s = String(n);
  // insert comma every 3 digits from the right
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function DestinationCard({ destination, priority = false }: DestinationCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <div className="flex flex-wrap gap-1.5">
            {destination.featured && (
              <span className="flex items-center gap-1 bg-amber-400/95 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                <TrendingUp className="w-2.5 h-2.5" /> Featured
              </span>
            )}
            <span className="bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {destination.category}
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all active:scale-90",
              liked
                ? "bg-rose-500 text-white shadow-md"
                : "bg-white/80 text-muted-foreground hover:bg-white hover:text-rose-500"
            )}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("w-3.5 h-3.5", liked && "fill-current")} />
          </button>
        </div>

        {/* Bottom Price */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
            <p className="text-[10px] text-muted-foreground font-medium leading-none mb-0.5">
              Est. per person
            </p>
            <p className="text-xs font-bold text-foreground leading-none">
              {formatPrice(destination.priceMin, destination.priceMax)}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-bold text-base text-foreground leading-tight group-hover:text-primary transition-colors">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 mt-0.5 text-muted-foreground text-xs">
              <MapPin className="w-3 h-3 shrink-0" />
              <span>{destination.location}, {destination.country}</span>
            </div>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span className="font-bold text-sm text-foreground">{destination.rating}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">
              {formatCount(destination.reviewCount)} reviews
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {destination.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-primary bg-primary/8 px-2 py-0.5 rounded-full border border-primary/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full mt-1 py-2 rounded-xl bg-primary/8 hover:bg-primary text-primary hover:text-white text-xs font-semibold transition-all duration-200 border border-primary/20 hover:border-primary">
          Explore Destination →
        </button>
      </div>
    </article>
  );
}
