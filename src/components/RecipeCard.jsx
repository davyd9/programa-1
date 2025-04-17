import React, { useState } from 'react';
import { FaClock, FaHeart, FaRegHeart, FaStar, FaStarHalf } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite || false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half-star" className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }
    
    return stars;
  };

  // Difficulty color
  const difficultyColor = () => {
    switch (recipe.difficulty) {
      case 'Fácil':
        return 'bg-green-500';
      case 'Médio':
        return 'bg-yellow-500';
      case 'Avançado':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="card h-full transition-all duration-300 hover:shadow-card-hover">
      <div className="relative">
        {/* Recipe Image */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-40 object-cover rounded-t-lg"
        />
        
        {/* Country Flag */}
        <div className="absolute top-3 left-3 bg-white p-1 rounded-full shadow-md">
          <span className="text-lg">{recipe.countryFlag}</span>
        </div>
        
        {/* Favorite Button */}
        <button 
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition-colors duration-300"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-red-500" />
          )}
        </button>
      </div>
      
      <div className="p-4">
        {/* Title */}
        <h3 className="font-montserrat font-semibold text-lg mb-2 line-clamp-2">{recipe.title}</h3>
        
        {/* Meta Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <FaClock className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{recipe.time}</span>
          </div>
          
          <div className="flex items-center">
            <span className={`inline-block w-3 h-3 rounded-full ${difficultyColor()} mr-1`}></span>
            <span className="text-sm text-gray-600">{recipe.difficulty}</span>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          {renderStars(recipe.rating)}
          <span className="ml-2 text-sm text-gray-600">({recipe.reviews})</span>
        </div>
        
        {/* Button */}
        <button className="btn btn-primary w-full">Ver Receita</button>
      </div>
    </div>
  );
};

export default RecipeCard;