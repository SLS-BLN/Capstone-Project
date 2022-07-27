import styled from 'styled-components/macro';
import Blog from './blog/Blog';

export default function App() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  background-color: var(--color-tertiary);
`;
