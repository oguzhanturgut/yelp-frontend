import React from 'react';
import TopNav from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';

const LandingPage = () => {
  return (
    <div>
      <TopNav />
      <img src={logo} className={styles.logo} alt='logo' />
      <SearchBar />
    </div>
  );
};

export default LandingPage;
