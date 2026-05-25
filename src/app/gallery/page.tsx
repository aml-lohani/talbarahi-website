'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';
import { galleryItems } from '@/lib/content';

const categories = ['All', 'Sourcing', 'Materials', 'Craft', 'Operations'];

const galleryData = [
  { id: 1,  label: 'New Zealand Pastoral Farm',            category: 'Sourcing',    height: 320, bg: '#4A6741', image: '/images/sheep-farm-nz.png' },
  { id: 2,  label: 'Wool Inspection at Source',            category: 'Sourcing',    height: 220, bg: '#C9B49A', image: '/images/merino-wool-inspection.png' },
  { id: 3,  label: 'Hand-Knotted Carpet',                  category: 'Craft',       height: 280, bg: '#8B2C2C', image: '/images/wool-carpet-dark.jpg' },
  { id: 4,  label: 'Kathmandu Bale Storage',               category: 'Operations',  height: 220, bg: '#3D3D3A', image: '/images/wool-in-bales.webp' },
  { id: 5,  label: 'Sheep Station, New Zealand',           category: 'Sourcing',    height: 360, bg: '#6B7D5E', image: '/images/sheep-barn-nz.jpg' },
  { id: 6,  label: 'Founding Partners, Kathmandu',          category: 'Operations',  height: 240, bg: '#3A3020', image: '/images/Partner.jpg' },
  { id: 7,  label: 'Felt Craft, Kathmandu',                category: 'Craft',       height: 260, bg: '#6A3A2A', image: '/images/sheep-shearing.jpg' },
  { id: 8,  label: 'SGS Testing Facility, New Zealand',    category: 'Operations',  height: 200, bg: '#2B3A4A', image: '/images/sgs-testing-facility.jpg' },
  { id: 9,  label: 'NZ Farm Landscape',                    category: 'Sourcing',    height: 300, bg: '#7A9060', image: '/images/nz-farm-landscape.jpg' },
  { id: 10, label: 'Industrial Dyeing Operations',         category: 'Operations',  height: 280, bg: '#4A2A1A', image: '/images/dyeing-factory-ops.webp' },
  { id: 11, label: 'Knitting Production',                  category: 'Craft',       height: 240, bg: '#8B4A1A', image: '/images/wool-knitting.webp' },
  { id: 12, label: 'NZ Wool Export Warehouse',             category: 'Operations',  height: 220, bg: '#3A3A36', image: '/images/wool-bales-warehouse.png' },
  { id: 13, label: 'Industrial Carding Machine',           category: 'Operations',  height: 260, bg: '#2A3A2A', image: '/images/carding-industrial.jpg' },
  { id: 14, label: 'Team Visit, New Zealand',              category: 'Sourcing',    height: 300, bg: '#4A3828', image: '/images/team-wool-inspection-nz.jpg' },
  { id: 15, label: 'Raw Wool Processing, Kathmandu',       category: 'Operations',  height: 220, bg: '#D0C0A8', image: '/images/raw-scoured-wool-new.webp' },
  { id: 16, label: 'Shearing Season',                      category: 'Sourcing',    height: 280, bg: '#507040', image: '/images/sheep-shearing-detail.jpg' },
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
        <Image
          src="/images/team-wool-inspection-nz.jpg"
          alt="Tal Barahi team visiting New Zealand wool farm"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(43,43,41,0.80)' }} />
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
                  {/* Real photo if available */}
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  )}

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
                  <div className={`grain-overlay ${item.image ? 'opacity-25' : 'opacity-60'}`} />

                  {/* Base gradient for photos */}
                  {item.image && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                  )}

                  {/* Gradient overlay on hover */}
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
