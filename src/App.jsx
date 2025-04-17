import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import WorldCuisinePage from './pages/WorldCuisinePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header openLoginModal={openLoginModal} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/receitas" element={<RecipesPage />} />
          <Route path="/cozinhas-do-mundo" element={<WorldCuisinePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
      
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
}

export default App;