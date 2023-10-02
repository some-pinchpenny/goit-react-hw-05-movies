import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-gap: 24px;
  margin-top: 0;
  margin-bottom: 48px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
