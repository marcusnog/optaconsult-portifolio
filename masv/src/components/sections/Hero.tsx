import { Button } from '../ui/Button';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      {/* Círculos concêntricos dourados */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-gold/20" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-[10%] rounded-full border border-gold/30" />
        <div className="absolute inset-[20%] rounded-full border border-gold/40" />
        <div className="absolute inset-[30%] rounded-full border border-gold/20" />
        <div className="absolute inset-[40%] rounded-full border border-gold/10" />
      </div>

      {/* Linhas diagonais */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={100 - i * 10}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity={0.5 - i * 0.03}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center px-[var(--section-padding-x)] max-w-4xl mx-auto">
        <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">
          Consultoria Tecnológica
        </p>
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
        >
          Transformamos ideias em{' '}
          <span className="text-gold">soluções digitais</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          A Optaconsult apoia empresas na sua transformação digital, com estratégia, inovação e excelência técnica.
        </p>
        <Button onClick={() => scrollToSection('servicos')}>
          Conheça os nossos serviços
        </Button>
      </div>
    </section>
  );
}
