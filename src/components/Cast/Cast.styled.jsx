import styled from 'styled-components';

export const DetailsTitle = styled.h2`
  color: #c8c5c5;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 32px;
`;

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 72px);
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-gap: 24px;
  margin-top: 0;
  margin-bottom: 48px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastItem = styled.li`
  border-radius: 8px;
  background: #413b3b;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ActorPhoto = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CastTextWraper = styled.div`
  padding: 8px 8px 12px 8px;
`;

export const ActorName = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.04;
  margin-bottom: 4px;
`;
