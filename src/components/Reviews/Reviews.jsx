import { fetchMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsAvatar,
  ReviewsItem,
  ReviewsList,
  ReviewsName,
  ReviewsText,
} from './Reviews.styled';
import { DetailsTitle } from 'components/Cast/Cast.styled';
import { Loader } from 'components/Loader/Loader';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchReviews(id) {
      try {
        setIsLoading(true);
        setError(false);
        const fechedReviews = await fetchMovieReviews(id);
        setReviews([...fechedReviews.results]);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png';

  return (
    <div>
      {reviews.length > 0 && !isLoading && (
        <section>
          <DetailsTitle>Reviews</DetailsTitle>
          <ReviewsList>
            {reviews.map(review => (
              <ReviewsItem key={review.id}>
                <ReviewsAvatar
                  src={
                    review.author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`
                      : defaultImg
                  }
                  alt={review.author}
                  width={'88px'}
                />
                <div>
                  <ReviewsName>{review.author}</ReviewsName>
                  <ReviewsText>{review.content}</ReviewsText>
                </div>
              </ReviewsItem>
            ))}
          </ReviewsList>
        </section>
      )}
      {isLoading && <Loader />}
      {error && <div>OPPS! THERE WAS AN ERROR!</div>}
      {reviews.length === 0 && !isLoading && (
        <div>There are no reviews here yet...</div>
      )}
    </div>
  );
}
