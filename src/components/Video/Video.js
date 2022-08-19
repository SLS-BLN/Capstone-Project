import styled from 'styled-components/macro';
import {videoEntries} from './VideoData';
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player/vimeo';
import BlogTag from '../Blogtag/BlogTag';
import BackButton from '../Buttons/BackButton';

export default function Video({style}) {
  let {slug} = useParams();
  const videoPost = videoEntries.filter(item => item.slug === slug);

  return (
    <>
      {videoPost.map(video => (
        <Container key={video.id} style={style}>
          <VideoClip>
            <div style={{'--aspect-ratio': '16 / 9'}}>
              <ReactPlayer url={video.videoUrl} width="640" height="480" controls={true} playsinline />
            </div>
          </VideoClip>
          <Description>
            <BlogTag tagName={video.tag} />
            <HeadingPrimary>{video.titleShort}</HeadingPrimary>
            <Paragraph>{video.description}</Paragraph>
            <BackButton />
          </Description>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  padding-bottom: 40rem;
`;

const HeadingPrimary = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.8rem;
`;

const Paragraph = styled.p`
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const Description = styled.article`
  padding: 1rem 0;
  margin: 0 3rem 1rem;
`;

const VideoClip = styled.section`
  margin-bottom: 2rem;

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
