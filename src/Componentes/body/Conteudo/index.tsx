import styles from './styles.module.css';

export function Conteudo() {
  return (
    <div className={styles.Conteudo}>
      <div className={styles.Texto}>
        <h2>O Fascinante Mundo das Baratas</h2>

        <p>
          As baratas são insetos que habitam o planeta há centenas de milhões de
          anos e estão entre os grupos de insetos mais conhecidos do mundo.
          Apesar de muitas pessoas as associarem à sujeira e a ambientes
          desagradáveis, esses animais possuem características biológicas
          surpreendentes e desempenham funções importantes nos ecossistemas.
          Existem milhares de espécies de baratas, distribuídas por diferentes
          regiões do planeta. Enquanto algumas vivem próximas aos seres humanos,
          outras habitam florestas, cavernas e outros ambientes naturais. Neste
          site, você poderá conhecer suas características, descobrir
          curiosidades, explorar suas famílias e aprender a diferenciar as
          diversas espécies existentes.
        </p>
      </div>

      <div className={styles.Imagem}>
        <img
          className={styles.BarataDiurna}
          src='/Barata_Diurna.png'
          alt='Barata diurna'
        />

        <img
          className={styles.BarataNoturna}
          src='/Barata_Noturna.png'
          alt='Barata noturna'
        />
      </div>
    </div> /* FECHA A DIV DO Conteudo */
  );
}
