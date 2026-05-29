import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery — From New Zealand Farm to Kathmandu Workshop',
  description:
    'A visual journey through Tal Barahi Handicraft\'s world — New Zealand pastoral farms, wool inspection at source, SGS testing facilities, and Kathmandu\'s artisan operations.',
  keywords: [
    'New Zealand wool farm photos',
    'Kathmandu wool workshop',
    'wool sourcing gallery',
    'sheep shearing New Zealand',
    'wool bale storage Kathmandu',
    'wool dyeing Nepal',
    'wool supply chain photos',
    'Tal Barahi gallery',
  ],
  openGraph: {
    title: 'Gallery | Tal Barahi Handicraft',
    description: 'From New Zealand pastoral farms to Kathmandu artisan workshops — a visual record of our wool sourcing and operations.',
    images: [{ url: '/images/hero/team-wool-inspection-nz.jpg', width: 1200, height: 630, alt: 'Tal Barahi team visiting New Zealand wool farm' }],
  },
  alternates: { canonical: 'https://www.talbarahihandicraft.com.np/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
