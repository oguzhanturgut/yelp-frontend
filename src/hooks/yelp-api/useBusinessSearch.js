import {useState, useEffect} from 'react';
import * as api from './api';

export function useBusinessSearch(term, location) {
  const [businesses, setBusinesses] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const [searchParams, setSearchParams] = useState({term, location});

  useEffect(() => {
    setBusinesses([]);
    (async () => {
      try {
        const result = await api.get('/businesses/search', searchParams);
        const data = await result.json();
        setBusinesses(data.businesses);
        setTotalResults(data.total);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [searchParams]);

  return [businesses, totalResults, searchParams, setSearchParams];

}
