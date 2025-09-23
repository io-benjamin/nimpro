import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NIMPRO header logo', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /NIMPRO/i, level: 1 });
  expect(headerElement).toBeInTheDocument();
});

test('renders professional electrical services text', () => {
  render(<App />);
  const servicesElement = screen.getByText(/Professional Electrical Services/i);
  expect(servicesElement).toBeInTheDocument();
});

test('renders navigation menu', () => {
  render(<App />);
  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
  
  const homeLink = screen.getByRole('link', { name: /Home/i });
  const servicesLink = screen.getByRole('link', { name: /Services/i });
  const aboutLink = screen.getByRole('link', { name: /About/i });
  const contactLink = screen.getByRole('link', { name: /Contact/i });
  
  expect(homeLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
