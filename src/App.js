import styled from 'styled-components/macro';
import Blog from './components/blog/Blog';
import {ReactComponent as Logo} from './logo.svg';

import Carousel from './components/carousel/Carousel';

export default function App() {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
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
