import { useState } from 'react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'equipa', label: 'Equipa' },
  { id: 'contacto', label: 'Contacto' },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-charcoal/50 transition-all duration-300"
      role="banner"
    >
      <a
        href="#hero"
        className="absolute left-4 -top-20 focus:top-4 focus:z-[60] px-4 py-2 bg-gold text-black rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('hero');
        }}
      >
        Saltar para conteúdo principal
      </a>
      <nav className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)] py-4" aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="text-xl font-bold text-gold tracking-tight hover:text-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            Optaconsult
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-text-primary hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul
            id="nav-menu"
            className={`absolute md:relative top-full left-0 right-0 md:top-0 flex flex-col md:flex-row gap-6 md:gap-8 py-6 md:py-0 px-[var(--section-padding-x)] md:px-0 bg-black md:bg-transparent border-t md:border-t-0 border-charcoal/50 ${isOpen ? 'block' : 'hidden md:flex'}`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`block py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded
                    ${activeId === item.id ? 'text-gold' : 'text-text-muted hover:text-gold'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
