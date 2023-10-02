import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'api';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = Number(searchParams.get('page'));

  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.query.value.trim() === '') {
      toast.error('You have not entered anything!');
    } else {
      setSearchParams({
        query: `${Date.now()}/${evt.target.elements.query.value}`,
        page: 1,
      });
      setTotalPages(1);

      setMovie([]);
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const allMovies = await fetchImages(query, page);
        if (allMovies.length === 0) {
          return toast.error(
            'Opps, there are no pictures according to your request... '
          );
        }
        setMovie([...allMovies.results]);
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

    getMovie();
  }, [query, page]);

  const onPageChange = pageNumber => {
    setSearchParams(params => {
      params.set('page', pageNumber);
      return params;
    });
  };

  return (
    <div>
      <Searchbar query={query} onSubmit={handleSubmit} />
      {movies.length > 0 && !isLoading && <MovieGallery items={movies} />}
      {totalPages >= 2 && !isLoading && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
      <Toaster position="top-right" />
      {isLoading && <Loader />}
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
    </div>
  );
}
