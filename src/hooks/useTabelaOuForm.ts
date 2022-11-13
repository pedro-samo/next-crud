import { useState } from 'react';

const useTabelaOuForm = () => {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const exibirTabela = () => setVisivel('tabela');
  const exibirFormulario = () => setVisivel('form');

  return {
    tabelaVisivel: visivel === 'tabela',
    exibirTabela,
    exibirFormulario,
  };
};

export default useTabelaOuForm;
