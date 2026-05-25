'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import { galleryItems } from '@/lib/content';

const categories = ['All', 'Sourcing', 'Materials', 'Craft', 'Operations'];

const galleryData = [
  { id: 1, label: 'New Zealand Highland Farm', category: 'Sourcing', height: 320, bg: '#4A6741', emoji: '🏔️' },
  { id: 2, label: 'Raw Wool Fiber Close-up', category: 'Materials', height: 220, bg: '#C9B49A', emoji: '🧶' },
  { id: 3, label: 'Carpet Artisan at Work', category: 'Craft', height: 280, bg: '#8B2C2C', emoji: '🏺' },
  { id: 4, label: 'Warehouse Operations', category: 'Operations', height: 220, bg: '#3D3D3A', emoji: '📦' },
  { id: 5, label: 'NZ Sheep Flock at Dawn', category: 'Sourcing', height: 360, bg: '#6B7D5E', emoji: '🐑' },
  { id: 6, label: 'Colored Wool Range Display', category: 'Materials', height: 240, bg: '#B8A48A', emoji: '🎨' },
  { id: 7, label: 'Kathmandu Textile Workshop', category: 'Craft', height: 260, bg: '#5A4A3A', emoji: '⚒️' },
  { id: 8, label: 'Felting Needle Work', category: 'Craft', height: 200, bg: '#A83535', emoji: '🪡' },
  { id: 9, label: 'Highland Pastoral Scene', category: 'Sourcing', height: 300, bg: '#7A9060', emoji: '🌿' },
  { id: 10, label: 'Dyeing Process', category: 'Materials', height: 280, bg: '#6B1F1F', emoji: '🫙' },
  { id: 11, label: 'Traditional Knitting', category: 'Craft', height: 240, bg: '#4A3828', emoji: '🧤' },
  { id: 12, label: 'Export Packing', category: 'Operations', height: 220, bg: '#2B2B29', emoji: '🗃️' },
  { id: 13, label: 'Wool Grading Station', category: 'Operations', height: 260, bg: '#5A4A3A', emoji: '⚖️' },
  { id: 14, label: 'Carpet Loom Detail', category: 'Craft', height: 300, bg: '#7A4A2A', emoji: '🖼️' },
  { id: 15, label: 'Carded Wool Preparation', category: 'Materials', height: 220, bg: '#D0C0A8', emoji: '☁️' },
  { id: 16, label: 'Farm Shearing Season', category: 'Sourcing', height: 280, bg: '#507040', emoji: '✂️' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 80%, rgba(139,44,44,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Gallery</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              From Green Highlands to Nepalese Craft Floors
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              A visual journey through our world — from New Zealand&apos;s pastoral farms to Kathmandu&apos;s artisan workshops.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-brand-cream border-b border-brand-border sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-5 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-200 font-sans"
                style={{
                  letterSpacing: '0.1em',
                  background: activeCategory === cat ? '#8B2C2C' : 'transparent',
                  color: activeCategory === cat ? '#FDF9F7' : '#666666',
                  border: activeCategory === cat ? '1px solid #8B2C2C' : '1px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MASONRY GALLERY ─── */}
      <section className="py-12 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="masonry-grid"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="masonry-item group relative overflow-hidden rounded-sm cursor-pointer"
                  style={{ height: item.height, background: item.bg }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Texture overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        rgba(253,249,247,0.04) 0px,
                        rgba(253,249,247,0.04) 1px,
                        transparent 1px,
                        transparent 14px
                      )`,
                    }}
                  />
                  <div className="grain-overlay opacity-60" />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Category pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className="text-xs px-2.5 py-1 rounded-sm font-sans font-semibold tracking-widest"
                      style={{
                        background: 'rgba(43,43,41,0.7)',
                        color: 'rgba(253,249,247,0.8)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Decorative center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ fontSize: '3.5rem', opacity: 0.15, filter: 'blur(1px)' }}>
                      {item.emoji}
                    </span>
                  </div>

                  {/* Caption on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#FDF9F7', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic' }}
                    >
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Gallery note */}
          <AnimateIn delay={0.3} className="text-center mt-12">
            <p className="text-brand-muted text-sm italic" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem' }}>
              Imagery represents our sourcing origins, craft industries, and operational environments across Nepal and New Zealand.
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
