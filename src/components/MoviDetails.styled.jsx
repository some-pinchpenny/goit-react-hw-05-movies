import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBack = styled(Link)`
  position: absolute;
  top: 100px;
  left: 130px;
  color: #fff;
  font-family: Istok Web, sans-serif;
  font-size: 64px;
  line-height: normal;
`;

export const MovieDetWrapper = styled.div`
  margin-bottom: 32px;
`;

export const ContentOverview = styled.p`
  width: 585px;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 48px;
`;

export const ContentBtnList = styled.ul`
  display: flex;
  grid-gap: 32px;
`;
