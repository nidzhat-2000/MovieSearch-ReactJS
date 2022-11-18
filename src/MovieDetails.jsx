import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useFetch from './useFetch';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

function MovieDetails() {
  const { id } = useParams();

  const { loading, data: movie, error } = useFetch(`i=${id}`);
  console.log(loading);
  console.log(error);
  console.log(movie);

  // const [movie, setMovie] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState({ show: false, errMes: '' });

  // const fetchMovie = async url => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);

  //   if (data.Response === 'false') {
  //     setLoading(false);
  //     setError({ show: true, errMes: 'Movie not found' });
  //   } else {
  //     setMovie(data);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovie(`${API_ENDPOINT}&i=${id}`);
  // }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.errMes}</h1>
        <Link to="/">back to home page...</Link>
      </div>
    );
  }

  const { Poster: poster, Title: name, Year: year, Plot: plot } = movie;

  return (
    <section className="single-movie">
      <img src={poster === 'N/A' ? url : poster} alt={name} />
      <div className="single-movie-info">
        <h2>{name}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back to Home Page
        </Link>
      </div>
    </section>
  );
}

export default MovieDetails;
