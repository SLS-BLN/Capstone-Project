import styled from 'styled-components/macro';
import {blogEntries} from './Blogdata';

export default function BlogBox() {
  return (
    <>
      {blogEntries.map(blog => (
        <Box key={blog.id} className="box">
          <div className="box__image">
            <p className="tag">{blog.tag} </p>
            <img src={blog.imgUrl} alt={blog.imgAlt} width={'150vw'} />
          </div>
          <div className="box__text">
            <h2>{blog.titleShort}</h2>
            <p>
              {blog.lead} {blog.text}
            </p>
          </div>
        </Box>
      ))}
    </>
  );
}

const Box = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: var(--color-grey-dark-1);
  padding: 1rem;
  max-width: 80vw;
  margin: 0 auto;

  .box__image {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  }
  .tag {
    font-size: 1.2rem;
    background-color: var(--color-secondary);
    color: var(--font-color-dark);
    padding: 0.1rem 1rem;
  }

  .box__text {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 50vw;
    margin-left: 1rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }
`;
