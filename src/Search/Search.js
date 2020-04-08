import React from 'react';
import useReactRouter from 'use-react-router';
import NavBar from '../NavBar/NavBar';
import SubNav from '../NavBar/SubNav/SubNav';
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary';
import SearchResults from './SearchResults/SearchResults';

import {useBusinessSearch} from "../hooks/yelp-api/useBusinessSearch";


const Search = () => {
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

  const [businesses, totalResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

  return (
    <div>
      <NavBar term={term} location={locationParam}/>
      <SubNav/>
      <SearchResultsSummary term={term} location={locationParam}/>
      <SearchResults businesses={businesses}/>
    </div>
  );
};

export default Search;
