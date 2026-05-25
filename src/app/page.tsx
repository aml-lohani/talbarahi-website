'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import { woolCategories, industries, certifications } from '@/lib/content';

// ─── DATA ────────────────────────────────────────────────────────────────────

const trustItems = [
  { value: '30+', label: 'Years of Experience' },
  { value: 'Trusted', label: 'Industry Supplier' },
  { value: '100%', label: 'New Zealand Wool' },
  { value: 'SGS & IWTO', label: 'Tested Quality' },
  { value: 'Since 1990s', label: 'Serving Nepal' },
];

const woolPreview = [
  { name: 'Raw White Wool', desc: 'Unprocessed natural purity', color: '#F0EAE0', accent: '#C4A882', category: 'Natural', image: '/images/raw-scoured-wool.webp' },
  { name: 'Colored Wool', desc: 'AZO-free dyed, export-compliant', color: '#D4B5B5', accent: '#8B2C2C', category: 'Processed', image: '/images/dyeing-lab.webp' },
  { name: 'Carpet Wool', desc: 'Heavy-grade pile resilience', color: '#D8C9B0', accent: '#7A6848', category: 'Industrial', image: '/images/wool-carpet.jpg' },
  { name: 'Felting Wool', desc: 'Optimal natural felting scales', color: '#DDD0C0', accent: '#9B7E6B', category: 'Industrial', image: '/images/felt-wool-balls.jpg' },
  { name: 'Carded Wool', desc: 'Uniform fiber alignment', color: '#E0D8CC', accent: '#A8956E', category: 'Processed', image: '/images/carding-machine.webp' },
  { name: 'Natural Wool', desc: 'Lanolin-rich, batch consistent', color: '#E8DDD0', accent: '#B8A48A', category: 'Natural', image: '/images/wool-samples-basket.jpg' },
];

const testimonials = [
  {
    quote: 'We have worked with Tal Barahi for over eighteen years. The wool quality and supply consistency has never wavered. For our carpet production, that reliability is not a preference — it is a necessity.',
    name: 'Sushil Maharjan',
    title: 'Director',
    company: 'Himalayan Carpet Industries, Kathmandu',
  },
  {
    quote: 'Tal Barahi understands our industry at a level that is rare in a supplier. When we expanded our felt export line, they guided us through the right wool specifications for international buyer compliance. That is genuine partnership.',
    name: 'Binod Karmacharya',
    title: 'Managing Director',
    company: 'Nepal Felt Exports, Kathmandu',
  },
  {
    quote: 'The consistency of wool we receive batch after batch has allowed us to scale our knitwear production with confidence. Tal Barahi is not just a supplier — they are a long-term partner in the truest sense of the word.',
    name: 'Rita Shrestha',
    title: 'Proprietor',
    company: 'Kathmandu Knitting House',
  },
];

