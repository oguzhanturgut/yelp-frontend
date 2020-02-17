import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const sizeClass = props.small ? '' : 'is-medium';

  return (
    <div className='field has-addons'>
      <p className='control'>
        <button className={`button is-static ${sizeClass}`}>Search</button>
      </p>
      <p className='control'>
        <input
          className={`input ${sizeClass} ${styles['input-control']}`}
          type='text'
          placeholder='Burgers, barbers, spas, handymen'
        />
      </p>
      <p className='control'>
        <button className={`button is-static ${sizeClass}`}>NEAR</button>
      </p>
      <p className='control'>
        <input
          className={`input ${sizeClass} ${styles['input-control']}`}
          type='text'
          placeholder='Where'
        />
      </p>
      <button className={`button ${sizeClass} ${styles['search-button']}`}>
        <span className={`icon is-small ${styles['search-icon']}`}>
          <i className='fas fa-search'></i>
        </span>
      </button>
    </div>
  );
};

export default SearchBar;
