import { useEffect, useState } from 'react';

const SECTION_IDS = ['hero', 'sobre', 'servicos', 'projetos', 'equipa', 'contacto'];

export function useScrollSpy() {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTION_IDS[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(SECTION_IDS[i]);
          return;
        }
      }
      setActiveId('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeId;
}
