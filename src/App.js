import {useState, useRef} from 'react';
import {useOnClickOutside} from './hooks';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';

import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import Carousel from './components/Carousel/Carousel';
import Blog from './components/Blog/Blog';

export default function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Wrapper>
      <Header>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
      </Header>
      <Menu open={open} setOpen={setOpen} />

      <div className="container">
        <Carousel />
        <Blog />
      </div>
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
