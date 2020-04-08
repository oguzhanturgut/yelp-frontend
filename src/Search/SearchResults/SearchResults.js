import React from 'react';
import SearchResult from './SearchResult/SearchResult';
import styles from './SearchResults.module.css';

const SearchResults = props => {
  if (!props.businesses || props.businesses.length === 0) {
    return <div>
      Nothing to show...
    </div>;
  }

  const searchResults = props.businesses.map(el => <SearchResult key={el.id}
                                                                 business={el}/>);

  return (
    <div className={styles['search-results']}>
      {searchResults}
    </div>
  );
  };

export default SearchResults;
