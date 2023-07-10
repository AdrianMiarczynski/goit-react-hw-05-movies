import { styled } from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharkedLoyaut.module.css'

const StyledLink = styled(NavLink)`
  color: black;
  padding: 1rem;
  text-decoration: none;

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
        <nav className={css.nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
