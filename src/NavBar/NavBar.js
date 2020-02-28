import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  return (
    <div className={styles['nav-bar']}>
      <Link to='/'>
        <img src={logo} className={styles.logo} alt='belb logo' />
      </Link>
      <SearchBar small />
      <button className={`button ${styles['nav-button']}`}>Sign In</button>
      <button className={`button ${styles['nav-button']}`}>Register</button>
    </div>
  );
};

export default NavBar;
