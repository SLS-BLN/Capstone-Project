import styled from 'styled-components/macro';
import Blog from './components/blog/Blog';
import {ReactComponent as Logo} from './logo.svg';

export default function App() {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <Blog />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  background-color: var(--color-grey-dark-2);
`;

const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-primary);
  height: 7rem;
  position: relative;

  svg {
    position: absolute;
    left: 3rem;
    top: -0.4rem;
    width: 8em;
    height: 8rem;
  }
`;
