import React, { useContext, createContext, useState, useEffect } from 'react';
// make sure to use https

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = createContext();
console.log(API_ENDPOINT);

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, errMes: '' });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('avengers');

  const fetchMovies = async url => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response === 'True') {
        setMovies(data.Search);
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
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  }, [query]);

  return (
    <AppContext.Provider value={{ loading, error, movies, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
