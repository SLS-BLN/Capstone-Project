import styled from 'styled-components/macro';
import {NavLink} from 'react-router-dom';
import {bool} from 'prop-types';

export default function Menu({open, setOpen}) {
  return (
    <StyledMenu open={open}>
      <NavLink to="/" onClick={open}>
        Home
      </NavLink>
      <NavLink to="blog" onClick={open}>
        Blog
      </NavLink>
      <NavLink to="video" onClick={open}>
        Video
      </NavLink>
      <NavLink to="search" onClick={open}>
        Suche
      </NavLink>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

const StyledMenu = styled.nav`
  /* add CSS page animation - transformX - "display: none" doesn't work */
  display: ${({open}) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 8rem 0;
  background: var(--color-grey-dark-2);
  height: 100vh;

  a {
    font-size: 2.2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: var(--color-white);
    text-decoration: none;

    &:hover {
      color: var(--color-secondary);
    }
  }
`;
