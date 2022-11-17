import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div className="app">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
