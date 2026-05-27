'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = { href: string; label: string };

const navLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/wool-categories', label: 'Wool' },
  { href: '/industries', label: 'Industries' },
  { href: '/certifications', label: 'Quality' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/insights', label: 'Insights' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: transparent ? 'rgba(253,249,247,0)' : 'rgba(253,249,247,0.97)',
          borderBottomColor: transparent ? 'rgba(224,213,208,0)' : 'rgba(224,213,208,0.8)',
          backdropFilter: transparent ? 'blur(0px)' : 'blur(12px)',
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ borderBottom: '1px solid' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Tal Barahi Handicraft"
              width={64}
              height={64}
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div className="flex flex-col leading-none">
              <span
                className="font-serif-heading text-lg font-semibold leading-tight"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  letterSpacing: '-0.01em',
                  color: transparent ? '#FDF9F7' : '#2B2B29',
                  transition: 'color 0.35s',
                }}
              >
                Tal Barahi
              </span>
              <span
                className="font-sans tracking-widest uppercase"
                style={{
                  fontSize: '0.6rem',
                  color: transparent ? 'rgba(253,249,247,0.6)' : '#666666',
                  transition: 'color 0.35s',
                }}
              >
                Handicraft
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                style={{ color: transparent ? '#FDF9F7' : undefined }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5">
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-crimson rounded"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-px bg-brand-charcoal"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-px bg-brand-charcoal"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-6 h-px bg-brand-charcoal"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-brand-cream flex flex-col pt-20"
          >
            <div className="overflow-y-auto flex-1 px-6 py-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-4 border-b border-brand-border text-2xl font-semibold italic ${
                        pathname === link.href ? 'text-brand-crimson' : 'text-brand-charcoal'
                      }`}
                      style={{ fontFamily: '"Cormorant Garamond", serif' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
