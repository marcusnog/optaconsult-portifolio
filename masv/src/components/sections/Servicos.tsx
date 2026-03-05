import { SectionTitle } from '../ui/SectionTitle';

const SERVICOS = [
  {
    title: 'Consultoria Estratégica',
    description: 'Definição de roadmap tecnológico e análise de viabilidade para projetos digitais.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Desenvolvimento de Software',
    description: 'Soluções à medida, aplicações web e móveis desenvolvidas com as melhores práticas.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Transformação Digital',
    description: 'Acompanhamento na modernização de processos e adoção de novas tecnologias.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function Servicos() {
  return (
    <section
      id="servicos"
      className="py-[var(--section-padding-y)]"
      aria-labelledby="servicos-title"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)]">
        <SectionTitle subtitle="O que fazemos" title="Os nossos serviços" />
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICOS.map((servico) => (
            <article
              key={servico.title}
              className="group p-8 rounded-lg bg-charcoal/50 border border-charcoal hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="text-gold mb-6 group-hover:text-gold-light transition-colors">
                {servico.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{servico.title}</h3>
              <p className="text-text-muted leading-relaxed">{servico.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
