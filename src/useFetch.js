import React, { useState, useEffect } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, errMes: '' });
  const [data, setData] = useState(null);

  const fetchMovies = async url => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      if (data.Response === 'True') {
        setData(data.Search || data);
        console.log(data);
        setError({ show: false, errMes: '' });
      } else {
        setError({ show: true, errMes: data.Error });
      }
      setLoading(false);
    } catch (err) {
      console.error(err.message);
      setError(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&${urlParams}`);
  }, [urlParams]);

  return {
    loading,
    error,
    data,
  };
}

export default useFetch;
