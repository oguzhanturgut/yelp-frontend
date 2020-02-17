import React from 'react';
import styles from './SearchResult.module.css';
import BusinessRating from './BusinessRating/BusinessRating';

const SearchResult = () => {
  return (
    <div className={styles['search-result']}>
      <p>
        <img
          src='https://via.placeholder.com/210'
          alt='business'
          className={styles['business-image']}
        />
      </p>
      <div className={styles['business-info']}>
        <h2 className='subtitle'>Burger Place</h2>
        <BusinessRating />
        <p>
          $$ <span class='tag'>Fast Food</span>
          <span class='tag'>Burger</span>
        </p>
      </div>
      <div className={styles['contact-info']}>
        <p>+123456789876</p>
        <p>Example Street 5</p>
        <p>12345 Berlin</p>
      </div>
    </div>
  );
};

export default SearchResult;
