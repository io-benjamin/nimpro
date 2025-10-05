import React from 'react';
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
      background: isHomePage ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.98)',
      color: isHomePage ? 'white' : '#0f172a',
      boxShadow: isHomePage ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(0.5rem, 2vw, 1rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 'clamp(2.5rem, 8vw, 4rem)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-0.5rem' }}>
          <img
            src="/nimproLogo.png"
            alt="NIMPRO Logo"
            onClick={() => handlePageChange('home')}
            style={{
              height: 'clamp(2.5rem, 5vw, 3rem)',
              width: 'clamp(3rem, 6vw, 4rem)',
              filter: isHomePage ? 'brightness(0) invert(1)' : 'none',
              marginRight: 'clamp(0.5rem, 2vw, 0.75rem)',
              cursor: 'pointer'
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          gap: 'clamp(0.5rem, 2vw, 1rem)',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              style={{
                padding: 'clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 1rem)',
                borderRadius: '0.5rem',
                border: 'none',
                background: currentPage === item.id ? (isHomePage ? 'rgba(255, 255, 255, 0.2)' : '#2563eb') : 'transparent',
                color: currentPage === item.id ? 'white' : (isHomePage ? 'white' : '#0f172a'),
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                whiteSpace: 'nowrap'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;