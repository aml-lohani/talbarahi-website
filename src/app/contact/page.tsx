'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimateIn from '@/components/AnimateIn';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '', company: '', email: '', phone: '', industry: '', message: '', woolType: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1.125rem',
    background: '#FFFFFF',
    border: '1px solid #E0D5D0',
    borderRadius: '2px',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.875rem',
    color: '#2B2B29',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 bg-brand-charcoal relative overflow-hidden">
        <Image
          src="/images/hero/boudhanath-stupa.jpg"
          alt="Boudhanath Stupa, Kathmandu"
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
          style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(139,44,44,0.1) 0%, transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <AnimateIn>
            <span className="section-eyebrow" style={{ color: 'rgba(224,213,208,0.6)' }}>Get in Touch</span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1
              className="display-heading mt-3 mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#FDF9F7', lineHeight: 1.0 }}
            >
              Let&apos;s Start a Conversation
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-brand-border text-lg max-w-xl leading-relaxed" style={{ lineHeight: '1.8' }}>
              Whether you&apos;re a manufacturer, exporter or artisan, we would welcome the opportunity to understand your wool requirements and discuss how we can support your work.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section className="py-24 bg-brand-cream relative overflow-hidden">
        <div className="grain-overlay opacity-35" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

            {/* Info panel */}
            <div className="lg:col-span-2">
              <AnimateIn direction="left">
                <div className="space-y-10">
                  {/* Company info */}
                  <div>
                    <h3
                      className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-6"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      Tal Barahi Handicraft
                    </h3>
                    <div className="w-8 h-px bg-brand-crimson mb-8" />
                    <div className="space-y-5">
                      {[
                        {
                          label: 'Location',
                          value: 'Mulpani, Kathmandu, Nepal',
                          sub: 'Our home and operations base for over 30 years',
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 1C6.24 1 4 3.24 4 6c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5Z" stroke="#8B2C2C" strokeWidth="1.2"/>
                              <circle cx="9" cy="6" r="2" stroke="#8B2C2C" strokeWidth="1.2"/>
                            </svg>
                          ),
                        },
                        {
                          label: 'Source Origin',
                          value: 'New Zealand',
                          sub: '100% New Zealand sheep wool supply',
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <circle cx="9" cy="9" r="7" stroke="#8B2C2C" strokeWidth="1.2"/>
                              <path d="M2 9h14M9 2c-2 3-2 9 0 14M9 2c2 3 2 9 0 14" stroke="#8B2C2C" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                          ),
                        },
                        {
                          label: 'Established',
                          value: '1994',
                          sub: 'Over three decades of industry service',
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <rect x="2" y="3" width="14" height="13" rx="1" stroke="#8B2C2C" strokeWidth="1.2"/>
                              <path d="M2 7h14M6 1v4M12 1v4" stroke="#8B2C2C" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                          ),
                        },
                        {
                          label: 'Email',
                          value: 'info@talbarahihandicraft.com.np',
                          sub: 'Enquiries and sourcing requests',
                          icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <rect x="2" y="4" width="14" height="10" rx="1" stroke="#8B2C2C" strokeWidth="1.2"/>
                              <path d="M2 4l7 6 7-6" stroke="#8B2C2C" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                          ),
                        },
                      ].map((item) => (
                        <div key={item.label} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <span className="text-xs font-semibold tracking-widest uppercase text-brand-crimson block mb-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}>
                              {item.label}
                            </span>
                            <p className="text-brand-charcoal font-medium text-sm">{item.value}</p>
                            <p className="text-brand-muted text-xs mt-0.5">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Response promise */}
                  <div
                    className="p-6 rounded-sm"
                    style={{ background: 'rgba(139,44,44,0.06)', border: '1px solid rgba(139,44,44,0.12)' }}
                  >
                    <div className="w-6 h-px bg-brand-crimson mb-4" />
                    <p className="text-brand-charcoal text-sm font-medium mb-2">Our Response Promise</p>
                    <p className="text-brand-muted text-sm leading-relaxed" style={{ lineHeight: '1.75' }}>
                      We respond to all enquiries personally. Expect a response within 1–2 business days from our Kathmandu team.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-sm text-center"
                    style={{ background: '#FFFFFF', border: '1px solid #E0D5D0' }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'rgba(139,44,44,0.08)', border: '1px solid rgba(139,44,44,0.2)' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" stroke="#8B2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3
                      className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-3"
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      Message Received
                    </h3>
                    <p className="text-brand-muted leading-relaxed">
                      Thank you for reaching out. Our team will be in touch within 1–2 business days.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-sm overflow-hidden"
                    style={{ background: '#FFFFFF', border: '1px solid #E0D5D0', boxShadow: '0 4px 24px rgba(139,44,44,0.06)' }}
                  >
                    <div className="p-8 md:p-10">
                      <h3
                        className="serif-heading text-2xl italic font-semibold text-brand-charcoal mb-8"
                        style={{ fontFamily: '"Cormorant Garamond", serif' }}
                      >
                        Send an Enquiry
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                            Company / Business
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+977 or international"
                            style={inputStyle}
                            onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                            Your Industry
                          </label>
                          <select
                            name="industry"
                            value={formState.industry}
                            onChange={handleChange}
                            style={{ ...inputStyle, cursor: 'pointer' }}
                            onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                          >
                            <option value="">Select industry</option>
                            <option>Carpet Manufacturing</option>
                            <option>Felt Manufacturing</option>
                            <option>Knitting Industry</option>
                            <option>Textile Manufacturing</option>
                            <option>Handicraft Production</option>
                            <option>Export House</option>
                            <option>Artisan Studio</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                            Wool Type Interest
                          </label>
                          <select
                            name="woolType"
                            value={formState.woolType}
                            onChange={handleChange}
                            style={{ ...inputStyle, cursor: 'pointer' }}
                            onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                            onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                          >
                            <option value="">Select wool type</option>
                            <option>Raw White Wool</option>
                            <option>Natural Wool</option>
                            <option>Colored / Dyed Wool</option>
                            <option>Carded Wool</option>
                            <option>Carpet Wool</option>
                            <option>Felting Wool</option>
                            <option>Fine Micron Wool</option>
                            <option>Industrial Bulk Supply</option>
                            <option>Multiple / Unsure</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="block text-xs font-semibold text-brand-charcoal mb-2 tracking-wider uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your wool requirements, approximate quantities, quality specifications, or any questions you have..."
                          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                          onFocus={(e) => { e.target.style.borderColor = '#8B2C2C'; }}
                          onBlur={(e) => { e.target.style.borderColor = '#E0D5D0'; }}
                        />
                      </div>

                      <button type="submit" className="btn-primary w-full justify-center">
                        Send Enquiry
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>

                      <p className="text-xs text-brand-muted mt-4 text-center" style={{ lineHeight: '1.6' }}>
                        Your information is kept private and used only to respond to your enquiry.
                      </p>
                    </div>
                  </form>
                )}
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-brand-cream pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimateIn>
            <div
              className="rounded-sm overflow-hidden relative"
              style={{ height: '400px', border: '1px solid #E0D5D0', boxShadow: '0 4px 24px rgba(139,44,44,0.06)' }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Tal+Barahi+Handicraft,+Mulpani,+Kathmandu,+Nepal&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tal Barahi Handicraft location — Mulpani, Kathmandu, Nepal"
              />
            </div>
            <div className="flex items-center gap-2 mt-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4Z" stroke="#8B2C2C" strokeWidth="1.2"/>
                <circle cx="7" cy="5" r="1.5" stroke="#8B2C2C" strokeWidth="1.2"/>
              </svg>
              <p className="text-brand-muted text-xs">Mulpani, Kathmandu, Nepal &nbsp;·&nbsp;
                <a
                  href="https://share.google/SgtVMh6VldcKzw9VQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-crimson hover:underline"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
