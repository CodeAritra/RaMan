'use client'

import { ArrowRight, Bookmark, Trash2 } from 'lucide-react'

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Editorial Insights Label */}
      <div className="text-accent font-bold text-sm tracking-widest mb-6">
        EDITORIAL INSIGHTS
      </div>

      {/* Main Headline */}
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
          Leading the Future of
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-primary">
          Corporate Excellence.
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
        In-depth analysis, strategic recipes, and management philosophies for the modern professional.
      </p>

      {/* CTA buttons */}
      {/* <div className="flex gap-6 items-center">
        <button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg flex items-center gap-2"
        >
          Explore Categories
          <ArrowRight className="w-5 h-5" />
        </button>
        <button
          size="lg"
          variant="outline"
          className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary/5 bg-transparent"
        >
          Latest Articles
        </button>
      </div> */}
    </section>
  )
}
