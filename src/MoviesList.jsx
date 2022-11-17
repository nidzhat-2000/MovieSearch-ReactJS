import React from 'react';
import { useGlobalContext } from './context';

function MoviesList() {
  const data = useGlobalContext();
  console.log(data);
  return <h2>MoviesList</h2>;
}

export default MoviesList;
