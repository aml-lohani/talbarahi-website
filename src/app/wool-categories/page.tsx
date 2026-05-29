import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import SectionHeader from '@/components/SectionHeader';
import { woolCategories } from '@/lib/content';

export const metadata: Metadata = {
  title: 'New Zealand Wool Categories — Raw, Carded, Dyed, Fine Micron & More',
  description:
    'Explore Tal Barahi Handicraft\'s full range of New Zealand wool: raw white, natural coloured, carded, dyed, fine micron merino, carpet-grade, felting and bulk industrial supply. Available for Nepal\'s craft industries.',
  keywords: [
    'New Zealand wool types Nepal',
    'raw wool supplier Nepal',
    'carded wool Nepal',
    'dyed wool Nepal',
    'fine micron merino wool Nepal',
    'carpet grade wool Nepal',
    'felting wool supplier Nepal',
    'bulk industrial wool Nepal',
    'wool grades Kathmandu',
    'merino wool supplier Nepal',
    'natural wool Nepal',
    'coloured wool Nepal',
  ],
  openGraph: {
    title: 'Wool Categories | Tal Barahi Handicraft',
    description: 'Raw, carded, dyed, fine micron and bulk industrial New Zealand wool — the complete range for Nepal\'s carpet, felt and knitting industries.',
    images: [{ url: '/images/hero/sheep-farm-nz.jpg', width: 1200, height: 630, alt: 'New Zealand sheep farm pastoral' }],
  },
  alternates: { canonical: 'https://www.talbarahihandicraft.com.np/wool-categories' },
};

const categoryImages: Record<number, string> = {
  1: '/images/gallery/raw-scoured-wool-new.webp',    // Raw/Scoured Wool
  2: '/images/products/natural-wool-raw.jpeg',        // Natural Wool
  3: '/images/products/dyed-wool-rolls.jpg',          // Colored & Dyed Wool
  4: '/images/products/carded-white-wool.jpeg',       // Carded Wool
  5: '/images/gallery/sheep-shearing-detail.jpg',    // Uncarded Wool
  6: '/images/products/carpet-wool-natural.webp',     // Carpet Wool
  7: '/images/products/felting-wool-roving.jpg',      // Felting Wool
  8: '/images/products/wool-samples-sunlit.jpg',      // Fine Micron Wool
  9: '/images/gallery/wool-knitting.webp',           // Knitting Yarn Wool
  10: '/images/gallery/wool-bales-warehouse.jpg',    // Industrial Bulk Supply
};

const categoryObjectPos: Record<number, string> = {
  1: 'center 80%',
  2: 'center 40%',
  3: 'center center',
  4: 'center center',
  5: 'center center',
  6: 'center center',
  7: 'center center',
  8: 'center center',
  9: 'center center',
  10: 'center center',
};

export default function WoolCategoriesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <Image
          src="/images/hero/sheep-farm-nz.jpg"
          alt="New Zealand sheep farm — source of premium wool"
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
          style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 40%, rgba(139,44,44,0.1) 0%, transparent 65%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Our Wool Range</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              Premium New Zealand Wool Categories
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl mt-6 leading-relaxed" style={{ lineHeight: '1.8' }}>
              We supply a comprehensive range of wool forms, grades and preparations, each selected for quality, consistency and suitability for Nepal&apos;s diverse manufacturing industries.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── WOOL INTRO ─── */}
      <section className="py-20 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Source', value: '100% New Zealand', desc: 'All wool sourced exclusively from New Zealand farms, the global benchmark for quality.' },
              { label: 'Grading', value: 'IWTO Standards', desc: 'Every batch graded and documented to International Wool Textile Organisation standards.' },
              { label: 'Supply', value: 'Consistent & Reliable', desc: 'Scheduled imports and consistent batch quality, so your production planning is never disrupted.' },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 0.1}>
                <div
                  className="p-8 rounded-sm"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  <span className="section-eyebrow">{item.label}</span>
                  <div
                    className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-3"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {item.value}
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed" style={{ lineHeight: '1.75' }}>
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES GRID ─── */}
      <section className="py-24 wool-texture-bg relative overflow-hidden">
        <div className="grain-overlay opacity-40" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-10" staggerDelay={0.08}>
            {woolCategories.map((wool) => (
              <StaggerItem key={wool.id}>
                <div
                  className="rounded-sm overflow-hidden card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0', boxShadow: '0 4px 24px rgba(139,44,44,0.06)' }}
                >
                  {/* Wool visual */}
                  <div
                    className="relative h-48 flex items-end p-6"
                    style={{ background: wool.color }}
                  >
                    {/* Real photo */}
                    <Image
                      src={categoryImages[wool.id]}
                      alt={wool.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: categoryObjectPos[wool.id] ?? 'center center' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Dark gradient — bottom-heavy for label readability */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(43,43,41,0.72) 0%, rgba(43,43,41,0.18) 55%, transparent 100%)' }}
                    />
                    <div className="grain-overlay opacity-30" />

                    <div className="relative z-10 flex items-center justify-between w-full">
                      <div>
                        <span
                          className="text-xs px-2.5 py-1 rounded-sm font-sans font-semibold tracking-widest uppercase"
                          style={{ background: wool.accent, color: '#FDF9F7', fontSize: '0.6rem', letterSpacing: '0.1em' }}
                        >
                          {wool.category}
                        </span>
                      </div>
                      <div
                        className="text-right font-sans text-xs font-semibold"
                        style={{ color: 'rgba(253,249,247,0.75)' }}
                      >
                        {wool.micron}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2
                      className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-3"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {wool.name}
                    </h2>
                    <p className="text-brand-muted text-sm leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                      {wool.description}
                    </p>

                    <div className="pt-6 border-t border-brand-border">
                      <span className="text-xs font-semibold text-brand-charcoal tracking-wider uppercase mb-3 block" style={{ letterSpacing: '0.1em' }}>
                        Suitable For
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {wool.applications.map((app) => (
                          <span
                            key={app}
                            className="text-xs px-3 py-1.5 rounded-sm font-sans"
                            style={{ background: 'rgba(139,44,44,0.07)', color: '#8B2C2C', border: '1px solid rgba(139,44,44,0.12)' }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-cream border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <AnimateIn>
            <h3
              className="serif-heading text-3xl italic font-semibold text-brand-charcoal mb-4"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Looking for a specific wool grade or form?
            </h3>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-brand-muted mb-8 max-w-xl mx-auto">
              We can discuss your exact requirements and ensure the right wool specification for your manufacturing process.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link href="/contact" className="btn-primary">
              Discuss Your Requirements
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
