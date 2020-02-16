import React from 'react';
import TopNav from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';

const LandingPage = () => {
  return (
    <div className={styles['landing']}>
      <div className={styles['search-area']}>
        <TopNav />
        <img src={logo} className={styles.logo} alt='logo' />
        <SearchBar />
        <SearchSuggestions />
      </div>
    </div>
  );
};

export default LandingPage;
