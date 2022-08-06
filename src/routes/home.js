import Carousel from '../components/Carousel/Carousel';
import {blogEntries} from '../components/Blog/Blogdata';
import styled from 'styled-components/macro';

export default function Home(style) {
  const blog = blogEntries.at(-1);

  return (
    <>
      <Container key={blog.id} style={style}>
        <img src={blog.imgUrl} alt={blog.imgAlt} width={300} />
        <p className="tag">{blog.tag} </p>
        <h1>{blog.title}</h1>
        <p>
          {blog.lead} {blog.text.at(0)}
        </p>
      </Container>
      <Carousel />
    </>
  );
}

const Container = styled.article`
  padding: 0 3rem;
  background-color: var(--color-grey-dark-2);

  img {
    width: 100%;
    margin-top: 2rem;
  }

  .tag {
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 1.4rem;
    background-color: var(--color-secondary);
    color: var(--font-color-dark);
    padding: 0.1rem 1rem;
    min-width: 6rem;
    border-radius: var(--radius);
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  p {
    font-weight: 400;
    margin-bottom: 7rem;
  }
`;
