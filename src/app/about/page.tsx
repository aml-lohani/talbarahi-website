'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import SectionHeader from '@/components/SectionHeader';
import { timeline } from '@/lib/content';

const values = [
  {
    title: 'Trust Above All',
    description: 'Our business is built on decades of kept promises. Manufacturers across Nepal rely on us because we have never compromised on consistency or quality.',
  },
  {
    title: 'Authentic Relationships',
    description: 'We are not a transactional supplier. We are a long-term partner who understands the seasonal cycles, quality requirements, and production pressures of each industry we serve.',
  },
  {
    title: 'Expertise in Wool',
    description: 'Three decades of wool trading has given us a deep, practical understanding of fiber — from micron grades to felting properties to dye uptake characteristics.',
  },
  {
    title: 'Supporting Nepal\'s Craft Legacy',
    description: 'We see ourselves as part of a larger story — the story of Nepalese craftsmanship. Our wool goes into carpets and textiles that carry Nepal\'s identity into homes around the world.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="pt-40 pb-24 relative overflow-hidden"
        style={{ background: '#2B2B29' }}
      >
        <div className="grain-overlay opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 20% 60%, rgba(139,44,44,0.12) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Our Story</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              From Humble Roots to Heritage Brand
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              The story of Tal Barahi Handicraft is the story of four partners, deep industry knowledge, and an unwavering commitment to the craftspeople of Nepal.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── FOUNDING STORY ─── */}
      <section className="py-28 md:py-36 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <AnimateIn>
                <h2
                  className="serif-heading text-4xl md:text-5xl italic text-brand-charcoal mb-8"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  A Venture Born from Vision and Craft
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="w-12 h-px bg-brand-crimson mb-8" />
              </AnimateIn>
              <div className="space-y-5 text-brand-muted" style={{ lineHeight: '1.85' }}>
                {[
                  'In the early 1990s, Kathmandu was a city of growing textile ambition. Nepal\'s carpet industry was flourishing, its handicraft sector was gaining international recognition, and the demand for quality raw materials was rising across the valley.',
                  'Four partners — each bringing their own expertise, network, and entrepreneurial spirit — came together with a shared belief: that the quality of Nepal\'s craftsmanship depended on the quality of its materials.',
                  'They started modestly, in the world of wool dyeing and Pashmina — industries that require deep knowledge of fiber, color, and process. Through this hands-on work, they built not just a business, but a genuine understanding of what Nepalese manufacturers needed.',
                  'Over the years, relationships deepened. Word spread through the carpet industry, the felt sector, the knitting mills. Tal Barahi became known not as a supplier, but as a partner — one that understood your business and delivered consistently.',
                  'The defining moment came in the early 2000s, when the company began importing premium sheep wool directly from New Zealand. It was a decision that would shape the next two decades and place Tal Barahi at the heart of Nepal\'s wool supply ecosystem.',
                ].map((para, i) => (
                  <AnimateIn key={i} delay={0.1 + i * 0.05}>
                    <p>{para}</p>
                  </AnimateIn>
                ))}
              </div>
            </div>

            {/* Decorative stat panel */}
            <div className="space-y-6">
              <AnimateIn direction="left">
                <div
                  className="p-8 rounded-sm"
                  style={{ background: '#8B2C2C' }}
                >
                  <div
                    className="display-heading mb-3"
                    style={{ fontSize: '5rem', color: '#FDF9F7', lineHeight: 1 }}
                  >
                    30+
                  </div>
                  <p className="text-brand-cream font-semibold mb-2">Years of Industry Service</p>
                  <p className="text-sm opacity-70" style={{ color: '#FDF9F7', lineHeight: '1.7' }}>
                    Over three decades of consistent, trusted supply to Nepal&apos;s carpet, felt, and textile industries.
                  </p>
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={0.1}>
                <div
                  className="p-8 rounded-sm"
                  style={{ background: '#F5EDE8', border: '1px solid #E0D5D0' }}
                >
                  <h4
                    className="serif-heading text-2xl italic text-brand-charcoal mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    &ldquo;Quality is not what you promise. It is what your customers have come to expect.&rdquo;
                  </h4>
                  <p className="text-brand-muted text-sm">— Founding Philosophy</p>
                </div>
              </AnimateIn>

              <AnimateIn direction="left" delay={0.2}>
                <div
                  className="p-8 rounded-sm"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: '4', label: 'Founding Partners' },
                      { value: 'NZ', label: 'Wool Origin' },
                      { value: '7+', label: 'Industries Served' },
                      { value: 'KTM', label: 'Based in Kathmandu' },
                    ].map((stat) => (
                      <div key={stat.value}>
                        <div
                          className="display-heading text-brand-crimson"
                          style={{ fontSize: '2.5rem', lineHeight: 1 }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-brand-muted text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Kathmandu photo panel */}
              <AnimateIn direction="left" delay={0.3}>
                <div
                  className="rounded-sm relative overflow-hidden"
                  style={{ height: '260px' }}
                >
                  <Image
                    src="/images/boudhanath-stupa.jpg"
                    alt="Boudhanath Stupa, Kathmandu — our home for over three decades"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(43,43,41,0.82) 0%, rgba(43,43,41,0.2) 55%, transparent 100%)' }}
                  />
                  <div className="grain-overlay opacity-30" />
                  <div className="absolute bottom-5 left-6">
                    <p
                      className="font-sans font-semibold tracking-widest uppercase mb-1"
                      style={{ color: 'rgba(253,249,247,0.5)', fontSize: '0.6rem', letterSpacing: '0.18em' }}
                    >
                      Kathmandu, Nepal
                    </p>
                    <p
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1.05rem',
                        fontStyle: 'italic',
                        color: '#FDF9F7',
                        lineHeight: 1.35,
                      }}
                    >
                      Our home for over three decades.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: '#F5EDE8' }}>
        <div className="grain-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="Our Journey"
            heading="Three Decades in the Making"
            subheading="The story of Tal Barahi is one of patient growth — built on relationships, deepened by expertise, and sustained by trust."
          />

          <div className="relative max-w-4xl mx-auto">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, transparent, #E0D5D0 10%, #E0D5D0 90%, transparent)' }}
            />

            <div className="space-y-1">
              {timeline.map((item, i) => (
                <AnimateIn key={item.year} delay={i * 0.1}>
                  <div className="flex gap-10 py-8 relative">
                    <div className="flex-shrink-0 w-12 relative">
                      <div
                        className="absolute left-0 top-8 w-3 h-3 rounded-full border-2 border-brand-crimson"
                        style={{ background: '#FDF9F7', transform: 'translateX(calc(1rem - 1.5px))' }}
                      />
                    </div>
                    <div className="flex-1 pb-8 border-b border-brand-border last:border-0">
                      <span
                        className="text-brand-crimson font-sans font-semibold text-xs tracking-widest uppercase mb-2 block"
                        style={{ letterSpacing: '0.12em' }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-3"
                        style={{ fontFamily: '"Cormorant Garamond", serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed" style={{ lineHeight: '1.8' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-28 md:py-36 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-25" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="What Guides Us"
            heading="Our Values and Commitments"
            light
          />
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div
                  className="p-8 rounded-sm h-full"
                  style={{ border: '1px solid rgba(224,213,208,0.12)', background: 'rgba(253,249,247,0.04)' }}
                >
                  <div className="w-8 h-px bg-brand-crimson mb-6" />
                  <h3
                    className="serif-heading text-2xl italic font-semibold mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif', color: '#FDF9F7' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-brand-border leading-relaxed text-sm" style={{ lineHeight: '1.8' }}>
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimateIn direction="left">
            <h3
              className="serif-heading text-3xl italic font-semibold text-brand-charcoal"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Meet the people behind the company.
            </h3>
          </AnimateIn>
          <AnimateIn direction="right">
            <Link href="/leadership" className="btn-primary flex-shrink-0">
              Meet Our Directors
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
