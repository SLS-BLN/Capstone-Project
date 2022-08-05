import {useState} from 'react';
import styled from 'styled-components/macro';
import {ReactComponent as Logo} from './logo.svg';
import {Link, Outlet} from 'react-router-dom';

import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
      </Header>
      <nav>
        <Link to="/blog"></Link>
        <Link to="/video"></Link>
      </nav>
      <Menu open={open} setOpen={open} />
      <Outlet />
      <div className="container"></div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  background-color: var(--color-grey-dark-2);

  .container {
    margin-top: 4rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  max-width: 60rem;
  width: 100%;

  svg {
    margin-left: 3rem;
    width: 8em;
    height: 7rem;
  }
`;
