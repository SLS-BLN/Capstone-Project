import styled from 'styled-components/macro';
import {blogEntries} from './BlogData';
import {nanoid} from 'nanoid';
import {useParams} from 'react-router-dom';
import BlogTag from '../Blogtag/BlogTag';
import BackButton from '../Buttons/BackButton';

export default function Blog() {
  const {slug} = useParams();
  const blogPost = blogEntries.filter(item => item.slug === slug);

  return (
    <>
      {blogPost.map(blog => (
        <Container key={blog.id}>
          <div>
            <img src={blog.imgUrl} alt={blog.imgAlt} width={355} height={200} />
            <BackButton />
            <BlogTag tagName={blog.tag} />
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.lead}</p>
          <ul>
            <li className="author">{blog.author}</li>
            <li className="date">
              {blog.date} {blog.dateUpdated}
            </li>
          </ul>
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
          <BackButton />
        </Container>
      ))}
    </>
  );
}

const Container = styled.article`
  padding: 0 3rem 10rem;
  background-color: var(--color-grey-dark-2);

  img {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .lead {
    line-height: 1.6;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
  }
  .author {
    margin-top: 1.5rem;
    font-size: 1.4rem;
    font-weight: 400;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .textbody {
    line-height: 1.4;
    font-weight: 400;
    margin-bottom: 1.6rem;
  }

  .date {
    font-size: 1.2rem;
    font-weight: 100;
    margin-bottom: 2rem;
  }
`;
