import styled from 'styled-components/macro';

export default function App() {
  return (
    <Wrapper>
      <h1>Willkommen bei Marketing mit Video.</h1>
      <div>Der Blog ist bald verfügbar.</div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  padding: 3rem;
  background-color: var(--color-tertiary);
`;
