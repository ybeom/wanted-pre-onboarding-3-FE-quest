import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;
`;

export const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column;
  margin: 4rem auto 4rem 4rem;
  padding: 0;
`;

export const NavItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: aqua;
  }
`;
