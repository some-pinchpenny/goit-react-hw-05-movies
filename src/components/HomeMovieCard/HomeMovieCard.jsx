import { useEffect, useState } from 'react';
import {
  ContentButton,
  ContentGenres,
  ContentItem,
  ContentList,
  ContentTitle,
  ContentWrap,
  Section,
  SlideImg,
  SlideItem,
} from './HomeMovieCard.styled';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { formatDate } from 'helpers/FormatDate';
import { Link, useLocation } from 'react-router-dom';
import { fetchSelectMovie } from 'api';

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  },
];

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
// };

export const HomeMovieCard = ({ items }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState(items[0].id);
  const [selectedRuntime, setSelectedRuntime] = useState({
    hour: Math.floor(items[0].runtime / 60),
    minute: items[0].runtime % 60,
  });

  const location = useLocation();

  const openMovieInfo = id => {
    setSelectedId(id);
  };

  useEffect(() => {
    async function getSelectMovie() {
      try {
        setError(false);
        const selMovie = await fetchSelectMovie(selectedId);
        setSelectedMovie(selMovie);
        setSelectedRuntime({
          hour: Math.floor(selMovie.runtime / 60),
          minute: selMovie.runtime % 60,
        });
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      }
    }

    getSelectMovie();
  }, [selectedId]);

  const defaultImg =
    'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const backgroundStyle = {
    backgroundImage: selectedMovie
      ? `linear-gradient(108deg, rgba(0, 0, 0, 0.50) 47.87%, rgba(0, 0, 0, 0.40) 86.16%), url(https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path})`
      : `url(${defaultImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '798px',
  };

  return (
    <Section>
      <div style={backgroundStyle}>
        {selectedMovie !== null && (
          <ContentWrap>
            <ContentTitle>{selectedMovie.title}</ContentTitle>
            <ContentList>
              <ContentItem>
                {formatDate(selectedMovie.release_date, 'yyyy')}
              </ContentItem>
              <ContentItem>|</ContentItem>
              <ContentItem>{selectedMovie.vote_average.toFixed(1)}</ContentItem>
              {selectedRuntime && (
                <>
                  <ContentItem>|</ContentItem>
                  <ContentItem>
                    {selectedRuntime.hour !== 0 && (
                      <span>{selectedRuntime.hour}h </span>
                    )}
                    <span>{selectedRuntime.minute}m</span>
                  </ContentItem>
                </>
              )}
            </ContentList>

            <ContentGenres>
              Genres:{' '}
              <span>
                {selectedMovie.genres.map(({ name }) => name).join(', ')}
              </span>
            </ContentGenres>
            <Link to={`/movies/${selectedId}`} state={{ from: location }}>
              <ContentButton>SHOW MORE</ContentButton>
            </Link>
          </ContentWrap>
        )}
        <div>
          <Slide responsive={responsiveSettings}>
            {items.map(mov => (
              <SlideItem key={mov.id}>
                <SlideImg
                  src={
                    mov.poster_path
                      ? `https://image.tmdb.org/t/p/w500${mov.poster_path}`
                      : defaultImg
                  }
                  alt={mov.title}
                  onClick={() => openMovieInfo(mov.id)}
                />
              </SlideItem>
            ))}
          </Slide>
        </div>
      </div>
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
    </Section>
  );
};
