import React, { useState } from 'react';
import { styles } from '../styles/styles';

interface NavProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const isHomePage = currentPage === 'home';

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav style={{
      ...styles.nav,
      background: isHomePage ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.95)',
      color: isHomePage ? 'white' : '#0f172a'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-0.5rem' }}> 
          <img 
            src="/nimproLogo.png" 
            alt="NIMPRO Logo" 
            onClick={() => handlePageChange('home')}
            style={{ 
              height: '3rem', 
              width: '4rem', 
              filter: isHomePage ? 'brightness(0) invert(1)' : 'none',
              marginRight: '0.75rem',
              cursor: 'pointer'
            }} 
          />
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                background: currentPage === item.id ? (isHomePage ? 'rgba(255, 255, 255, 0.2)' : '#2563eb') : 'transparent',
                color: currentPage === item.id ? (isHomePage ? 'white' : 'white') : 'inherit',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              {item.label}
            </button>
          ))}
          <button style={{
            background: 'linear-gradient(to right, #facc15, #eab308)',
            color: '#0f172a',
            padding: '0.5rem 1rem',
            borderRadius: '1.5rem',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}>
            (804) 386-4911
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;