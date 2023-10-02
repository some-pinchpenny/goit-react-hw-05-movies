import styled from 'styled-components';

export const Section = styled.section`
  width: 1200px;
`;

export const ContentWrap = styled.div`
  padding: 146px 220px 0 146px;
  margin-bottom: 24px;
`;

export const SlideItem = styled.div`
  width: 175px;
  height: 262px;
  margin: 0 auto;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 262px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ContentTitle = styled.h2`
  font-family: Josefin Sans;
  font-size: 56px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const ContentList = styled.ul`
  display: flex;
  grid-gap: 16px;
  margin-bottom: 48px;
`;

export const ContentItem = styled.li`
  color: #c8c5c5;
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
`;

export const ContentGenres = styled.p`
  color: #c8c5c5;
  font-size: 28px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 48px;

  & span {
    color: #fff;
    font-size: 30px;
  }
`;

export const ContentButton = styled.button`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  padding: 12px 40px;
  border: none;
  height: 54px;
  border-radius: 12px;
  background: #b64343;
  box-shadow: -1px 4px 4px 2px rgba(131, 62, 62, 0.31);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;

  &:hover {
    background-color: #ee4f4f;
    cursor: pointer;
  }
`;
