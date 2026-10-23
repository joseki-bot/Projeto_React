import styles from './styles.module.css';
import { Botao } from './Botao';

export function Nav() {
  return (
    <div className={styles.Nave}>
      <nav>
        <a href='*'>INÍCIO</a>
        <a href='*'>Família Blattidae</a>
        <a href='*'>Família Blaberidae</a>
        <a href='*'>Família Ectobiidae</a>
        <Botao />
      </nav>
    </div>
  );
}
