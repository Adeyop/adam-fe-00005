// pages/index.js
import { useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { getCertifications, getMovieListIds, discoverMovies } from '../services/api';
import MovieList from '../components/MovieList';

const Home = () => {
  const { movies, setMovies } = useMovieContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const certifications = await getCertifications();
        const movieListIds = await getMovieListIds();
        const discoveredMovies = await discoverMovies();

        // Combine or process the data as needed
        const processedData = {
          certifications,
          movieListIds,
          discoveredMovies,
        };

        // Update the state with the processed data
        setMovies(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setMovies]);

  return (
    <div>
      <MovieList movies={movies.discoveredMovies.results} />
      {/* Additional components for certifications, movie list ids, etc. */}
    </div>
  );
};

export default Home;
