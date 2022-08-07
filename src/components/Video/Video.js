import styled from 'styled-components/macro';
import {videoEntries} from './VideoData';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player/vimeo';

export default function Video({style}) {
  const navigate = useNavigate();
  let {slug} = useParams();
  const obj = videoEntries.filter(item => item.slug === slug);

  return (
    <>
      {obj.map(video => (
        <Container key={video.id} style={style}>
          <Hero>
            <VideoClip className="grid">
              <div style={{'--aspect-ratio': '16 / 9'}}>
                <ReactPlayer url={video.videoUrl} width="640" height="480" controls="true" playsinline />
              </div>
            </VideoClip>
            <div className="description">
              <p className="tag">{video.tag} </p>
              <h1>{video.titleShort}</h1>
              <p>{video.description}</p>
            </div>
          </Hero>
          <BackButton className="tag-and-back" onClick={() => navigate(-1)}>
            Zurück
          </BackButton>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  margin-bottom: 10rem;
`;

const Hero = styled.div`
  background-color: var(--color-grey-dark-2);

  .description {
    padding: 1rem 0;
    margin: 0 3rem 6rem;
  }

  .tag {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    background-color: var(--color-secondary);
    color: var(--font-color-dark);
    padding: 0.1rem 1rem;
    min-width: 6rem;
    border-radius: var(--radius);
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.8rem;
  }

  p {
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
`;

const BackButton = styled.button`
  color: var(--font-color);
  background-color: var(--color-primary-light);
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  margin: 0 3rem 5rem;
`;

const VideoClip = styled.section`
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
