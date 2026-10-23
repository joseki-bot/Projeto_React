import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Conteudo}>
        <div className={styles.Sobre}>
          <h2>BARATAS</h2>
          <p>
            Conheça o fascinante mundo das baratas, suas famílias,
            características e curiosidades.
          </p>
        </div>
      </div>

      <div className={styles.Copyright}>
        <p>Projeto educacional sobre baratas</p>
        <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
