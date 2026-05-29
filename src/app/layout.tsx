import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const SITE_URL = 'https://www.talbarahihandicraft.com.np';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tal Barahi Handicraft | Premium New Zealand Wool Supplier — Kathmandu, Nepal',
    template: '%s | Tal Barahi Handicraft',
  },
  description:
    'Tal Barahi Handicraft has supplied premium New Zealand wool to Nepal\'s carpet, felt, knitting and textile industries since 1994. IWTO-certified, mulesing-free, SGS-tested. Based in Kathmandu.',
  keywords: [
    'New Zealand wool Nepal',
    'wool supplier Kathmandu',
    'premium wool Nepal',
    'carpet wool supplier Nepal',
    'felting wool Nepal',
    'knitting wool Nepal',
    'merino wool importer Nepal',
    'raw wool Nepal',
    'carded wool Nepal',
    'IWTO certified wool',
    'mulesing-free wool Nepal',
    'wool import Nepal',
    'Tal Barahi Handicraft',
    'wool wholesaler Kathmandu',
    'New Zealand wool importer Kathmandu',
    'bulk wool supply Nepal',
    'handicraft wool Nepal',
    'SGS tested wool Nepal',
  ],
  authors: [{ name: 'Tal Barahi Handicraft', url: SITE_URL }],
  creator: 'Tal Barahi Handicraft',
  publisher: 'Tal Barahi Handicraft',
  category: 'Wool & Textile Supply',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Tal Barahi Handicraft',
    title: 'Tal Barahi Handicraft | Premium New Zealand Wool Supplier — Kathmandu, Nepal',
    description:
      'For over three decades, Tal Barahi Handicraft has supplied certified New Zealand wool to Nepal\'s carpet, felt, knitting and textile industries. IWTO-certified. Mulesing-free.',
    images: [
      {
        url: '/images/hero/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Tal Barahi Handicraft — New Zealand Wool Supplier, Kathmandu Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tal Barahi Handicraft | Premium New Zealand Wool — Nepal',
    description:
      'Certified New Zealand wool for Nepal\'s carpet, felt, knitting and textile industries. Est. 1994, Kathmandu.',
    images: ['/images/hero/hero-bg.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Tal Barahi Handicraft',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/images/hero/hero-bg.jpg`,
      description:
        'Premium New Zealand wool supplier serving Nepal\'s carpet, felt, knitting and textile industries since 1994. IWTO-certified and mulesing-free.',
      foundingDate: '1994',
      email: 'info@talbarahihandicraft.com.np',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mulpani',
        addressLocality: 'Kathmandu',
        addressRegion: 'Bagmati Province',
        addressCountry: 'NP',
      },
      areaServed: [
        { '@type': 'Country', name: 'Nepal' },
      ],
      knowsAbout: [
        'New Zealand Wool',
        'Carpet Manufacturing',
        'Felt Production',
        'Knitting Industry',
        'Textile Manufacturing',
        'Wool Grading',
        'IWTO Standards',
      ],
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'Tal Barahi Handicraft',
      url: SITE_URL,
      image: `${SITE_URL}/images/hero/hero-bg.jpg`,
      description: 'Premium New Zealand wool supplier based in Kathmandu, Nepal, serving the carpet, felt, knitting and textile industries since 1994.',
      foundingDate: '1994',
      email: 'info@talbarahihandicraft.com.np',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mulpani',
        addressLocality: 'Kathmandu',
        addressRegion: 'Bagmati Province',
        addressCountry: 'NP',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.7172,
        longitude: 85.3240,
      },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Tal Barahi Handicraft',
      description: 'Premium New Zealand wool supplier for Nepal\'s craft and manufacturing industries.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/wool-categories?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
