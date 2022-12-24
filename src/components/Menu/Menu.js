import styled from 'styled-components/macro';
import {NavLink} from 'react-router-dom';
import {bool} from 'prop-types';
import {MagnifyingGlass} from 'phosphor-react';

export default function Menu({open, setOpen}) {
  const activeStyle = {
    color: 'var(--color-secondary)',
  };
  return (
    <NavMenu open={open}>
      <StyledNavLink to="/" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
        Home
      </StyledNavLink>
      <StyledNavLink to="blog" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
        Blog
      </StyledNavLink>
      <StyledNavLink to="video" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
        Video
      </StyledNavLink>
      <Last>
        <StyledNavLink to="search" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
          <MagnifyingGlass size={64} />
        </StyledNavLink>
      </Last>
    </NavMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

const NavMenu = styled.nav`
  display: ${({open}) => (open ? 'grid' : 'none')};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  margin-top: 3rem;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg width='529' height='502' viewBox='0 0 529 502' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M529 251C529 389.623 410.579 502 264.5 502C118.421 502 0 389.623 0 251C0 112.377 118.421 0 264.5 0C410.579 0 529 112.377 529 251Z' fill='%234FB5DC' fill-opacity='0.22'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 24rem top 5rem;
  background-size: 200%;
  background-clip: border-box;
`;

const StyledNavLink = styled(NavLink)`
  grid-column: 2;
  font-size: 2.2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: var(--color-white);
  text-decoration: none;
`;

const Last = styled.div`
  grid-row: 8;
  grid-column: 3;
  justify-items: left;
`;
