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

  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 from bg-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
      </Layout>
    </div>
  );
}