import { fetchTrendMovie } from 'api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { HomeMovieCard } from 'components/HomeMovieCard/HomeMovieCard';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    async function getTrendMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const allMovies = await fetchTrendMovie(page);
        if (allMovies.length === 0) {
          return toast.error(
            'Opps, there are no pictures according to your request... '
          );
        }
        setTrendingMovies([...allMovies.results]);
        setTotalPages(
          allMovies.total_pages <= 100 ? allMovies.total_pages : 100
        );
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getTrendMovie();
  }, [page]);

  const onPageChange = pageNumber => {
    setSearchParams(params => {
      params.set('page', pageNumber);
      return params;
    });
  };

  return (
    <div>
      {trendingMovies.length > 0 && <HomeMovieCard items={trendingMovies} />}
      <h1>Today's popular movies</h1>
      {trendingMovies.length > 0 && !isLoading && (
        <section>
          <MovieGallery items={trendingMovies} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </section>
      )}
      {isLoading && <Loader />}
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
    </div>
  );
}
