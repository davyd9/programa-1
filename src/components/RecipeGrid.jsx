import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeGrid = () => {
  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: 'Feijoada Brasileira Tradicional',
      image: 'https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      countryFlag: '🇧🇷',
      time: '2h 30min',
      difficulty: 'Médio',
      rating: 4.8,
      reviews: 342,
      isFavorite: true
    },
    {
      id: 2,
      title: 'Risoto de Funghi com Trufas',
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      countryFlag: '🇮🇹',
      time: '45min',
      difficulty: 'Médio',
      rating: 4.5,
      reviews: 218,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Sushi de Salmão com Cream Cheese',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      countryFlag: '🇯🇵',
      time: '1h 15min',
      difficulty: 'Avançado',
      rating: 4.7,
      reviews: 189,
      isFavorite: false
    },
    {
      id: 4,
      title: 'Tacos de Carnitas com Guacamole',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      countryFlag: '🇲🇽',
      time: '1h',
      difficulty: 'Médio',
      rating: 4.6,
      reviews: 156,
      isFavorite: true
    },
    {
      id: 5,
      title: 'Curry de Frango com Leite de Coco',
      image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      countryFlag: '🇮🇳',
      time: '50min',
      difficulty: 'Fácil',
      rating: 4.3,
      reviews: 124,
      isFavorite: false
    },
    {
      id: 6,
      title: 'Croissant Recheado com Chocolate',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80',
      countryFlag: '🇫🇷',
      time: '3h',
      difficulty: 'Avançado',
      rating: 4.9,
      reviews: 278,
      isFavorite: false
    },
    {
      id: 7,
      title: 'Pão de Queijo Mineiro',
      image: 'https://images.unsplash.com/photo-1598646506899-ac6be1000c2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      countryFlag: '🇧🇷',
      time: '40min',
      difficulty: 'Fácil',
      rating: 4.4,
      reviews: 201,
      isFavorite: true
    },
    {
      id: 8,
      title: 'Lasanha à Bolonhesa',
      image: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      countryFlag: '🇮🇹',
      time: '1h 30min',
      difficulty: 'Médio',
      rating: 4.6,
      reviews: 312,
      isFavorite: false
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold font-montserrat mb-8">Receitas em Destaque</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="btn btn-outline px-8 py-3">Carregar Mais Receitas</button>
        </div>
      </div>
    </section>
  );
};

export default RecipeGrid;