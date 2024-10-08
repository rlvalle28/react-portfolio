import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  // Switch between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Save theme to localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Apply saved theme from localStorage when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // Dynamic styles based on theme
  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#333' : '#fff',
    color: theme === 'light' ? '#fff' : '#000',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
