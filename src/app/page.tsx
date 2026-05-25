'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import SectionHeader from '@/components/SectionHeader';
import { woolCategories, industries, certifications, timeline } from '@/lib/content';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ minHeight: '100svh' }}
      >
        <motion.div
          className="absolute inset-0 hero-landscape"
          style={{ y: heroY }}
        />
        <div className="grain-overlay" />

        {/* Warm crimson atmosphere */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(139,44,44,0.18) 0%, transparent 70%)',
            zIndex: 1,
          }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'rgba(253,249,247,0.7)', letterSpacing: '0.22em' }}
            >
              Est. 1990s · Kathmandu, Nepal · New Zealand Wool
            </p>
          </motion.div>

          <motion.h1
            className="display-heading"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Premium New Zealand
            <br />
            <span style={{ color: '#FDF9F7' }}>Wool Supporting</span>
            <br />
            <em style={{ color: 'rgba(253,249,247,0.85)', fontStyle: 'italic' }}>
              Nepal&apos;s Craft Heritage
            </em>
          </motion.h1>

          <motion.p
            className="mt-8 text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: 'rgba(253,249,247,0.8)', lineHeight: '1.75' }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            For over three decades, Tal Barahi Handicraft has been the trusted backbone of Nepal&apos;s carpet, felt, and textile industries — sourcing premium wool from New Zealand with care, consistency, and deep industry knowledge.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/wool-categories"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-250"
              style={{
                background: '#8B2C2C',
                color: '#FDF9F7',
                letterSpacing: '0.12em',
                boxShadow: '0 4px 20px rgba(139,44,44,0.35)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#6B1F1F'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#8B2C2C'; }}
            >
              Explore Our Wool
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-sans text-xs font-semibold tracking-widest uppercase rounded-sm transition-all duration-250"
              style={{
                background: 'rgba(253,249,247,0.12)',
                color: '#FDF9F7',
                border: '1px solid rgba(253,249,247,0.3)',
                letterSpacing: '0.12em',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(253,249,247,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(253,249,247,0.12)'; }}
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats bar bottom of hero */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <div
            className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-wrap items-center gap-8 md:gap-0"
            style={{ borderTop: '1px solid rgba(253,249,247,0.15)' }}
          >
            {[
              { value: '30+', label: 'Years of Supply' },
              { value: 'NZ', label: 'Origin of Wool' },
              { value: '7+', label: 'Industries Served' },
              { value: 'IWTO', label: 'Certified Quality' },
            ].map((stat, i) => (
              <div
                key={stat.value}
                className={`flex flex-col md:flex-1 ${i > 0 ? 'md:border-l md:border-white/15 md:pl-8' : ''}`}
              >
                <span
                  className="display-heading"
                  style={{ fontSize: '2rem', color: '#FDF9F7', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span className="text-xs mt-1" style={{ color: 'rgba(253,249,247,0.55)', letterSpacing: '0.1em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 right-10 flex flex-col items-center gap-2 scroll-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'none' }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(253,249,247,0.4)', writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
        </motion.div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-28 md:py-36 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <AnimateIn>
                <span className="section-eyebrow">Est. 1990s · Kathmandu</span>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2
                  className="serif-heading text-4xl md:text-5xl lg:text-6xl italic mt-2 mb-6"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: '#2B2B29' }}
                >
                  Built on Four Hands. Trusted by Thousands.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <div className="w-12 h-px bg-brand-crimson mb-8" />
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <p className="text-brand-muted leading-relaxed mb-5" style={{ lineHeight: '1.8' }}>
                  In the early 1990s, four partners came together in Kathmandu with a humble entrepreneurial vision — rooted in Nepal&apos;s rich textile tradition and a genuine belief in the quality of materials.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <p className="text-brand-muted leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                  What began in wool dyeing and Pashmina work gradually became something far greater. Through trust, consistency, and deep industry knowledge, Tal Barahi grew into one of Nepal&apos;s most relied-upon wool suppliers — importing premium New Zealand sheep wool and supporting the industries that define Nepal&apos;s craft identity.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.35}>
                <Link href="/about" className="btn-secondary">
                  Read Our Full Story
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </AnimateIn>
            </div>

            {/* Timeline preview */}
            <div className="space-y-0">
              {timeline.slice(0, 4).map((item, i) => (
                <AnimateIn key={item.year} delay={i * 0.08} direction="left">
                  <div
                    className={`flex gap-6 py-6 ${i < 3 ? 'border-b border-brand-border' : ''}`}
                  >
                    <div className="flex-shrink-0 w-20">
                      <span
                        className="text-brand-crimson font-sans font-semibold text-xs tracking-wide"
                        style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-brand-charcoal font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WOOL EXPERTISE ─── */}
      <section className="py-28 md:py-36 wool-texture-bg relative overflow-hidden">
        <div className="grain-overlay opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="Our Wool Range"
            heading="Materials That Define Nepalese Craft"
            subheading="We supply a comprehensive range of New Zealand wool forms and grades — each selected for its quality, consistency, and suitability for Nepal's diverse manufacturing industries."
          />

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerDelay={0.06}>
            {woolCategories.slice(0, 8).map((wool) => (
              <StaggerItem key={wool.id}>
                <div
                  className="card-hover rounded-sm p-6 h-full flex flex-col cursor-default"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0D5D0',
                    boxShadow: '0 2px 12px rgba(139,44,44,0.05)',
                  }}
                >
                  {/* Wool swatch */}
                  <div
                    className="w-full h-28 rounded-sm mb-5 relative overflow-hidden"
                    style={{ background: wool.color }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, ${wool.accent}22 0px, ${wool.accent}22 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, ${wool.accent}15 0px, ${wool.accent}15 1px, transparent 1px, transparent 10px)`,
                      }}
                    />
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm font-sans font-medium tracking-wide"
                        style={{ background: wool.accent, color: '#FDF9F7', fontSize: '0.6rem', letterSpacing: '0.08em' }}
                      >
                        {wool.category}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-serif-heading text-xl font-semibold italic text-brand-charcoal mb-2"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {wool.name}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-4" style={{ lineHeight: '1.7' }}>
                    {wool.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {wool.applications.slice(0, 2).map((app) => (
                      <span
                        key={app}
                        className="text-xs px-2 py-1 bg-brand-soft text-brand-muted rounded-sm"
                        style={{ fontSize: '0.65rem' }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          <AnimateIn delay={0.2} className="text-center mt-12">
            <Link href="/wool-categories" className="btn-primary">
              View All Wool Categories
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── SUPPLY CHAIN ─── */}
      <section className="py-28 md:py-36 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,44,44,0.08) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="From Source to Studio"
            heading="Our Supply Chain Story"
            subheading="Premium wool begins its journey on New Zealand's green highlands and arrives at Nepal's finest manufacturing floors — each step carried out with care."
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {[
              {
                step: '01',
                title: 'New Zealand Farms',
                desc: 'Premium sheep grazing on New Zealand\'s pristine highlands',
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <ellipse cx="20" cy="24" rx="10" ry="8" fill="currentColor" opacity="0.2"/>
                    <circle cx="14" cy="20" r="5" fill="currentColor" opacity="0.7"/>
                    <ellipse cx="22" cy="22" rx="8" ry="6" fill="currentColor" opacity="0.5"/>
                    <ellipse cx="30" cy="23" rx="6" ry="5" fill="currentColor" opacity="0.4"/>
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Wool Processing',
                desc: 'Shearing, grading, and preparing wool to international standards',
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                    <path d="M13 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                    <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Import Logistics',
                desc: 'Sea freight from New Zealand to Nepal — consistent, scheduled supply',
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <path d="M6 26h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                    <path d="M10 26V18l6-6h14v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                    <circle cx="14" cy="29" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                    <circle cx="26" cy="29" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                step: '04',
                title: 'Kathmandu Distribution',
                desc: 'Quality checked and distributed from our Kathmandu operations',
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <rect x="8" y="16" width="24" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
                    <path d="M14 16V12a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                    <circle cx="20" cy="25" r="2" fill="currentColor" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                step: '05',
                title: 'Nepal&apos;s Industries',
                desc: 'Powering carpet, felt, knitting, and textile manufacturing across Nepal',
                icon: (
                  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                    <path d="M8 28l8-16 8 8 8-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                    <circle cx="8" cy="28" r="2" fill="currentColor" opacity="0.6"/>
                    <circle cx="32" cy="8" r="2" fill="currentColor" opacity="0.6"/>
                  </svg>
                ),
              },
            ].map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative"
                    style={{ border: '1px solid rgba(224,213,208,0.2)', background: 'rgba(253,249,247,0.05)' }}
                  >
                    <div className="text-brand-border">{step.icon}</div>
                  </div>
                  <span
                    className="text-brand-crimson font-sans font-bold mb-2"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.15em' }}
                  >
                    {step.step}
                  </span>
                  <h4 className="text-brand-cream font-semibold text-sm mb-2 leading-tight">{step.title}</h4>
                  <p className="text-brand-border text-xs leading-relaxed" style={{ lineHeight: '1.7', fontSize: '0.75rem' }}>
                    {step.desc}
                  </p>
                  {i < 4 && (
                    <div className="hidden lg:block absolute" style={{ right: '-1.5rem', top: '2rem' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M7 2l4 4-4 4" stroke="#8B2C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-28 md:py-36 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="Industries We Serve"
            heading="The Industries We've Supported for Decades"
            subheading="From the humblest artisan studio to the largest carpet exporter — Tal Barahi has been a consistent, trusted supply partner across Nepal's craft ecosystem."
          />

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {industries.slice(0, 6).map((industry) => (
              <StaggerItem key={industry.id}>
                <div
                  className="card-hover p-8 rounded-sm h-full flex flex-col relative overflow-hidden group cursor-default"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E0D5D0',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 bg-brand-crimson transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  />
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-6 text-brand-crimson font-serif text-xl"
                    style={{ background: 'rgba(139,44,44,0.06)' }}
                  >
                    {industry.icon}
                  </div>
                  <h3
                    className="font-serif-heading text-xl font-semibold italic text-brand-charcoal mb-3"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {industry.name}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-6" style={{ lineHeight: '1.75' }}>
                    {industry.description}
                  </p>
                  <div
                    className="pt-5 border-t border-brand-border flex items-center justify-between"
                  >
                    <span className="text-brand-crimson font-semibold text-lg font-serif italic" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      {industry.stat}
                    </span>
                    <span className="text-brand-muted text-xs">{industry.statLabel}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>

          <AnimateIn delay={0.2} className="text-center mt-12">
            <Link href="/industries" className="btn-secondary">
              View All Industries
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── QUALITY PROMISE ─── */}
      <section
        className="py-28 md:py-36 relative overflow-hidden"
        style={{ background: '#F5EDE8' }}
      >
        <div className="grain-overlay opacity-50" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(139,44,44,0.06) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <span className="section-eyebrow">Certifications & Quality</span>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2
                  className="serif-heading text-4xl md:text-5xl italic mt-2 mb-6"
                  style={{ fontFamily: '"Cormorant Garamond", serif', color: '#2B2B29' }}
                >
                  International Standards. Authentic Sourcing.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <div className="w-12 h-px bg-brand-crimson mb-8" />
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-brand-muted leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                  Our wool meets international quality standards because we believe the industries we serve deserve nothing less. Every consignment is backed by laboratory testing, certification documentation, and consistent grading.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.25}>
                <Link href="/certifications" className="btn-primary">
                  Our Quality Standards
                </Link>
              </AnimateIn>
            </div>

            <AnimateStagger className="grid grid-cols-2 gap-4" staggerDelay={0.08}>
              {certifications.map((cert) => (
                <StaggerItem key={cert.id}>
                  <div
                    className="p-5 rounded-sm card-hover"
                    style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                  >
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 text-xs font-bold tracking-widest"
                      style={{
                        background: '#8B2C2C',
                        color: '#FDF9F7',
                        fontSize: '0.55rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {cert.icon}
                    </div>
                    <h4 className="font-semibold text-brand-charcoal text-sm mb-2">{cert.name}</h4>
                    <p className="text-brand-muted text-xs leading-relaxed" style={{ lineHeight: '1.65', fontSize: '0.75rem' }}>
                      {cert.description.substring(0, 80)}...
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </AnimateStagger>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 md:py-32 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-25" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(139,44,44,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>
              Partner With Us
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#FDF9F7', lineHeight: 1.1 }}
            >
              Ready to source Nepal&apos;s finest wool?
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ lineHeight: '1.8' }}>
              Whether you&apos;re a large manufacturer or an independent artisan — we&apos;d welcome the opportunity to discuss how we can support your supply needs.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/wool-categories" className="btn-secondary" style={{ color: '#FDF9F7', borderColor: 'rgba(224,213,208,0.3)' }}>
                Explore Wool
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
