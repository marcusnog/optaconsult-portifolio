import { SectionTitle } from '../ui/SectionTitle';

const VALORES = [
  {
    title: 'Inovação',
    description: 'Exploramos tecnologias emergentes para entregar soluções à frente do mercado.',
  },
  {
    title: 'Excelência',
    description: 'Comprometemo-nos com a qualidade em cada projeto e em cada detalhe.',
  },
  {
    title: 'Parceria',
    description: 'Trabalhamos lado a lado com os nossos clientes como extensão da equipa.',
  },
];

export function Sobre() {
  return (
    <section
      id="sobre"
      className="py-[var(--section-padding-y)] bg-charcoal/50 relative"
      aria-labelledby="sobre-title"
    >
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={i * 15}
              y1="0"
              x2="100"
              y2={i * 15}
              stroke="currentColor"
              strokeWidth="0.5"
              opacity={0.4}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)] relative">
        <SectionTitle subtitle="Sobre Nós" title="A nossa missão" />
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-muted leading-relaxed">
            A Optaconsult nasceu da vontade de aproximar a tecnologia às empresas que pretendem evoluir.
            Somos uma equipa de especialistas em consultoria tecnológica, focada em ajudar as organizações
            a alcançar os seus objetivos através de soluções digitais robustas e escaláveis.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {VALORES.map((valor) => (
            <div
              key={valor.title}
              className="p-6 rounded-lg bg-black/50 border border-charcoal hover:border-gold/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gold mb-3">{valor.title}</h3>
              <p className="text-text-muted">{valor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
