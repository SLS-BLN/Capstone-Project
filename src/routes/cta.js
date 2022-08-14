import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

export default function Cta() {
  const navigate = useNavigate();
  return (
    <Main>
      <Image src="https://res.cloudinary.com/dq2vrujou/image/upload/v1660468307/Food_dkv0qh.png"></Image>
      <Container>
        <HeadingPrimary>
          Deine Filme <span>selber machen</span>
        </HeadingPrimary>
        <Text>
          Mit dem Smartphone drehen kann jeder. Macht es dann noch Sinn, tausende Euros für eine Videoproduktion
          auszugeben? Lässt sich das nicht in house erledigen?
        </Text>
        <CtaButton
          onClick={() => {
            navigate('/');
          }}
        >
          Mehr dazu
        </CtaButton>
      </Container>
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
`;

const HeadingPrimary = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const CtaButton = styled.button`
  font-size: 2rem;
  color: var(--font-color);
  background-color: var(--color-primary-light);
  padding: 1rem 2rem;
  border: none;
  border-radius: var(--radius);
  margin-bottom: 2rem;
`;
