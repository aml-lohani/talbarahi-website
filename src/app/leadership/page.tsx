'use client';

import Image from 'next/image';
import AnimateIn, { AnimateStagger, StaggerItem } from '@/components/AnimateIn';
import { directors } from '@/lib/content';

const companyValues = [
  'Trust through consistency',
  'Deep industry knowledge',
  'Long-term partnerships',
  'Authentic relationships',
  'Quality as a promise',
  'Supporting Nepal\'s craft legacy',
];

export default function LeadershipPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <Image
          src="/images/team-wool-inspection.jpg"
          alt="Tal Barahi founding partners at a New Zealand farm"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(43,43,41,0.82)' }} />
        <div className="grain-overlay opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 40% 60%, rgba(139,44,44,0.12) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>The People Behind the Company</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              Four Partners. Three Decades. One Mission.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-2xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              Tal Barahi Handicraft was built by four founding partners whose collective expertise, relationships, and commitment to quality have guided the company for over three decades.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── DIRECTORS ─── */}
      <section className="py-28 md:py-36 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-35" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" staggerDelay={0.12}>
            {directors.map((director, i) => (
              <StaggerItem key={director.id}>
                <div
                  className="rounded-sm overflow-hidden card-hover"
                  style={{ background: '#FFFFFF', border: '1px solid #E0D5D0', boxShadow: '0 4px 24px rgba(139,44,44,0.06)' }}
                >
                  {/* Portrait area */}
                  <div
                    className="relative overflow-hidden"
                    style={{
                      height: '300px',
                      background: i % 4 === 0 ? '#3D3530' : i % 4 === 1 ? '#4A3828' : i % 4 === 2 ? '#302B28' : '#3A3530',
                    }}
                  >
                    {/* Real photo */}
                    {'photo' in director && director.photo && (
                      <Image
                        src={director.photo as string}
                        alt={director.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}

                    <div className={`grain-overlay ${'photo' in director && director.photo ? 'opacity-20' : 'opacity-60'}`} />
                    {/* Decorative woven pattern — only for placeholder */}
                    {!('photo' in director && director.photo) && (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            repeating-linear-gradient(0deg, rgba(224,213,208,0.05) 0px, rgba(224,213,208,0.05) 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, rgba(224,213,208,0.04) 0px, rgba(224,213,208,0.04) 1px, transparent 1px, transparent 20px)
                          `,
                        }}
                      />
                    )}
                    {/* Director number / decorative element */}
                    <div className="absolute top-6 right-6">
                      <div
                        className="w-12 h-12 rounded-sm flex items-center justify-center"
                        style={{ border: '1px solid rgba(224,213,208,0.15)', background: 'rgba(253,249,247,0.04)', backdropFilter: 'blur(4px)' }}
                      >
                        <span
                          className="display-heading"
                          style={{ fontSize: '1.4rem', color: 'rgba(224,213,208,0.5)', lineHeight: 1 }}
                        >
                          {String(director.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Silhouette placeholder — only when no photo */}
                    {!('photo' in director && director.photo) && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          viewBox="0 0 120 160"
                          className="w-28 h-36"
                          style={{ opacity: 0.1 }}
                          fill="rgba(224,213,208,1)"
                        >
                          <circle cx="60" cy="45" r="28" />
                          <path d="M10 160 Q10 100 60 95 Q110 100 110 160 Z" />
                        </svg>
                      </div>
                    )}

                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Title tag */}
                    <div className="absolute bottom-5 left-6">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: 'rgba(139,44,44,0.9)', fontSize: '0.6rem', letterSpacing: '0.12em' }}
                      >
                        {director.title}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2
                      className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-4"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {director.name}
                    </h2>
                    <div className="w-8 h-px bg-brand-crimson mb-5" />
                    <p className="text-brand-muted text-sm leading-relaxed" style={{ lineHeight: '1.85' }}>
                      {director.bio}
                    </p>
                    <div className="mt-6 pt-5 border-t border-brand-border">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase text-brand-muted"
                        style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}
                      >
                        Est. 1990s · Kathmandu, Nepal
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ─── SHARED VALUES ─── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#F5EDE8' }}>
        <div className="grain-overlay opacity-50" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimateIn>
                <span className="section-eyebrow">What We Believe In</span>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2
                  className="serif-heading text-4xl italic font-semibold text-brand-charcoal mt-2 mb-6"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Principles Shared Across Three Decades
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <div className="w-10 h-px bg-brand-crimson mb-8" />
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-brand-muted leading-relaxed" style={{ lineHeight: '1.85' }}>
                  Despite their different areas of expertise, our four founding directors have always been united by the same fundamental beliefs — about quality, relationships, and what it means to be a trustworthy partner in Nepal&apos;s craft ecosystem.
                </p>
              </AnimateIn>
            </div>
            <AnimateStagger className="grid grid-cols-2 gap-3" staggerDelay={0.08}>
              {companyValues.map((value) => (
                <StaggerItem key={value}>
                  <div
                    className="p-5 rounded-sm"
                    style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-crimson mt-2 flex-shrink-0" />
                      <p className="text-sm font-medium text-brand-charcoal">{value}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </AnimateStagger>
          </div>
        </div>
      </section>

      {/* Legacy quote */}
      <section className="py-20 bg-brand-charcoal relative overflow-hidden">
        <div className="grain-overlay opacity-25" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative z-10">
          <AnimateIn>
            <div
              className="display-heading mb-6"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: '#FDF9F7', lineHeight: 1.3 }}
            >
              &ldquo;We did not build a company. We built relationships. The company followed.&rdquo;
            </div>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-brand-border text-sm">
              — Founding Philosophy, Tal Barahi Handicraft
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
