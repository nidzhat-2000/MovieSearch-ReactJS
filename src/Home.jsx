import React from 'react';
import { Link } from 'react-router-dom';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

function Home() {
  return (
    <main>
      <SearchForm />
      <MoviesList />
    </main>
  );
}

export default Home;
