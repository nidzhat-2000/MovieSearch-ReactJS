import React from 'react';
import { useGlobalContext } from './context';

function SearchForm() {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={e => e.preventDefault()}>
      <h2>Search Movie</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {error.show && (
        // console.log(error)
        <div className="error">{error.errMes}</div>
      )}
    </form>
  );
}

export default SearchForm;
