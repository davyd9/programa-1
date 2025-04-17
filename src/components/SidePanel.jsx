import React from 'react';
import { FaUser, FaBookmark, FaHistory, FaEnvelope, FaChevronRight } from 'react-icons/fa';

const SidePanel = () => {
  // Sample top chefs data
  const topChefs = [
    {
      id: 1,
      name: 'Ana Silva',
      specialty: 'Culinária Brasileira',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      id: 2,
      name: 'Carlos Mendes',
      specialty: 'Confeitaria',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Juliana Costa',
      specialty: 'Cozinha Mediterrânea',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ];

  return (
    <aside className="w-full lg:w-1/4 space-y-8">
      {/* Login/Register Panel */}
      <div className="card p-6">
        <h3 className="font-montserrat font-semibold text-lg mb-4 flex items-center">
          <FaUser className="text-primary mr-2" />
          Acesse sua Conta
        </h3>
        <p className="text-gray-600 mb-4">Entre para salvar suas receitas favoritas e compartilhar suas criações.</p>
        <button className="btn btn-primary w-full mb-3">Entrar</button>
        <button className="btn btn-outline w-full">Cadastrar</button>
      </div>

      {/* Saved Recipes */}
      <div className="card p-6">
        <h3 className="font-montserrat font-semibold text-lg mb-4 flex items-center">
          <FaBookmark className="text-primary mr-2" />
          Receitas Salvas
        </h3>
        <p className="text-gray-600 mb-4">Faça login para ver suas receitas salvas.</p>
        <button className="btn btn-outline w-full">Ver Favoritos</button>
      </div>

      {/* History */}
      <div className="card p-6">
        <h3 className="font-montserrat font-semibold text-lg mb-4 flex items-center">
          <FaHistory className="text-primary mr-2" />
          Histórico
        </h3>
        <p className="text-gray-600 mb-4">Suas últimas receitas visualizadas aparecerão aqui.</p>
      </div>

      {/* Newsletter */}
      <div className="card p-6 bg-gradient-to-br from-primary to-yellow-600 text-white">
        <h3 className="font-montserrat font-semibold text-lg mb-4 flex items-center">
          <FaEnvelope className="mr-2" />
          Newsletter
        </h3>
        <p className="mb-4">Receba as melhores receitas da semana no seu email.</p>
        <input 
          type="email" 
          placeholder="Seu melhor email" 
          className="w-full p-2 rounded mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button className="btn w-full bg-white text-primary hover:bg-gray-100">Inscrever-se</button>
      </div>

      {/* Top Chefs */}
      <div className="card p-6">
        <h3 className="font-montserrat font-semibold text-lg mb-4">Top Chefs da Semana</h3>
        <div className="space-y-4">
          {topChefs.map(chef => (
            <div key={chef.id} className="flex items-center">
              <img 
                src={chef.avatar} 
                alt={chef.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-3 flex-1">
                <h4 className="font-medium">{chef.name}</h4>
                <p className="text-sm text-gray-600">{chef.specialty}</p>
              </div>
              <FaChevronRight className="text-gray-400" />
            </div>
          ))}
        </div>
        <button className="btn btn-outline w-full mt-4">Ver Todos</button>
      </div>
    </aside>
  );
};

export default SidePanel;