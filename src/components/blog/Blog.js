import styled from 'styled-components/macro';
import {blogEntries} from './Blogdata';
import {nanoid} from 'nanoid';
import {useParams} from 'react-router-dom';

export default function Blog({style}) {
  let {slug} = useParams();
  const obj = blogEntries.filter(item => item.slug === slug);

  return (
    <>
      {obj.map(blog => (
        <Container key={blog.id} style={style}>
          <img src={blog.imgUrl} alt={blog.imgAlt} width={300} />
          <p className="tag">{blog.tag} </p>
          <h1>{blog.title}</h1>
          <p>{blog.lead}</p>
          <ul>
            <li className="author">{blog.author}</li>
            <li className="date">
              {blog.date}, {blog.dateUpdated}
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

  .lead {
    line-height: 1.6;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
  }
  .author {
    font-size: 1.2rem;
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
