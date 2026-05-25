import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Tal Barahi Handicraft | Premium New Zealand Wool · Kathmandu, Nepal',
    template: '%s | Tal Barahi Handicraft',
  },
  description:
    'For over three decades, Tal Barahi Handicraft has supplied premium New Zealand wool to Nepal\'s carpet, felt, knitting, and textile industries. Trusted quality, certified sourcing, Kathmandu-based.',
  keywords: [
    'New Zealand wool Nepal',
    'wool supplier Kathmandu',
    'carpet wool Nepal',
    'felting wool supplier',
    'Tal Barahi Handicraft',
    'wool import Nepal',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Tal Barahi Handicraft',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
