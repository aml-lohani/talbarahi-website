'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import SectionHeader from '@/components/SectionHeader';
import { insights } from '@/lib/content';

const categoryColors: Record<string, string> = {
  'Wool Knowledge': '#4A6741',
  'Industry': '#8B2C2C',
  'Sourcing': '#6B5A4A',
  'Quality': '#3D3D3A',
  'Craft': '#7A4A2A',
  'Supply Chain': '#4A5A6A',
};

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <Image
          src="/images/hero/nepal-mountains-prayer-flags.jpg"
          alt="Nepal mountains with prayer flags"
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyQjJCMjkiLz48L3N2Zz4="
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(43,43,41,0.80)' }} />
        <div className="grain-overlay opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 40%, rgba(139,44,44,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Insights & Industry Knowledge</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              Perspectives on Wool, Craft & Industry
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              Drawing on three decades of experience in Nepal&apos;s wool supply ecosystem: knowledge about materials, industries and the craft heritage we serve.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── COMING SOON NOTE ─── */}
      <section className="py-12 bg-brand-cream border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimateIn>
            <div
              className="flex items-center gap-4 p-5 rounded-sm"
              style={{ background: 'rgba(139,44,44,0.06)', border: '1px solid rgba(139,44,44,0.12)' }}
            >
              <div className="w-2 h-2 rounded-full bg-brand-crimson animate-pulse flex-shrink-0" />
              <p className="text-sm text-brand-charcoal">
                <span className="font-semibold">Coming Soon.</span> Our insights section is being curated with articles drawn from three decades of industry experience. The topics below represent our planned content.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── ARTICLES GRID ─── */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-35" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {insights.map((article) => (
              <StaggerItem key={article.id}>
                <div
                  className="group rounded-sm overflow-hidden card-hover relative cursor-default"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  {/* Coming soon overlay */}
                  <div
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(43,43,41,0.7)', backdropFilter: 'blur(4px)' }}
                  >
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-sm"
                      style={{ background: '#8B2C2C', color: '#FDF9F7', letterSpacing: '0.12em', fontSize: '0.65rem' }}
                    >
                      Coming Soon
                    </span>
                  </div>

                  {/* Article image placeholder */}
                  <div
                    className="h-44 relative overflow-hidden"
                    style={{ background: categoryColors[article.category] || '#3D3D3A' }}
                  >
                    <div className="grain-overlay opacity-50" />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          rgba(253,249,247,0.04) 0px,
                          rgba(253,249,247,0.04) 1px,
                          transparent 1px,
                          transparent 12px
                        )`,
                      }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-xs px-2.5 py-1 rounded-sm font-semibold tracking-widest"
                        style={{
                          background: 'rgba(43,43,41,0.6)',
                          color: 'rgba(253,249,247,0.85)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-brand-muted">{article.date}</span>
                      <span className="text-xs text-brand-muted">{article.readTime}</span>
                    </div>
                    <h3
                      className="serif-heading text-xl italic font-semibold text-brand-charcoal mb-3 leading-tight"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed" style={{ lineHeight: '1.75' }}>
                      {article.excerpt}
                    </p>
                    <div className="mt-6 pt-5 border-t border-brand-border">
                      <span
                        className="text-xs font-semibold text-brand-crimson tracking-wider uppercase flex items-center gap-2"
                        style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}
                      >
                        Read Article
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ─── KNOWLEDGE AREAS ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#F5EDE8' }}>
        <div className="grain-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="Areas of Knowledge"
            heading="30 Years of Wool Expertise"
            subheading="Our insights draw on hands-on experience across every facet of the New Zealand wool supply chain and Nepal's craft manufacturing ecosystem."
          />

          <AnimateStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" staggerDelay={0.06}>
            {[
              { area: 'Wool Grading', icon: '⚖️' },
              { area: 'Micron Science', icon: '🔬' },
              { area: 'NZ Sourcing', icon: '🌏' },
              { area: 'Carpet Industry', icon: '🏺' },
              { area: 'Felt Production', icon: '🧱' },
              { area: 'Knitting Tech', icon: '🧶' },
              { area: 'Dye Chemistry', icon: '🎨' },
              { area: 'Import Logistics', icon: '🚢' },
              { area: 'Quality Testing', icon: '✅' },
              { area: 'Craft Heritage', icon: '🏛️' },
              { area: 'Export Standards', icon: '📋' },
              { area: 'Supply Chain', icon: '🔗' },
            ].map((item) => (
              <StaggerItem key={item.area}>
                <div
                  className="p-4 rounded-sm text-center card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  <div className="text-2xl mb-2 opacity-70">{item.icon}</div>
                  <p className="text-xs font-medium text-brand-charcoal">{item.area}</p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Newsletter / notify */}
      <section className="py-20 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-25" />
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Stay Informed</span>
            <h3
              className="display-heading mt-3 mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#FDF9F7', lineHeight: 1.1 }}
            >
              Be the first to read our insights.
            </h3>
            <p className="text-brand-border mb-8" style={{ lineHeight: '1.8' }}>
              We&apos;ll notify you when our first articles on wool grading, Nepal&apos;s carpet industry, and sourcing standards are published.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-sm text-sm font-sans"
                style={{
                  background: 'rgba(253,249,247,0.08)',
                  border: '1px solid rgba(224,213,208,0.2)',
                  color: '#FDF9F7',
                  outline: 'none',
                }}
              />
              <button className="btn-primary flex-shrink-0">
                Notify Me
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
