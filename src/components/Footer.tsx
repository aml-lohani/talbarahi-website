import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Company: [
    { href: '/about', label: 'Our Story' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/insights', label: 'Insights' },
  ],
  Products: [
    { href: '/wool-categories', label: 'Wool Categories' },
    { href: '/industries', label: 'Industries' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Get a Quote' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Tal Barahi Handicraft"
                width={44}
                height={44}
                className="w-11 h-11 brightness-0 invert opacity-80"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-semibold text-brand-cream leading-tight"
                  style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '-0.01em' }}
                >
                  Tal Barahi Handicraft
                </span>
                <span className="text-xs text-brand-border tracking-widest uppercase mt-0.5" style={{ fontSize: '0.6rem' }}>
                  Est. Kathmandu, Nepal
                </span>
              </div>
            </Link>
            <p className="text-sm text-brand-border leading-relaxed max-w-xs mb-6" style={{ lineHeight: '1.8' }}>
              Premium New Zealand wool, supplied with trust and consistency to Nepal&apos;s carpet, felt, and textile industries for over three decades.
            </p>
            <div className="space-y-2 text-sm text-brand-border">
              <p>Mulpani, Kathmandu, Nepal</p>
              <p>info@talbarahihandicraft.com.np</p>
              <p>+977 9851063891</p>
              <p>+977 9851060473</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs font-semibold tracking-widest uppercase text-brand-border mb-6"
                style={{ letterSpacing: '0.15em' }}
              >
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-cream opacity-70 hover:opacity-100 transition-opacity duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-wrap gap-3">
            {['100% New Zealand Wool', 'SGS Tested', 'IWTO Certified', 'Mulesing-Free', 'AZO-Free Dyes'].map((cert) => (
              <span
                key={cert}
                className="text-xs px-3 py-1.5 border border-white/15 text-brand-border rounded-sm tracking-wide"
                style={{ fontSize: '0.65rem', letterSpacing: '0.08em' }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-border opacity-50">
            © {new Date().getFullYear()} Tal Barahi Handicraft. All rights reserved. Kathmandu, Nepal.
          </p>
          <p className="text-xs text-brand-border opacity-40 italic" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
            Three Decades of Trust. One Standard of Quality.
          </p>
        </div>
      </div>
    </footer>
  );
}
