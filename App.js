import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import './App.css';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=90cd1351';
const DEFAULT_MOVIE = 'Spiderman';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMovies = async (title) => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (error) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchDefaultMovies = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${API_URL}&s=${DEFAULT_MOVIE}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (error) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      fetchDefaultMovies();
    } else {
      fetchMovies(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  return (
    <div className="app">
      <h1>ScreenSearch</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={handleSearch}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => fetchMovies(searchTerm)}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
