'use client';

import Link from 'next/link';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import SectionHeader from '@/components/SectionHeader';
import { certifications } from '@/lib/content';

const qualityPillars = [
  {
    title: 'Source Traceability',
    description: 'Every batch of wool is traceable back to its New Zealand farm origin. Country of origin documentation accompanies every consignment.',
  },
  {
    title: 'Laboratory Testing',
    description: 'Independent SGS laboratory testing verifies composition, grade, and safety compliance before wool is cleared for import.',
  },
  {
    title: 'Consistent Grading',
    description: 'IWTO-compliant micron grading and batch consistency ensures manufacturers receive the same quality in every order.',
  },
  {
    title: 'Dye Safety',
    description: 'Our colored and dyed wool uses exclusively AZO-free, non-toxic dye formulations — safe for workers and compliant with international export requirements.',
  },
  {
    title: 'Animal Welfare',
    description: 'All wool is sourced from mulesing-free operations — an increasingly required standard for international carpet and textile buyers.',
  },
  {
    title: 'Fire Safety',
    description: 'Wool\'s natural fire resistance is maintained throughout our supply chain — a key property for carpet and textile safety compliance globally.',
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 50% 80% at 70% 50%, rgba(139,44,44,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Certifications & Quality</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              International Standards. Genuine Sourcing.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              Our wool meets the standards that international manufacturers and exporters demand — backed by independent testing, certification documentation, and consistent supply chain practices.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CERTIFICATIONS GRID ─── */}
      <section className="py-28 md:py-36 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <div
                  className="p-8 rounded-sm h-full card-hover"
                  style={{
                    border: '1px solid rgba(224,213,208,0.12)',
                    background: 'rgba(253,249,247,0.04)',
                  }}
                >
                  {/* Badge */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-sm mb-6 font-bold tracking-widest font-sans"
                    style={{
                      background: '#8B2C2C',
                      color: '#FDF9F7',
                      fontSize: '0.6rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cert.icon}
                  </div>
                  <h3
                    className="serif-heading text-xl italic font-semibold text-brand-cream mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {cert.name}
                  </h3>
                  <p className="text-brand-border text-sm leading-relaxed" style={{ lineHeight: '1.8' }}>
                    {cert.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-crimson" />
                    <span className="text-xs text-brand-crimson font-semibold tracking-wider" style={{ fontSize: '0.7rem' }}>
                      Verified Standard
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ─── QUALITY PHILOSOPHY ─── */}
      <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: '#F5EDE8' }}>
        <div className="grain-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <SectionHeader
            eyebrow="Our Quality Approach"
            heading="What Quality Means to Us"
            subheading="For Tal Barahi, quality is not a checkbox. It is a promise we have kept to our customers for over three decades."
          />

          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {qualityPillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div
                  className="p-8 rounded-sm h-full card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                >
                  <div className="w-8 h-px bg-brand-crimson mb-6" />
                  <h3
                    className="serif-heading text-xl italic font-semibold text-brand-charcoal mb-4"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed" style={{ lineHeight: '1.8' }}>
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ─── NZ WOOL QUALITY ─── */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            className="rounded-sm p-12 md:p-16 relative overflow-hidden"
            style={{ background: '#8B2C2C' }}
          >
            <div className="grain-overlay opacity-40" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimateIn direction="left">
                  <span className="section-eyebrow" style={{ color: 'rgba(253,249,247,0.6)' }}>Why New Zealand</span>
                  <h2
                    className="display-heading mt-3 mb-5"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#FDF9F7', lineHeight: 1.05 }}
                  >
                    The World&apos;s Finest Wool. For Good Reason.
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(253,249,247,0.75)', lineHeight: '1.85' }}>
                    New Zealand&apos;s unique climate, vast pastoral lands, and generations of selective sheep breeding have produced the most consistently high-quality wool in the world — with exceptional fiber strength, natural brightness, and dye receptivity that sets it apart from other origins.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(253,249,247,0.75)', lineHeight: '1.85' }}>
                    For Nepal&apos;s carpet and textile industries, which export to discerning international buyers, New Zealand wool is not a preference — it is a quality standard. Tal Barahi has built its entire supply model around bringing this standard consistently to Nepal.
                  </p>
                </AnimateIn>
              </div>
              <AnimateStagger className="space-y-4" staggerDelay={0.1}>
                {[
                  { metric: 'Consistency', value: 'Batch-to-batch uniformity in micron, strength & colour' },
                  { metric: 'Brightness', value: 'Natural whiteness ideal for dyeing and colourfast textiles' },
                  { metric: 'Resilience', value: 'Outstanding pile recovery — critical for carpet durability' },
                  { metric: 'Welfare', value: 'Mulesing-free, responsibly farmed on open pastoral land' },
                ].map((item) => (
                  <StaggerItem key={item.metric}>
                    <div
                      className="flex gap-4 p-4 rounded-sm"
                      style={{ background: 'rgba(253,249,247,0.1)', border: '1px solid rgba(253,249,247,0.15)' }}
                    >
                      <div className="w-px bg-brand-cream opacity-30 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'rgba(253,249,247,0.55)', letterSpacing: '0.12em', fontSize: '0.65rem' }}>
                          {item.metric}
                        </span>
                        <p className="text-sm mt-1" style={{ color: 'rgba(253,249,247,0.85)' }}>{item.value}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </AnimateStagger>
            </div>
          </div>
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
              Quality documentation available upon request.
            </h3>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-brand-muted mb-8 max-w-xl mx-auto">
              We provide full certification and quality documentation for commercial buyers and export-focused manufacturers.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link href="/contact" className="btn-primary">
              Request Documentation
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
