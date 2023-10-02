import { RiSearch2Line } from 'react-icons/ri';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarTitle,
  SearchbarWrapper,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit, query }) => {
  const title = query
    ? `Here's what we found with the word “${query.split('/')[1]}”`
    : 'What would you like to watch today?';

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          type="text"
          name="query"
          placeholder="Start typing here..."
        />
        <SearchButton type="submit">
          <RiSearch2Line size={'32px'} />
        </SearchButton>
      </SearchForm>
      <SearchbarTitle>{title}</SearchbarTitle>
    </SearchbarWrapper>
  );
};
