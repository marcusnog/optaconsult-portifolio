import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Sobre } from './components/sections/Sobre';
import { Servicos } from './components/sections/Servicos';
import { Projetos } from './components/sections/Projetos';
import { Equipa } from './components/sections/Equipa';
import { Contacto } from './components/sections/Contacto';

function App() {
  return (
    <Layout>
      <Hero />
      <Sobre />
      <Servicos />
      <Projetos />
      <Equipa />
      <Contacto />
    </Layout>
  );
}

export default App;
