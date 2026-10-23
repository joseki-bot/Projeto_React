import { Conteudo } from './Componentes/body/Conteudo';
import { Fundo } from './Componentes/body/Fundo';
import { Nav } from './Componentes/header/Nav';
import { Titulo } from './Componentes/header/Titulo';

export default function App() {
  return (
    <>
      <header>
        <Titulo />
      </header>

      <Nav />

      <Fundo />
      <Conteudo />
    </>
  );
}
