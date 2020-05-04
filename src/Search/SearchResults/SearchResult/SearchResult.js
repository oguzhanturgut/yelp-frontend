import React from 'react';
import styles from './SearchResult.module.css';
import BusinessRating from '../../../BusinessRating/BusinessRating';

const SearchResult = (props) => {
  console.log(props.business);
  if (!props.business) {
    return <div></div>;
  }

  return (
      <div className={styles['search-result']}>
        <p>
          <img
              src={props.business.image_url}
              alt='business'
              className={styles['business-image']}
          />
        </p>
        <div className={styles['business-info']}>
          <h2 className='subtitle'>{props.business.name}</h2>
          <BusinessRating reviewCount={props.business.review_count}
                          rating={props.business.rating}/>
          <p>
            {props.business.price}
            {props.business.categories.map(
                cat => (<span className='tag' key={cat.alias}>{cat.title}</span>))}

          </p>
        </div>
        <div className={styles['contact-info']}>
          <p>{props.business.display_phone}</p>
          <p>{props.business.location.display_address[0]}</p>
          <p>{props.business.location.display_address[1]}</p>
        </div>
      </div>
  );
};

export default SearchResult;