const industryGrid = [
  { name: 'Carpet Manufacturing', desc: 'Hand-knotted & tufted carpet production', icon: '⟡' },
  { name: 'Felt Manufacturing', desc: 'Industrial & artistic felt for global export', icon: '◈' },
  { name: 'Knitting Industry', desc: 'Fine & medium grade knitwear production', icon: '◎' },
  { name: 'Textile Manufacturing', desc: 'Woven & processed textile industries', icon: '◇' },
  { name: 'Handicraft Producers', desc: 'Artisan studios to mid-scale exporters', icon: '✦' },
  { name: 'Export Houses', desc: 'IWTO-certified supply for global buyers', icon: '◑' },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO — Cinematic NZ Landscape
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '100svh' }}
      >
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: 1.08 }}
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="New Zealand pastoral landscape"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </motion.div>

        {/* Base dim — lifts overall image darkness evenly */}
        <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(10,16,6,0.32)' }} />

        {/* Bottom-to-top gradient for text readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to top, rgba(10,16,6,0.92) 0%, rgba(10,16,6,0.62) 28%, rgba(10,16,6,0.22) 55%, rgba(10,16,6,0.06) 75%, transparent 100%)',
          }}
        />

        {/* Top fade for nav legibility */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,16,6,0.45) 0%, rgba(10,16,6,0.15) 18%, transparent 38%)',
          }}
        />

        {/* Side vignettes */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to right, rgba(10,16,6,0.35) 0%, transparent 25%, transparent 75%, rgba(10,16,6,0.25) 100%)',
          }}
        />

        {/* Grain */}
        <div className="grain-overlay z-[2]" />

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="font-sans font-semibold tracking-widest uppercase mb-5"
            style={{ color: 'rgba(253,249,247,0.55)', fontSize: '0.65rem', letterSpacing: '0.24em' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Est. 1990s &nbsp;·&nbsp; Kathmandu, Nepal &nbsp;·&nbsp; New Zealand Wool
          </motion.p>

          <motion.h1
            className="display-heading mb-6"
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 6.8rem)',
              color: '#FDF9F7',
              lineHeight: 1.02,
              maxWidth: '820px',
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            From New Zealand Wool to Nepalese Craft.
          </motion.h1>

          <motion.p
            className="font-sans text-base md:text-lg mb-10 max-w-lg"
            style={{ color: 'rgba(253,249,247,0.72)', lineHeight: '1.78' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Nepal&apos;s trusted B2B importer and wholesale supplier of premium New Zealand sheep wool — supporting felt, carpet, garment, and handicraft manufacturers.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/wool-categories"
              className="inline-flex items-center gap-2.5 font-sans font-semibold tracking-widest uppercase rounded-sm"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.13em',
                padding: '0.9rem 2rem',
                background: '#8B2C2C',
                color: '#FDF9F7',
                transition: 'background 0.22s, transform 0.18s, box-shadow 0.22s',
                boxShadow: '0 6px 24px rgba(139,44,44,0.4)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#6B1F1F'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#8B2C2C'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Explore Wool Categories
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 font-sans font-semibold tracking-widest uppercase rounded-sm"
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.13em',
                padding: '0.9rem 2rem',
                background: 'rgba(253,249,247,0.1)',
                color: '#FDF9F7',
                border: '1px solid rgba(253,249,247,0.28)',
                backdropFilter: 'blur(6px)',
                transition: 'background 0.22s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(253,249,247,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(253,249,247,0.1)'; }}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute right-8 bottom-10 flex flex-col items-center gap-3 z-10 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span
            className="font-sans font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(253,249,247,0.35)', fontSize: '0.55rem', letterSpacing: '0.22em', writingMode: 'vertical-rl' }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px bg-gradient-to-b from-white/25 to-transparent"
            style={{ height: '52px' }}
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. TRUST & LEGACY STRIP
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-brand-border relative overflow-hidden">
        <div className="grain-overlay opacity-30" />
        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-10 relative z-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex items-stretch divide-x divide-brand-border overflow-x-auto">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className="flex-1 min-w-[140px] flex flex-col items-center justify-center text-center py-5 px-4 group"
                style={{ transition: 'background 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,44,44,0.03)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <span
                  className="font-sans font-semibold text-brand-charcoal mb-0.5"
                  style={{ fontSize: '0.875rem', letterSpacing: '-0.01em' }}
                >
                  {item.value}
                </span>
                <span
                  className="font-sans text-brand-muted"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.06em' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. ABOUT PREVIEW — Editorial Asymmetric
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-stretch">

            {/* Left editorial panel */}
            <AnimateIn direction="left" className="lg:col-span-5">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  minHeight: '480px',
                  background: '#2B2B29',
                }}
              >
                {/* Real team photo — Tal Barahi partners at NZ farm */}
                <Image
                  src="/images/team-wool-inspection.jpg"
                  alt="Tal Barahi partners at a New Zealand farm inspecting raw wool"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Primary dark overlay for legibility */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(43,43,41,0.70)' }}
                />
                {/* Bottom-up gradient for quote readability */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(43,43,41,0.88) 0%, rgba(43,43,41,0.3) 55%, transparent 100%)' }}
                />
                {/* Warm atmospheric glow */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse 80% 70% at 30% 60%, rgba(139,44,44,0.18) 0%, transparent 65%)' }}
                />
                {/* Grain texture */}
                <div className="grain-overlay opacity-35" />
                {/* Large decorative year */}
                <div
                  className="absolute -bottom-6 -right-4 select-none pointer-events-none"
                  style={{
                    fontFamily: '"Passions Conflict", cursive',
                    fontSize: '9rem',
                    color: 'rgba(224,213,208,0.14)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  1990s
                </div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <div
                      className="w-10 h-px mb-6"
                      style={{ background: '#8B2C2C' }}
                    />
                    <p
                      className="font-sans text-xs font-semibold tracking-widest uppercase mb-8"
                      style={{ color: 'rgba(224,213,208,0.5)', letterSpacing: '0.18em' }}
                    >
                      Est. Kathmandu, Nepal
                    </p>
                  </div>
                  <div>
                    <blockquote
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        fontStyle: 'italic',
                        fontWeight: 500,
                        color: '#FDF9F7',
                        lineHeight: 1.35,
                      }}
                    >
                      &ldquo;We did not build a company. We built relationships. The company followed.&rdquo;
                    </blockquote>
                    <p
                      className="font-sans text-xs mt-5"
                      style={{ color: 'rgba(224,213,208,0.45)', letterSpacing: '0.08em' }}
                    >
                      — Founding Philosophy, Tal Barahi Handicraft
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Right text panel */}
            <div className="lg:col-span-7 flex flex-col justify-center py-10 lg:py-0 lg:pl-8">
              <AnimateIn>
                <span className="section-eyebrow">Est. 1990s · Our Heritage</span>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2
                  className="mt-3 mb-5"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#2B2B29',
                    lineHeight: 1.15,
                  }}
                >
                  Nepal&apos;s Most Trusted Wool Supplier.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <div className="w-10 h-px bg-brand-crimson mb-7" />
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-brand-muted mb-5" style={{ lineHeight: '1.85', maxWidth: '520px' }}>
                  In the early 1990s, four partners came together in Kathmandu with a humble vision rooted in Nepal&apos;s textile tradition. What began in wool dyeing and Pashmina work grew — through trust, consistency, and genuine industry knowledge — into the country&apos;s most relied-upon wool supply partnership.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <p className="text-brand-muted mb-8" style={{ lineHeight: '1.85', maxWidth: '520px' }}>
                  In the early 2000s, direct import of premium New Zealand wool began — opening a new chapter that has defined Tal Barahi Handicraft for over two decades.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <Link href="/about" className="btn-secondary inline-flex">
                  Read Our Story
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. WOOL CATEGORIES PREVIEW
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 wool-texture-bg relative overflow-hidden">
        <div className="grain-overlay opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <AnimateIn>
                <span className="section-eyebrow">Our Wool Range</span>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#2B2B29',
                    lineHeight: 1.15,
                    marginTop: '0.35rem',
                  }}
                >
                  Our Wool Categories
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.15} direction="right" className="flex-shrink-0">
              <Link href="/wool-categories" className="btn-secondary">
                Explore All Categories
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </AnimateIn>
          </div>

          <AnimateStagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.07}>
            {woolPreview.map((wool) => (
              <StaggerItem key={wool.name}>
                <div
                  className="group rounded-sm overflow-hidden cursor-default card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  {/* Wool swatch */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: '160px', background: wool.color }}
                  >
                    {/* Real photo */}
                    <Image
                      src={wool.image}
                      alt={wool.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    {/* Subtle dark tint for label readability */}
                    <div className="absolute inset-0" style={{ background: 'rgba(43,43,41,0.22)' }} />
                    <div className="grain-overlay opacity-35" />
                    {/* Category tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className="font-sans font-semibold tracking-widest uppercase"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.12em',
                          padding: '3px 8px',
                          background: wool.accent,
                          color: '#FDF9F7',
                          borderRadius: '2px',
                        }}
                      >
                        {wool.category}
                      </span>
                    </div>
                    {/* Hover reveal */}
                    <div
                      className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100"
                      style={{
                        background: 'linear-gradient(to top, rgba(43,43,41,0.72) 0%, transparent 60%)',
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <p className="font-sans text-xs" style={{ color: 'rgba(253,249,247,0.85)', lineHeight: '1.5' }}>
                        {wool.desc}
                      </p>
                    </div>
                  </div>
                  {/* Name */}
                  <div className="px-5 py-4">
                    <h3
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1.15rem',
                        fontStyle: 'italic',
                        fontWeight: 600,
                        color: '#2B2B29',
                      }}
                    >
                      {wool.name}
                    </h3>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. CERTIFICATIONS & QUALITY PREVIEW
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-22" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,44,44,0.08) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <AnimateIn>
                <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.55)' }}>
                  Certifications & Quality
                </span>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2
                  className="mt-3 mb-5"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#FDF9F7',
                    lineHeight: 1.15,
                  }}
                >
                  International Standards. Genuine Sourcing.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.12}>
                <div className="w-10 h-px bg-brand-crimson mb-7" />
              </AnimateIn>
              <AnimateIn delay={0.16}>
                <p className="text-brand-border mb-8" style={{ lineHeight: '1.85', maxWidth: '440px' }}>
                  Every consignment of wool we supply is backed by independent laboratory testing, certified documentation, and consistent quality grading — meeting the standards that international carpet and textile buyers demand.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.22}>
                <Link href="/certifications" className="btn-primary">
                  View Our Quality Standards
                </Link>
              </AnimateIn>
            </div>

            {/* Right: certification badges */}
            <AnimateStagger className="grid grid-cols-2 gap-3" staggerDelay={0.07}>
              {certifications.map((cert) => (
                <StaggerItem key={cert.id}>
                  <div
                    className="flex items-start gap-4 p-5 rounded-sm card-hover"
                    style={{
                      border: '1px solid rgba(224,213,208,0.1)',
                      background: 'rgba(253,249,247,0.04)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-sm flex items-center justify-center font-sans font-bold"
                      style={{
                        background: '#8B2C2C',
                        color: '#FDF9F7',
                        fontSize: '0.55rem',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-brand-cream font-semibold text-sm mb-1">{cert.name}</h4>
                      <p className="text-brand-border" style={{ fontSize: '0.72rem', lineHeight: '1.55' }}>
                        {cert.description.split('.')[0]}.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </AnimateStagger>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. INDUSTRIES WE SERVE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-35" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <AnimateIn>
                <span className="section-eyebrow">Industries We Serve</span>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2
                  className="mt-3"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    color: '#2B2B29',
                    lineHeight: 1.15,
                  }}
                >
                  Powering Nepal&apos;s Craft Ecosystem
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.15} direction="right" className="flex-shrink-0">
              <Link href="/industries" className="btn-secondary">
                View All Industries
              </Link>
            </AnimateIn>
          </div>

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
            {industryGrid.map((industry) => (
              <StaggerItem key={industry.name}>
                <div
                  className="group relative overflow-hidden rounded-sm p-7 card-hover cursor-default"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  {/* Hover top border */}
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 bg-brand-crimson origin-left"
                    style={{ transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}
                    ref={(el) => {
                      if (el) {
                        const parent = el.parentElement;
                        parent?.addEventListener('mouseenter', () => { el.style.transform = 'scaleX(1)'; });
                        parent?.addEventListener('mouseleave', () => { el.style.transform = 'scaleX(0)'; });
                      }
                    }}
                  />
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center mb-5 text-lg"
                    style={{ background: 'rgba(139,44,44,0.07)', color: '#8B2C2C' }}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      fontWeight: 600,
                      color: '#2B2B29',
                    }}
                  >
                    {industry.name}
                  </h3>
                  <p className="text-brand-muted" style={{ fontSize: '0.8rem', lineHeight: '1.65' }}>
                    {industry.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. CLIENT TESTIMONIALS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#F5EDE8' }}>
        <div className="grain-overlay opacity-50" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(139,44,44,0.05) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

          <div className="text-center mb-16">
            <AnimateIn>
              <span className="section-eyebrow">Industry Trust</span>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h2
                className="mt-3"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: '#2B2B29',
                  lineHeight: 1.15,
                }}
              >
                Trusted by Nepal&apos;s Craft Industry Leaders
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <div className="w-10 h-px bg-brand-crimson mx-auto mt-6" />
            </AnimateIn>
          </div>

          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div
                  className="flex flex-col h-full rounded-sm p-8"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0', boxShadow: '0 4px 24px rgba(139,44,44,0.05)' }}
                >
                  {/* Opening mark */}
                  <div
                    className="mb-5 flex-shrink-0"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '4rem',
                      color: '#8B2C2C',
                      lineHeight: 0.7,
                      opacity: 0.35,
                    }}
                  >
                    &ldquo;
                  </div>
                  {/* Quote */}
                  <blockquote
                    className="flex-1 mb-8"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      color: '#2B2B29',
                      lineHeight: 1.75,
                    }}
                  >
                    {t.quote}
                  </blockquote>
                  {/* Attribution */}
                  <div className="pt-6 border-t border-brand-border">
                    <p
                      className="font-sans font-semibold text-brand-charcoal"
                      style={{ fontSize: '0.82rem' }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="font-sans text-brand-muted mt-0.5"
                      style={{ fontSize: '0.72rem' }}
                    >
                      {t.title}
                    </p>
                    <p
                      className="font-sans mt-0.5"
                      style={{ fontSize: '0.68rem', color: '#8B2C2C', letterSpacing: '0.04em' }}
                    >
                      {t.company}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. FINAL CTA — Cinematic Closing
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-brand-charcoal">
        {/* Background atmosphere */}
        <div className="grain-overlay opacity-22" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(139,44,44,0.14) 0%, transparent 68%)' }}
        />
        {/* Decorative horizontal lines */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(224,213,208,0.06) 20%, rgba(224,213,208,0.1) 50%, rgba(224,213,208,0.06) 80%, transparent 100%)',
          }}
        />

        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.45)' }}>
              Long-Term Partnership
            </span>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h2
              className="display-heading mt-4 mb-7"
              style={{
                fontSize: 'clamp(2.6rem, 6.5vw, 6rem)',
                color: '#FDF9F7',
                lineHeight: 1.0,
              }}
            >
              Building Trusted Wool Partnerships for Generations.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.18}>
            <p
              className="font-sans mx-auto mb-10"
              style={{
                color: 'rgba(224,213,208,0.65)',
                lineHeight: '1.85',
                maxWidth: '480px',
                fontSize: '0.95rem',
              }}
            >
              We are not looking for transactions. We are looking for long-term partners who value consistency, quality, and the kind of trust that can only be built over decades.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.26}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 font-sans font-semibold tracking-widest uppercase rounded-sm"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.13em',
                  padding: '0.9rem 2rem',
                  background: '#8B2C2C',
                  color: '#FDF9F7',
                  transition: 'background 0.22s, transform 0.18s',
                  boxShadow: '0 6px 24px rgba(139,44,44,0.35)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#6B1F1F'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#8B2C2C'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Get in Touch
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 6.5h11M7 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/wool-categories"
                className="inline-flex items-center gap-2 font-sans font-semibold tracking-widest uppercase rounded-sm"
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.13em',
                  padding: '0.9rem 2rem',
                  background: 'transparent',
                  color: 'rgba(253,249,247,0.75)',
                  border: '1px solid rgba(224,213,208,0.2)',
                  transition: 'background 0.22s, border-color 0.22s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(253,249,247,0.07)'; e.currentTarget.style.borderColor = 'rgba(224,213,208,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(224,213,208,0.2)'; }}
              >
                Explore Wool
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
