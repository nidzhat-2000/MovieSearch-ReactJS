import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

function MoviesList() {
  // const data = useGlobalContext();
  // console.log(data);

  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies.map((movie, i) => {
        // console.log(movie);
        const { imdbID: id, Title: name, Poster: poster, Year: year } = movie;
        return (
          <Link to={`/movies/${id}`} key={i} className="movie">
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={name} />
              <div className="movie-info">
                <h4 className="title">{name}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default MoviesList;
