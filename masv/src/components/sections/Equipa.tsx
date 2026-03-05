import { SectionTitle } from '../ui/SectionTitle';

const MEMBROS = [
  {
    nome: 'Nome do Membro',
    cargo: 'Diretor de Consultoria',
    foto: 'https://placehold.co/400x400/1C1D21/DAAC55?text=1',
  },
  {
    nome: 'Nome do Membro',
    cargo: 'Lead Developer',
    foto: 'https://placehold.co/400x400/1C1D21/DAAC55?text=2',
  },
  {
    nome: 'Nome do Membro',
    cargo: 'Consultor de Negócio',
    foto: 'https://placehold.co/400x400/1C1D21/DAAC55?text=3',
  },
];

export function Equipa() {
  return (
    <section
      id="equipa"
      className="py-[var(--section-padding-y)]"
      aria-labelledby="equipa-title"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)]">
        <SectionTitle subtitle="Quem somos" title="A nossa equipa" />
        <div className="grid md:grid-cols-3 gap-8">
          {MEMBROS.map((membro, index) => (
            <article
              key={index}
              className="text-center group"
            >
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px] border-2 border-charcoal group-hover:border-gold/50 transition-colors duration-300">
                <img
                  src={membro.foto}
                  alt={`${membro.nome}, ${membro.cargo}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{membro.nome}</h3>
              <p className="text-gold text-sm">{membro.cargo}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
