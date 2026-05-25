import AnimateIn from './AnimateIn';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const headingColor = light ? 'text-brand-cream' : 'text-brand-charcoal';
  const eyebrowColor = light ? 'text-brand-border' : 'text-brand-crimson';
  const subheadingColor = light ? 'text-brand-border' : 'text-brand-muted';

  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      {eyebrow && (
        <AnimateIn delay={0}>
          <span className={`section-eyebrow ${eyebrowColor}`}>{eyebrow}</span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.1}>
        <h2
          className={`serif-heading text-4xl md:text-5xl lg:text-6xl ${headingColor} max-w-3xl`}
          style={{ fontStyle: 'italic' }}
        >
          {heading}
        </h2>
      </AnimateIn>
      {subheading && (
        <AnimateIn delay={0.2}>
          <p
            className={`mt-5 text-base leading-relaxed ${subheadingColor} max-w-2xl`}
            style={{ lineHeight: '1.75' }}
          >
            {subheading}
          </p>
        </AnimateIn>
      )}
      <AnimateIn delay={0.25}>
        <div
          className={`mt-6 w-16 h-px bg-brand-crimson ${align === 'center' ? 'mx-auto' : ''}`}
        />
      </AnimateIn>
    </div>
  );
}
