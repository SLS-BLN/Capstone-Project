import styled from 'styled-components/macro';
import ReactPlayer from 'react-player/vimeo';
import {videoEntries} from '../components/Video/VideoData';
import {useNavigate} from 'react-router-dom';
import BlogTag from '../components/Blogtag/BlogTag';

export default function VideoMain() {
  // hard coded at the moment - should be dynamic (newest date)
  const video = videoEntries.at(-1);
  const navigate = useNavigate();

  return (
    <Container>
      <Hero key={video.id}>
        <VideoClip className="grid">
          <div style={{'--aspect-ratio': '16 / 9'}}>
            <ReactPlayer url={video.videoUrl} width="640" height="480" controls={true} playsinline />
          </div>
        </VideoClip>
        <div className="description">
          <BlogTag tagName={video.tag} />
          <h1>{video.titleShort}</h1>
          <p>{video.description}</p>
        </div>
      </Hero>
      <h2>Beliebt</h2>
      <VideoContainer>
        <ul>
          {/* sort by likes later on */}
          {videoEntries.map((video, index) => (
            <li key={index}>
              <h3>{video.titleShort}</h3>
              <VideoClip className="grid">
                <div style={{'--aspect-ratio': '16 / 9'}}>
                  <ReactPlayer url={video.videoUrl} width="640" height="480" controls={true} playsinline />
                </div>
                <MoreButtonPlain
                  role="navigation"
                  aria-label="Video Clip"
                  onClick={() => {
                    navigate(`/video/${video.slug}`);
                  }}
                >
                  Mehr dazu ...
                </MoreButtonPlain>
              </VideoClip>
            </li>
          ))}
        </ul>
      </VideoContainer>
      <h2>Neu</h2>
      <VideoContainer>
        <ul>
          {/* sort by date later on */}
          {videoEntries.map((video, index) => (
            <li key={index}>
              <h3>{video.titleShort}</h3>
              <VideoClip className="grid">
                <div style={{'--aspect-ratio': '16 / 9'}}>
                  <ReactPlayer url={video.videoUrl} width="640" height="480" controls={true} playsinline />
                </div>
                <MoreButtonPlain
                  role="navigation"
                  aria-label="Video Clip"
                  onClick={() => {
                    navigate(`/video/${video.slug}`);
                  }}
                >
                  Mehr dazu ...
                </MoreButtonPlain>
              </VideoClip>
            </li>
          ))}
        </ul>
      </VideoContainer>
    </Container>
  );
}

const Hero = styled.div`
  background-color: var(--color-grey-dark-2);
  background-color: var(--color-grey-dark-2);
  background-image: url("data:image/svg+xml,%3Csvg width='529' height='502' viewBox='0 0 529 502' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M529 251C529 389.623 410.579 502 264.5 502C118.421 502 0 389.623 0 251C0 112.377 118.421 0 264.5 0C410.579 0 529 112.377 529 251Z' fill='%234FB5DC' fill-opacity='0.22'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: top 20rem left 20rem;

  .description {
    padding: 1rem 0;
    margin: 0 3rem;
    margin-bottom: 6rem;
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

const Container = styled.section`
  margin: 0;
  padding-bottom: 2rem;

  h2 {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.15rem 1rem;
    background-color: var(--color-primary);
    color: var(--font-color-light);
    min-width: 10rem;
    margin-bottom: 1rem;
    margin-left: 0.1rem;
  }
`;

const VideoContainer = styled.section`
  margin: 0;
  margin-bottom: 4rem;
  margin-left: 0.7rem;
  overflow-x: scroll;

  h3 {
    padding: 0.35rem 0;
    font-size: 1.6rem;
    font-weight: 300;
  }

  ul {
    list-style: none;
    display: flex;

    /* math calculation would be better */
    width: 267.5rem;
  }

  li {
    /* math calculation would be better */
    height: 21rem;
    width: 26.66rem;
    background-color: var(--color-grey-dark-2);
    padding: 0 0.5rem;
  }
`;

const MoreButtonPlain = styled.button`
  color: var(--font-color);
  background-color: var(--color-grey-dark-2);
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  &:hover {
    background-color: var(--color-black);
    cursor: pointer;
  }
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
