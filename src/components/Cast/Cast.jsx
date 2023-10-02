import { fetchMovieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ActorName,
  ActorPhoto,
  CastItem,
  CastList,
  CastTextWraper,
  DetailsTitle,
} from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCast(id) {
      try {
        setIsLoading(true);
        setError(false);
        const fechedCast = await fetchMovieCast(id);
        setCast([...fechedCast.cast]);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCast(movieId);
  }, [movieId]);

  const defaultImg =
    'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <div>
      {cast.length > 0 && !isLoading && (
        <section>
          <DetailsTitle>Cast</DetailsTitle>
          <CastList>
            {cast.map(actor => (
              <CastItem key={actor.id}>
                <ActorPhoto
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.name}
                  width={'282px'}
                />
                <CastTextWraper>
                  <ActorName>{actor.name}</ActorName>
                </CastTextWraper>
              </CastItem>
            ))}
          </CastList>
        </section>
      )}
      {isLoading && <Loader />}
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
    </div>
  );
}
