import ReactPlayer from 'react-player/vimeo';
import styled from 'styled-components/macro';
import {useNavigate} from 'react-router-dom';
import {blogEntries} from '../components/Blog/BlogData';
import BlogTag from '../components/Blogtag/BlogTag';
import Carousel from '../components/Carousel/Carousel';

export default function Home() {
  // hard coded at the moment - should be dynamic (newest date)
  const blog = blogEntries.at(-1);
  const navigate = useNavigate();

  return (
    <>
      <Teaser key={blog.id}>
        <TeaserImage src={blog.imgUrl} alt={blog.imgAlt} width={300} />
        <BlogTag tagName={blog.tag} />
        <Title>{blog.title}</Title>
        <Text>
          {blog.lead} {blog.text.at(0)}
        </Text>
        <MoreButton
          role="navigation"
          aria-label="Blog Post"
          onClick={() => {
            navigate(`/blog/${blog.slug}`);
          }}
        >
          Mehr dazu ...
        </MoreButton>
      </Teaser>
      <Carousel />
      <Video>
        <div style={{'--aspect-ratio': '16 / 9'}}>
          <ReactPlayer url="https://vimeo.com/737176389" width="640" height="480" controls={true} playsinline />
        </div>
      </Video>
    </>
  );
}

const Teaser = styled.article`
  padding: 0 3rem;
  margin-bottom: 4rem;
  background-image: url("data:image/svg+xml,%3Csvg width='529' height='502' viewBox='0 0 529 502' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M529 251C529 389.623 410.579 502 264.5 502C118.421 502 0 389.623 0 251C0 112.377 118.421 0 264.5 0C410.579 0 529 112.377 529 251Z' fill='%234FB5DC' fill-opacity='0.22'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: left 26rem top 5rem;
`;

const TeaserImage = styled.img`
  width: 100%;
  margin: 2rem 0;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-weight: 400;
  margin-bottom: 1rem;
`;

const MoreButton = styled.button`
  color: var(--font-color);
  background-color: var(--color-primary);
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  &:hover {
    background-color: var(--color-primary-dark);
    cursor: pointer;
  }
`;

const Video = styled.section`
  margin-top: 3rem;
  padding-bottom: 4rem;

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
