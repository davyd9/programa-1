import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaGlobeAmericas, FaStar } from 'react-icons/fa';

const HeroSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  const heroCards = [
    {
      id: 1,
      title: 'Receitas Populares',
      description: 'As receitas mais amadas pela nossa comunidade',
      icon: <FaFire className="text-red-500" size={24} />,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Pratos Típicos',
      description: 'Descubra a autenticidade das culinárias regionais',
      icon: <FaGlobeAmericas className="text-blue-500" size={24} />,
      color: 'from-blue-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Novidades da Semana',
      description: 'Receitas recém adicionadas para você experimentar',
      icon: <FaStar className="text-yellow-500" size={24} />,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="relative h-hero mt-16 md:mt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)',
          filter: 'blur(4px)'
        }}
      >
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative h-full flex flex-col items-center justify-center">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white text-center mb-12 font-montserrat"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Descubra Sabores Únicos
        </motion.h2>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {heroCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="card bg-white rounded-lg overflow-hidden"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {card.icon}
                  <h3 className="ml-3 text-xl font-semibold font-montserrat">{card.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="btn btn-outline w-full">Explorar</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;