import { Conteudo } from './Componentes/body/Conteudo';
import { Fundo } from './Componentes/body/Fundo';
import { Nav } from './Componentes/header/Nav';
import { Titulo } from './Componentes/header/Titulo';
import { Footer } from './Componentes/footer/RodaPe';

export default function App() {
  return (
    <>
      <header>
        <Titulo />
      </header>

      <Nav />

      <main>
        <Fundo />
        <Conteudo />
      </main>

      <Footer />
    </>
  );
}
