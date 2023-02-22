import React from 'react';
import Header from './Header.modules.css';
import Title from './Title';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Title className={styles.header__title}>Mi sitio web</Title>
      {children}
    </header>
  );
};

export default Header;
