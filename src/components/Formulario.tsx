import React, { useState } from 'react';
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada';

interface FormularioProps {
  cliente?: Cliente;
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? '');
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? <Entrada texto="Código" valor={id} somenteLeitura className="mb-5" /> : false}
      <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-5" />
      <Entrada texto="Idade" valor={idade} tipo="number" valorMudou={setIdade} />
      <div className="flex justify-end mt-7">
        <Botao cor="blue" className="mr-2">
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao>Cancelar</Botao>
      </div>
    </div>
  );
};

export default Formulario;
