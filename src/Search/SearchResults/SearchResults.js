import React from 'react';
import SearchResult from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  return (
    <div className={styles['search-results']}>
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  );
};

export default SearchResults;
