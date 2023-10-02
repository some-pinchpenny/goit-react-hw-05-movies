import styled from 'styled-components';

export const MovieItem = styled.li`
  border-radius: 8px;
  background: #413b3b;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
  /* border-radius: 8px; */
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
`;

export const MovieImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const TextWraper = styled.div`
  padding: 8px 8px 12px 8px;
`;

export const MovieName = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.04;
  margin-bottom: 4px;
`;

export const MovieTextList = styled.ul`
  display: flex;
  grid-gap: 8px;
`;

export const MovieTextItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #c8c5c5;
`;
