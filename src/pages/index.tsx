import { useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';

export default function Home() {
  const clientes = [
    new Cliente('Ana', 42, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log('cliente.nome', cliente);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('cliente.nome', cliente);
  }

  function salvarCliente(cliente: Cliente) {
    console.log('cliente: ', cliente);
  }

  const [visivel, setVisivel] = useState<'tabela' | 'formulário'>('tabela');

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 from bg-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={() => setVisivel('formulário')}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={clientes[0]} clienteMudou={salvarCliente} cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  );
}
