import styled from 'styled-components/macro';
import {blogEntries} from './Blogdata';

export default function BlogBox() {
  return (
    <>
      {blogEntries.map(blog => (
        <Box key={blog.id} className="box">
          <div className="box__image">
            <p className="tag">{blog.tag} </p>
            <img src={blog.imgUrlSquare} alt={blog.imgAlt} width={'100%'} height={'100%'} />
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
  justify-content: flex-start;
  background-color: var(--color-grey-dark-1);
  padding: 1rem 0;
  max-width: 74vw;
  margin: 0 2rem;
  margin-bottom: 2rem;

  .box__image {
    width: 50%;
    height: 100%;
  }
  .tag {
    font-size: 0.8rem;
    background-color: var(--color-secondary);
    color: var(--font-color);
    padding: 0.1rem 1rem;
  }

  .box__text {
    width: 50%;
    padding: 0 1rem;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix  */
    -webkit-line-clamp: var(--line-clamp, 6); /* stylelint-disable-line property-no-vendor-prefix */
    -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
    word-break: var(--word-break, 'none');
    overflow: hidden;
    hyphens: auto;
    text-align: var(--align, left);

    --is-single-line: 1 - clamp(0, calc(var(--line-clamp) - 1), var(--line-clamp));
    --delay: calc(-1s * (var(--is-single-line, 1) - 1));

    animation: states 1s var(--delay) paused;
  }
`;
