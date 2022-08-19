import styled from 'styled-components';

export default function Error() {
  return (
    <Section>
      <h2>Fehler</h2>
      <p>Hier ist leider nichts zu finden!</p>
    </Section>
  );
}

const Section = styled.section`
  margin: 3rem;
`;
