"use client";

import Image from "next/image";
import { Star, ThumbsUp, MapPin, Quote } from "lucide-react";
import { reviews } from "@/data/destinations";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-amber-400 fill-current" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            Real Traveler Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            What People Are Saying
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Thousands of verified travelers share their authentic experiences to help you plan your perfect journey.
          </p>

          {/* Overall Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">4.8</p>
              <div className="flex justify-center mt-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Average Rating</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">52K+</p>
              <p className="text-xs text-muted-foreground mt-1.5">Total Reviews</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">98%</p>
              <p className="text-xs text-muted-foreground mt-1.5">Recommend</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, idx) => (
            <article
              key={review.id}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow relative"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5 text-primary/10">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              {/* Author */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-border shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm leading-tight">{review.author}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{review.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <StarRating rating={review.rating} />
                    <span className="text-[10px] text-muted-foreground">{review.date}</span>
                  </div>
                </div>
                <div className="shrink-0 px-2.5 py-1 bg-primary/8 rounded-lg border border-primary/15">
                  <p className="text-[10px] font-semibold text-primary leading-tight">{review.destination}</p>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 mb-4">
                "{review.content}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="inline-flex w-4 h-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </span>
                  Verified Trip
                </div>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-sm">
            Read All Reviews →
          </button>
        </div>
      </div>
    </section>
  );
}
