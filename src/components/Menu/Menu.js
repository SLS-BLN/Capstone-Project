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
      <NavLink to="/" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
        Home
      </NavLink>
      <NavLink to="blog" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
        Blog
      </NavLink>
      <NavLink to="video" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
        Video
      </NavLink>
      <Last>
        <NavLink to="search" onClick={open} style={({isActive}) => (isActive ? activeStyle : undefined)}>
          <MagnifyingGlass size={64} />
        </NavLink>
      </Last>
    </NavMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

const NavMenu = styled.nav`
  /* add CSS page animation - transformX - "display: none" doesn't work */
  display: ${({open}) => (open ? 'grid' : 'none')};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  margin-top: 3rem;
  background: var(--color-grey-dark-2);
  height: 90vh;

  a {
    grid-column: 2;
    font-size: 2.2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: var(--color-white);
    text-decoration: none;
  }
`;

const Last = styled.div`
  grid-row: 9;
  grid-column: 3;
  justify-items: left;
`;
