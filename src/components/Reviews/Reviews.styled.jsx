import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewsItem = styled.li`
  border-radius: 0px 32px 32px 32px;
  border: none;
  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 16px 32px 24px 32px;
`;

export const ReviewsAvatar = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  object-fit: cover;
  margin-right: 24px;
`;

export const ReviewsName = styled.h3`
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4px;
`;

export const ReviewsText = styled.p`
  color: #c8c5c5;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
`;
