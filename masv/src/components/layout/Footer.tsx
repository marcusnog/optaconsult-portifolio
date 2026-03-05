export function Footer() {
  return (
    <footer
      className="bg-charcoal border-t border-gold/20 py-12"
      role="contentinfo"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--section-padding-x)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-gold">Optaconsult</p>
            <p className="text-text-muted text-sm mt-1">
              Consultoria tecnológica de excelência
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <a
              href="mailto:contacto@optaconsult.pt"
              className="hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              contacto@optaconsult.pt
            </a>
            <a
              href="tel:+351210000000"
              className="hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              +351 210 000 000
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-charcoal text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Optaconsult. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
