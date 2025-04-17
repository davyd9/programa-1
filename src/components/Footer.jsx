import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Sabores do Mundo</h3>
            <p className="text-gray-300 mb-4">
              Descubra receitas incríveis de todo o mundo e aprenda a preparar pratos deliciosos com nossos guias passo a passo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/receitas" className="text-gray-300 hover:text-primary transition-colors">Receitas</Link>
              </li>
              <li>
                <Link to="/cozinhas-do-mundo" className="text-gray-300 hover:text-primary transition-colors">Cozinhas do Mundo</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-primary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Café da Manhã</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Almoço</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Jantar</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Sobremesas</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Bebidas</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">Lanches</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscreva-se para receber nossas melhores receitas e dicas culinárias.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="px-4 py-2 rounded-l-md flex-1 text-gray-800 focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-md">
                <FaEnvelope />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sabores do Mundo. Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;