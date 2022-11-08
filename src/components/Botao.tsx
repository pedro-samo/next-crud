import React from 'react';

interface BotaoProps {
  children: any;
  className?: string;
  cor?: 'green' | 'blue' | 'gray';
}

const Botao = (props: BotaoProps) => {
  const cor = props.cor ?? 'gray';

  return (
    <button
      className={`bg-gradient-to-r from-${cor}-400 to-${cor}-600 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Botao;
