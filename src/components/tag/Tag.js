import styled from 'styled-components/macro';

export default function Tag() {
  return (
    <Container>
      <h1>Kamera</h1>
    </Container>
  );
}

const Container = styled.article`
  font-size: 1.2rem;
  color: var(--color-white);
  background-color: var(--color-secondary);
`;
