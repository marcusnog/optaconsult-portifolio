import { SectionTitle } from '../ui/SectionTitle';

const PROJETOS = [
  {
    id: 1,
    title: 'Plataforma de Gestão Empresarial',
    description: 'Sistema integrado para gestão de operações, faturação e reporting em tempo real.',
    image: 'https://placehold.co/600x400/1C1D21/DAAC55?text=Projeto+1',
    tags: ['Web', 'Integração'],
  },
  {
    id: 2,
    title: 'Aplicação Móvel de Serviços',
    description: 'App nativa para reserva e acompanhamento de serviços no terreno.',
    image: 'https://placehold.co/600x400/1C1D21/DAAC55?text=Projeto+2',
    tags: ['Mobile', 'UX'],
  },
  {
    id: 3,
    title: 'Migração para Cloud',
    description: 'Modernização da infraestrutura e migração segura para ambiente cloud.',
    image: 'https://placehold.co/600x400/1C1D21/DAAC55?text=Projeto+3',
    tags: ['Cloud', 'DevOps'],
  },
];

export function Projetos() {
  return (
    <section
      id="projetos"
      className="py-[var(--section-padding-y)] bg-charcoal/50"
      aria-labelledby="projetos-title"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)]">
        <SectionTitle subtitle="Portefólio" title="Casos de estudo" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJETOS.map((projeto) => (
            <article
              key={projeto.id}
              className="group overflow-hidden rounded-lg bg-black/50 border border-charcoal hover:border-gold/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={projeto.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {projeto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-gold/90 bg-gold/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-gold transition-colors">
                  {projeto.title}
                </h3>
                <p className="text-text-muted text-sm">{projeto.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
