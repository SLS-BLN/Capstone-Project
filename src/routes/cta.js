import ReactPlayer from 'react-player';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

export default function Cta() {
  const navigate = useNavigate();
  return (
    <Section>
      <VideoClip className="grid">
        <div style={{'--aspect-ratio': '16 / 9'}}>
          <ReactPlayer url={'https://vimeo.com/394421001'} width="640" height="480" controls={true} playsinline />
        </div>
      </VideoClip>
      <Textbox>
        <Title>
          Deine Filme <span>selber machen</span>
        </Title>
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
        <CtaImage src="https://res.cloudinary.com/dq2vrujou/image/upload/v1660468307/Food_dkv0qh.png"></CtaImage>
      </Textbox>
    </Section>
  );
}

const Section = styled.section`
  background-image: url("data:image/svg+xml,%3Csvg width='529' height='502' viewBox='0 0 529 502' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M529 251C529 389.623 410.579 502 264.5 502C118.421 502 0 389.623 0 251C0 112.377 118.421 0 264.5 0C410.579 0 529 112.377 529 251Z' fill='%234FB5DC' fill-opacity='0.22'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 20rem top 22rem;
`;

const VideoClip = styled.article`
  margin-bottom: 2rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.1rem;
  }

  [style*='--aspect-ratio'] > :first-child {
    width: 100%;
  }

  [style*='--aspect-ratio'] > img {
    height: auto;
  }

  @supports (--custom: property) {
    [style*='--aspect-ratio'] {
      position: relative;
    }

    [style*='--aspect-ratio']::before {
      content: '';
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }

    [style*='--aspect-ratio'] > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
`;

const Textbox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
`;

const Title = styled.h1`
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
  margin-bottom: 4rem;
`;

const CtaImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 4rem;
`;
