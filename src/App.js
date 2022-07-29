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
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  position: fixed;
  width: 100%;

  svg {
    margin-left: 3rem;
    width: 8em;
    height: 7rem;
  }
`;
