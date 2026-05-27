'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import SectionHeader from '@/components/SectionHeader';
import { industries } from '@/lib/content';

const industryImages: Record<number, string> = {
  1: '/images/industries/carpets.jpg',
  2: '/images/industries/felt-makers.jpg',
  3: '/images/industries/knitting.jpg',
  4: '/images/industries/textile.jpg',
  5: '/images/industries/handicrafts.jpg',
  6: '/images/industries/artisans.webp',
  7: '/images/gallery/wool-bales-warehouse.jpg',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: '#2B2B29' }}
      >
        <Image
          src="/images/hero/nepali-architecture.jpg"
          alt="Traditional Nepali carved wood architecture"
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
          style={{ background: 'radial-gradient(ellipse 60% 70% at 30% 60%, rgba(139,44,44,0.12) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Industries We Serve</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              Partners to Nepal&apos;s Craft Industries
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              For over three decades, we have supplied premium New Zealand wool to the industries at the heart of Nepal&apos;s craft and manufacturing identity.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-28 md:py-36 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-35" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="space-y-24">
            {industries.map((industry, i) => (
              <AnimateIn key={industry.id} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-sm flex items-center justify-center text-2xl"
                        style={{ background: 'rgba(139,44,44,0.08)', color: '#8B2C2C' }}
                      >
                        {industry.icon}
                      </div>
                      <span
                        className="text-xs font-semibold tracking-widest uppercase text-brand-crimson"
                        style={{ letterSpacing: '0.15em' }}
                      >
                        Industry {String(industry.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h2
                      className="serif-heading text-3xl md:text-4xl italic font-semibold text-brand-charcoal mb-5"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {industry.name}
                    </h2>
                    <div className="w-10 h-px bg-brand-crimson mb-6" />
                    <p className="text-brand-muted leading-relaxed mb-5" style={{ lineHeight: '1.85' }}>
                      {industry.description}
                    </p>
                    <p className="text-brand-muted leading-relaxed mb-8" style={{ lineHeight: '1.85' }}>
                      {industry.detail}
                    </p>
                    <div
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-sm"
                      style={{ background: 'rgba(139,44,44,0.07)', border: '1px solid rgba(139,44,44,0.15)' }}
                    >
                      <span className="text-brand-crimson font-serif italic text-xl font-semibold" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {industry.stat}
                      </span>
                      <span className="text-brand-muted text-xs">— {industry.statLabel}</span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div
                      className="rounded-sm relative overflow-hidden"
                      style={{
                        height: '380px',
                        background: i % 3 === 0 ? '#4A6741' : i % 3 === 1 ? '#8B2C2C' : '#3D3D3A',
                      }}
                    >
                      {/* Real photo if available */}
                      {industryImages[industry.id] && (
                        <Image
                          src={industryImages[industry.id]}
                          alt={industry.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      )}
                      {/* Dark gradient overlay for readability */}
                      {industryImages[industry.id] && (
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }}
                        />
                      )}
                      <div className={`grain-overlay ${industryImages[industry.id] ? 'opacity-20' : 'opacity-60'}`} />
                      {!industryImages[industry.id] && (
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `
                              repeating-linear-gradient(30deg, rgba(253,249,247,0.04) 0px, rgba(253,249,247,0.04) 1px, transparent 1px, transparent 20px),
                              repeating-linear-gradient(-30deg, rgba(253,249,247,0.03) 0px, rgba(253,249,247,0.03) 1px, transparent 1px, transparent 20px)
                            `,
                          }}
                        />
                      )}
                      {/* Large decorative icon — only for CSS placeholder blocks */}
                      {!industryImages[industry.id] && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span style={{ fontSize: '6rem', opacity: 0.12, filter: 'blur(2px)' }}>
                            {industry.icon}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-8 left-8">
                        <div
                          className="display-heading"
                          style={{ fontSize: '3rem', color: 'rgba(253,249,247,0.2)', lineHeight: 1 }}
                        >
                          {String(industry.id).padStart(2, '0')}
                        </div>
                        <p
                          className="text-sm font-semibold tracking-widest uppercase mt-2"
                          style={{ color: 'rgba(253,249,247,0.5)', letterSpacing: '0.15em', fontSize: '0.65rem' }}
                        >
                          {industry.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-25" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
          <AnimateIn>
            <h3
              className="display-heading mb-4"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FDF9F7' }}
            >
              Your industry. Our wool.
            </h3>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-brand-border max-w-xl mx-auto mb-8" style={{ lineHeight: '1.8' }}>
              Whether you&apos;re in carpet, felt, knitting or any other wool-based manufacturing, we have the experience, the supply and the quality to support your work.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
