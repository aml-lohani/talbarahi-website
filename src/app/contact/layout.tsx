import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch with Our Kathmandu Team',
  description:
    'Reach out to Tal Barahi Handicraft for wool enquiries, bulk sourcing, quality specifications or any questions about our New Zealand wool supply. Based in Mulpani, Kathmandu.',
  keywords: [
    'contact wool supplier Nepal',
    'wool enquiry Kathmandu',
    'bulk wool order Nepal',
    'New Zealand wool enquiry',
    'wool sourcing contact',
    'Tal Barahi contact',
    'Kathmandu wool supplier contact',
    'wool import enquiry Nepal',
  ],
  openGraph: {
    title: 'Contact Us | Tal Barahi Handicraft',
    description: 'Get in touch with our Kathmandu team for wool enquiries, bulk sourcing and quality information. We respond within 1–2 business days.',
    images: [{ url: '/images/hero/boudhanath-stupa.jpg', width: 1200, height: 630, alt: 'Boudhanath Stupa, Kathmandu Nepal' }],
  },
  alternates: { canonical: 'https://www.talbarahihandicraft.com.np/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
