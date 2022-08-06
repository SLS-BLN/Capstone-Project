import Carousel from '../components/Carousel/Carousel';
import {blogEntries} from '../components/Blog/BlogData';
import styled from 'styled-components/macro';
import {useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player/vimeo';

export default function Home(style) {
  const blog = blogEntries.at(-1);
  let navigate = useNavigate();

  return (
    <>
      <Container key={blog.id} style={style}>
        <img src={blog.imgUrl} alt={blog.imgAlt} width={300} />
        <p className="tag">{blog.tag} </p>
        <h1>{blog.title}</h1>
        <p>
          {blog.lead} {blog.text.at(0)}
        </p>
        <button
          onClick={() => {
            navigate(`/blog/${blog.slug}`);
          }}
        >
          Mehr dazu ...
        </button>
      </Container>
      <Carousel />
      <Video className="grid">
        <div style={{'--aspect-ratio': '16 / 9'}}>
          <ReactPlayer
            url="https://vimeo.com/stefanschlicker/strom"
            width="640"
            height="480"
            controls="true"
            playsinline
          />
        </div>
      </Video>
    </>
  );
}

const Container = styled.article`
  padding: 0 3rem;
  background-color: var(--color-grey-dark-2);
  margin-bottom: 4rem;

  img {
    width: 100%;
    margin: 2rem 0;
  }

  .tag {
    display: inline-block;
    font-size: 1.2rem;
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
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    margin-bottom: 1rem;
  }

  button {
    color: var(--font-color);
    background-color: var(--color-primary-light);
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
`;

const Video = styled.section`
  margin: 3rem 0;

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
