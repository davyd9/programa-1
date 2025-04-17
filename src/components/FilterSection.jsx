import React, { useState } from 'react';
import { FaGlobeAmericas, FaClock, FaChartBar, FaLeaf } from 'react-icons/fa';

const FilterSection = () => {
  const [activeFilters, setActiveFilters] = useState({
    region: null,
    time: null,
    difficulty: null,
    diet: null
  });

  const handleFilterClick = (category, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const regions = [
    { id: 'brasil', name: 'Brasil', flag: '🇧🇷' },
    { id: 'italia', name: 'Itália', flag: '🇮🇹' },
    { id: 'japao', name: 'Japão', flag: '🇯🇵' },
    { id: 'mexico', name: 'México', flag: '🇲🇽' },
    { id: 'india', name: 'Índia', flag: '🇮🇳' },
    { id: 'franca', name: 'França', flag: '🇫🇷' }
  ];

  const times = [
    { id: '30min', name: 'Até 30min' },
    { id: '60min', name: 'Até 60min' },
    { id: 'mais60min', name: 'Mais de 60min' }
  ];

  const difficulties = [
    { id: 'facil', name: 'Fácil' },
    { id: 'medio', name: 'Médio' },
    { id: 'avancado', name: 'Avançado' }
  ];

  const diets = [
    { id: 'vegetariana', name: 'Vegetariana' },
    { id: 'vegana', name: 'Vegana' },
    { id: 'semgluten', name: 'Sem Glúten' },
    { id: 'semlactose', name: 'Sem Lactose' }
  ];

  const popularTags = [
    'Sobremesas', 'Café da Manhã', 'Jantar Rápido', 'Churrasco', 
    'Massas', 'Sopas', 'Saladas', 'Lanches', 'Bolos', 'Frutos do Mar'
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-full md:w-4/5 mx-auto">
          <h2 className="text-2xl font-semibold font-montserrat mb-6 text-center md:text-left">Encontre a Receita Perfeita</h2>
          
          {/* Filter Categories */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Region Filter */}
            <div className="filter-group">
              <div className="flex items-center mb-3">
                <FaGlobeAmericas className="text-primary mr-2" />
                <h3 className="font-montserrat font-medium">Região</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button
                    key={region.id}
                    className={`px-3 py-1 rounded-full text-sm flex items-center ${
                      activeFilters.region === region.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilterClick('region', region.id)}
                  >
                    <span className="mr-1">{region.flag}</span>
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Filter */}
            <div className="filter-group">
              <div className="flex items-center mb-3">
                <FaClock className="text-primary mr-2" />
                <h3 className="font-montserrat font-medium">Tempo</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {times.map(time => (
                  <button
                    key={time.id}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilters.time === time.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilterClick('time', time.id)}
                  >
                    {time.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="filter-group">
              <div className="flex items-center mb-3">
                <FaChartBar className="text-primary mr-2" />
                <h3 className="font-montserrat font-medium">Dificuldade</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty.id}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilters.difficulty === difficulty.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilterClick('difficulty', difficulty.id)}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Diet Filter */}
            <div className="filter-group">
              <div className="flex items-center mb-3">
                <FaLeaf className="text-primary mr-2" />
                <h3 className="font-montserrat font-medium">Dieta</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {diets.map(diet => (
                  <button
                    key={diet.id}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilters.diet === diet.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => handleFilterClick('diet', diet.id)}
                  >
                    {diet.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Tags Populares:</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;