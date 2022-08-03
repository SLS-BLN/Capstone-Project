import styled from 'styled-components/macro';
import {NavLink} from 'react-router-dom';
import {bool} from 'prop-types';

export default function Menu(open, setOpen) {
  return (
    <StyledMenu>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/video">Video</NavLink>
    </StyledMenu>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 8rem 0;
  background: var(--color-grey-dark-2);
  height: 100vh;

  transition: transform 0.3s ease-in-out;
  /* transform: ${({open}) => (open ? 'translateX(0)' : 'translateX(-100%)')}; */

  a {
    font-size: 2.2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: var(--color-white);
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover  {
      color: var(--color-secondary);
  }
`;
