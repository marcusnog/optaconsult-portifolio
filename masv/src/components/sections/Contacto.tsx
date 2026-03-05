import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function Contacto() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section
      id="contacto"
      className="py-[var(--section-padding-y)] bg-charcoal/50"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)]">
        <SectionTitle subtitle="Fale connosco" title="Contacto" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Informações de contacto
            </h3>
            <ul className="space-y-4 text-text-muted">
              <li>
                <span className="text-gold font-medium block mb-1">Email</span>
                <a
                  href="mailto:contacto@optaconsult.pt"
                  className="hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  contacto@optaconsult.pt
                </a>
              </li>
              <li>
                <span className="text-gold font-medium block mb-1">Telefone</span>
                <a
                  href="tel:+351210000000"
                  className="hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  +351 210 000 000
                </a>
              </li>
              <li>
                <span className="text-gold font-medium block mb-1">Morada</span>
                <address className="not-italic">
                  Av. da Liberdade, 1000
                  <br />
                  Lisboa, Portugal
                </address>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-labelledby="contacto-title"
          >
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-text-primary mb-2">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                name="nome"
                required
                className="w-full px-4 py-3 bg-black border border-charcoal rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-text-primary placeholder-text-muted"
                placeholder="O seu nome"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-black border border-charcoal rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-text-primary placeholder-text-muted"
                placeholder="o seu@email.pt"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-text-primary mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                className="w-full px-4 py-3 bg-black border border-charcoal rounded focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-text-primary placeholder-text-muted resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full md:w-auto px-8 py-3 bg-gold text-black font-medium rounded hover:bg-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50"
            >
              {status === 'loading' ? 'A enviar...' : status === 'success' ? 'Mensagem enviada' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
