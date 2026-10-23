import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './B.module.css';

export function Botao() {
  const [tema, setTema] = useState<'dark' | 'light'>(() => {
    return document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark';
  });

  function trocarTema() {
    const novoTema = tema === 'dark' ? 'light' : 'dark';

    setTema(novoTema);

    document.documentElement.setAttribute('data-theme', novoTema);
  }

  return (
    <button
      className={styles.Botao}
      onClick={trocarTema}
      aria-label={tema === 'dark' ? 'Claro' : 'Escuro'}
      title={tema === 'dark' ? 'Claro' : 'Escuro'}
      type='button'
    >
      {tema === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}
