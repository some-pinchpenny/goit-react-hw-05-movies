import { Link, useLocation } from 'react-router-dom';
import {
  MovieImg,
  MovieItem,
  MovieName,
  MovieTextItem,
  MovieTextList,
  TextWraper,
} from './MovieGalleryItem.styled';
import { formatDate } from 'helpers/FormatDate';

export const MovieGalleryItem = ({ movie }) => {
  const defaultImg =
    'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
  const location = useLocation();

  return (
    <MovieItem>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <MovieImg
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width={'282px'}
        />
        <TextWraper>
          <MovieName>{movie.title}</MovieName>
          <MovieTextList>
            {movie.release_date && (
              <>
                <MovieTextItem>
                  {formatDate(movie.release_date, 'dd MMMM yyyy')}
                </MovieTextItem>
                <MovieTextItem>|</MovieTextItem>
              </>
            )}
            <MovieTextItem>{movie.vote_average.toFixed(1)}</MovieTextItem>
          </MovieTextList>
        </TextWraper>
      </Link>
    </MovieItem>
  );
};
