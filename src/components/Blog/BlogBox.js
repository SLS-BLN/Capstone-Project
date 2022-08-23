import styled from 'styled-components/macro';
import {useNavigate} from 'react-router-dom';
import {BlogTagLine} from '../Blogtag/BlogTag';

export function BlogBox({blog}) {
  const navigate = useNavigate();

  return (
    <Article>
      <ImageBox className="box__image">
        <BlogTagLine tagName={blog.tag} />
        <BlogImage width={560} height={316} src={blog.imgUrlSquare} alt={blog.imgAlt} />
      </ImageBox>
      <TextBox className="box__text">
        <Subheading>{blog.titleShort}</Subheading>
        <Text>
          {blog.lead} {blog.text}
        </Text>
        <MoreButton
          onClick={() => {
            navigate(`/blog/${blog.slug}`);
          }}
        >
          Mehr dazu ...
        </MoreButton>
      </TextBox>
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  justify-content: center;
  background-color: var(--color-grey-dark-1);
  padding: 1rem 0;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 100%;
`;
const BlogImage = styled.img`
  max-width: 100%;
  height: auto;
  aspect-ratio: 16/9;
`;

const TextBox = styled.div`
  width: 50%;
  padding: 0 1rem;
`;

const Subheading = styled.h2`
  font-size: 1.2rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.5rem 0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix  */
  -webkit-line-clamp: var(--line-clamp, 5); /* stylelint-disable-line property-no-vendor-prefix */
  -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
  word-break: var(--word-break, 'none');
  overflow: hidden;
  hyphens: auto;
  text-align: var(--align, left);

  --is-single-line: 1 - clamp(0, calc(var(--line-clamp) - 1), var(--line-clamp));
  --delay: calc(-1s * (var(--is-single-line, 1) - 1));

  animation: states 1s var(--delay) paused;
  margin-bottom: 1rem;
`;

const MoreButton = styled.button`
  color: var(--font-color);
  background-color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.01rem;
  border-radius: var(--radius);
  &:hover {
    background-color: var(--color-primary-dark);
    cursor: pointer;
  }
`;
