import { NavLink, Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader/Loader';
import { Suspense } from 'react';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;
  max-width: 1230px;
  margin: 0 auto;
`;

const Header = styled.header`
  position: absolute;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 2px solid #fff;
`;

const HeaderList = styled.ul`
  display: flex;
  grid-gap: 32px;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
  &.active {
    font-size: 36px;
    font-weight: 500;
    color: #b64343;
  }
`;

const Logo = styled(Link)`
  color: #fff;
  font-family: Istok Web, sans-serif;
  font-size: 40px;
  line-height: normal;
  & span {
    color: #b64343;
  }
`;

const Footer = styled.footer`
  display: flex;
  height: 133px;
  align-items: center;
  background-color: #2f2a2a;
  margin-top: 48px;
  & ul {
    margin-left: 184px;
  }

  & p {
    color: #c8c5c5;
  }
`;

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Logo to="/">
          Films<span>Mania</span>
        </Logo>
        <HeaderList>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" end>
              Movies
            </StyledLink>
          </li>
        </HeaderList>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <div>
          <Logo to="/">
            Films<span>Mania</span>
          </Logo>
          <p>Watch all you want.</p>
        </div>
        <ul>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" end>
              Movies
            </StyledLink>
          </li>
        </ul>
      </Footer>
    </Wrapper>
  );
};
