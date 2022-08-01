import styled from 'styled-components/macro';
import Blog from './components/blog/Blog';
import BlogBox from './components/blog/BlogBox';
import {ReactComponent as Logo} from './logo.svg';

export default function App() {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <div className="container">
        <BlogBox />
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
    margin-top: 9rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  position: fixed;
  max-width: 60rem;
  width: 100%;
  margin-top: -9rem;

  svg {
    margin-left: 3rem;
    width: 8em;
    height: 7rem;
  }
`;
