import { fetchMovieById } from 'api';
import {
  ContentButton,
  ContentGenres,
  ContentItem,
  ContentList,
  ContentTitle,
  ContentWrap,
} from 'components/HomeMovieCard/HomeMovieCard.styled';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { formatDate } from 'helpers/FormatDate';
import {
  ContentBtnList,
  ContentOverview,
  GoBack,
  MovieDetWrapper,
} from 'components/MoviDetails.styled';
import { Loader } from 'components/Loader/Loader';

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [runtime, setruntime] = useState({
    hour: 0,
    minute: 0,
  });

  const location = useLocation();
  const { current } = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const fechedMovie = await fetchMovieById(params.movieId);
        setMovie(fechedMovie);
        setruntime({
          hour: Math.floor(fechedMovie.runtime / 60),
          minute: fechedMovie.runtime % 60,
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [params.movieId]);

  const defaultImg =
    'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const backgroundStyle = {
    backgroundImage: movie
      ? `linear-gradient(108deg, rgba(0, 0, 0, 0.50) 47.87%, rgba(0, 0, 0, 0.40) 86.16%), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
      : `url(${defaultImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '798px',
  };

  return (
    <div>
      <MovieDetWrapper style={backgroundStyle}>
        <GoBack to={current}>&lt;</GoBack>
        {movie && !isLoading && (
          <ContentWrap>
            <ContentTitle>{movie.title}</ContentTitle>
            <ContentList>
              <ContentItem>
                {formatDate(movie.release_date, 'yyyy')}
              </ContentItem>
              <ContentItem>|</ContentItem>
              <ContentItem>{movie.vote_average.toFixed(1)}</ContentItem>
              {runtime && (
                <>
                  <ContentItem>|</ContentItem>
                  <ContentItem>
                    {runtime.hour !== 0 && <span>{runtime.hour}h </span>}
                    <span>{runtime.minute}m</span>
                  </ContentItem>
                </>
              )}
            </ContentList>

            <ContentOverview>{movie.overview}</ContentOverview>

            <ContentGenres>
              Genres:{' '}
              <span>{movie.genres.map(({ name }) => name).join(', ')}</span>
            </ContentGenres>
            <ContentBtnList>
              <li>
                <Link to="cast">
                  <ContentButton>cast</ContentButton>
                </Link>
              </li>
              <li>
                <Link to="reviews">
                  <ContentButton>reviews</ContentButton>
                </Link>
              </li>
            </ContentBtnList>
          </ContentWrap>
        )}
      </MovieDetWrapper>
      {isLoading && <Loader />}
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
