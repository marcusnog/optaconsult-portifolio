interface SectionTitleProps {
  subtitle?: string;
  title: string;
}

export function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {subtitle && (
        <p className="text-gold font-medium uppercase tracking-widest text-sm mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" aria-hidden="true" />
    </div>
  );
}
