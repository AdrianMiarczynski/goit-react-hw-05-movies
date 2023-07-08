import { styled } from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;
  padding: 1rem;

  &.active {
    color: orange;
  }
`;

const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/search">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
