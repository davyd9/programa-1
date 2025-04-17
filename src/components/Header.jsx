import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBell, FaHeart, FaUser, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Header = ({ openLoginModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Receitas', path: '/receitas' },
    { name: 'Cozinhas do Mundo', path: '/cozinhas-do-mundo' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-montserrat text-secondary">
              <span className="text-primary">Sabores</span> do Mundo
            </h1>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:block w-3/5">
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por receitas, ingredientes ou cozinhas regionais..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Icons - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-secondary hover:text-primary transition-colors">
              <FaBell size={20} />
            </button>
            <button className="text-secondary hover:text-primary transition-colors">
              <FaHeart size={20} />
            </button>
            <button 
              onClick={openLoginModal}
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaUser size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar receitas..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex mt-4 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-montserrat font-medium text-lg transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 pt-20">
            <div className="container mx-auto px-4">
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block py-2 font-montserrat font-medium text-xl ${
                          location.pathname === link.path ? 'text-primary' : 'text-secondary'
                        }`}
                        onClick={toggleMobileMenu}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 flex justify-around">
                <button className="flex flex-col items-center text-secondary">
                  <FaBell size={24} />
                  <span className="mt-1 text-sm">Notificações</span>
                </button>
                <button className="flex flex-col items-center text-secondary">
                  <FaHeart size={24} />
                  <span className="mt-1 text-sm">Favoritos</span>
                </button>
                <button 
                  className="flex flex-col items-center text-secondary"
                  onClick={() => {
                    openLoginModal();
                    toggleMobileMenu();
                  }}
                >
                  <FaUser size={24} />
                  <span className="mt-1 text-sm">Perfil</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;