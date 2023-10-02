import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import { MovieList } from './MovieGallery.styled';

export const MovieGallery = ({ items }) => {
  return (
    <MovieList>
      {items.map(item => (
        <MovieGalleryItem key={item.id} movie={item} />
      ))}
    </MovieList>
  );
};
