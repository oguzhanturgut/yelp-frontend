import React from 'react';
import useReactRouter from 'use-react-router';
import TopNav from './TopNav/TopNav';
import logo from '../assets/logo.png';
import styles from './LandingPage.module.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';

const LandingPage = () => {
  const { history } = useReactRouter();
  const search = (term, location) => {
    history.push(`/search?find_desc=${encodeURI(term)}&find_loc=${encodeURI(location)}`);
  };
  return (
    <div className={styles['landing']}>
      <div className={styles['search-area']}>
        <TopNav />
        <img src={logo} className={styles.logo} alt='logo' />
        <SearchBar search={search} />
        <SearchSuggestions />
      </div>
    </div>
  );
};

export default LandingPage;
