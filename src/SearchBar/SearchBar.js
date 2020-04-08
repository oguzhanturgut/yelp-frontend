import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = props => {
  const [term, setTerm] = useState(props.term || '');
  const [location, setLocation] = useState(props.location || '');
  const sizeClass = props.small ? '' : 'is-medium';

  const handleSubmit = e => {
    e.preventDefault();
    if (typeof props.search === 'function') {
      props.search(term, location);
    }
  };

  return (
    <form className='field has-addons' onSubmit={handleSubmit}>
      <p className='control'>
        <button className={`button is-static ${sizeClass}`}>Search</button>
      </p>
      <p className='control'>
        <input
          className={`input ${sizeClass} ${styles['input-control']}`}
          type='text'
          onChange={e => setTerm(e.target.value)}
          placeholder='Burgers, barbers, spas, handymen'
          value={term}
        />
      </p>
      <div className='control'>
        <div className={`button is-static ${sizeClass}`}>NEAR</div>
      </div>
      <p className='control'>
        <input
          className={`input ${sizeClass} ${styles['input-control']}`}
          type='text'
          onChange={e => setLocation(e.target.value)}
          placeholder='Where'
          value={location}
        />
      </p>
      <button className={`button ${sizeClass} ${styles['search-button']}`}>
        <span className={`icon is-small ${styles['search-icon']}`}>
          <i className='fas fa-search'></i>
        </span>
      </button>
    </form>
  );
};

export default SearchBar;
