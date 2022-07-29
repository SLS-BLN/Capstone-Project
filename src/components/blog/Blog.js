import styled from 'styled-components/macro';
import {blogs} from './Blogdata';
import {Fragment} from 'react';
import {nanoid} from 'nanoid';

export default function Blog() {
  return (
    <>
      {blogs.map(blog => (
        <Container key={blog.id}>
          <img src={blog.imgUrl} alt={blog.imgAlt} width={300} />
          <p className="tag">{blog.tag} </p>
          <h1>{blog.title}</h1>
          <p className="lead">{blog.lead}</p>
          <p>{blog.author}</p>
          <p className="date">
            {blog.date}, {blog.dateUpdated}
          </p>
          <div>
            {blog.text.map(paragraph =>
              paragraph.includes('##') ? (
                <h2 key={nanoid()}>{paragraph.substring(2)}</h2>
              ) : (
                <p key={nanoid()} className="textbody">
                  {paragraph}
                </p>
              )
            )}
          </div>
        </Container>
      ))}
    </>
  );
}

const Container = styled.article`
  padding: 0 3rem;
  background-color: var(--color-grey-dark-2);

  img {
    width: 100%;
    margin-top: 7rem;
    margin-bottom: 3rem;
  }

  .tag {
    font-size: 1.2rem;
    margin-bottom: 1.4rem;
    background-color: var(--color-secondary);
    color: var(--font-color-dark);
    padding: 0.1rem 1rem;
    width: 6rem;
    border-radius: var(--radius);
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2rem;
  }

  .lead {
    line-height: 1.6;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .textbody {
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 1.6rem;
  }

  .date {
    font-size: 1rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }
`;
