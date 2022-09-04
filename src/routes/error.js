import styled from 'styled-components';

export default function Error() {
  return (
    <Section>
      <Title>Fehler</Title>
      <Text>Hier ist leider nichts zu finden!</Text>
    </Section>
  );
}

const Section = styled.section`
  margin: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: left;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: left;
`;
