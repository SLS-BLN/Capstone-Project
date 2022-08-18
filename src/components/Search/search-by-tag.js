import styled from 'styled-components/macro';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {videoEntries} from '../Video/VideoData';
import {blogEntries} from '../Blog/BlogData';
import BackButton from '../Buttons/BackButton';

export default function SearchByTag() {
  const navigate = useNavigate();
  const {tagName} = useParams();

  const blogSearch = blogEntries.filter(blog => blog.tag.toLowerCase() === tagName);
  const videoSearch = videoEntries.filter(video => video.tag.toLowerCase() === tagName);

  const blogTag = `${tagName.at(0).toUpperCase()}${tagName.substring(1)}`;

  return (
    <>
      <Container>
        <HeadingPrimary>
          mehr zum Thema <Span>{blogTag}</Span> ...
        </HeadingPrimary>
        {blogSearch.map(blog => (
          <ResultBox key={blog.id}>
            <MoreButton>
              <HeadingSecondary
                onClick={() => {
                  navigate(`/blog/${blog.slug}`);
                }}
              >
                {blog.titleShort}
              </HeadingSecondary>
              <Paragraph className="tag tag-blog">Blog</Paragraph>
            </MoreButton>
            <Paragraph>{blog.lead}</Paragraph>
          </ResultBox>
        ))}
        {videoSearch.map(video => (
          <ResultBox key={video.id}>
            <MoreButton>
              <HeadingSecondary
                onClick={() => {
                  navigate(`/video/${video.slug}`);
                }}
              >
                {video.titleShort}
              </HeadingSecondary>
              <Paragraph className="tag tag-video">Video</Paragraph>
            </MoreButton>
            <Paragraph>{video.description}</Paragraph>
          </ResultBox>
        ))}
        <BackButton />
      </Container>
    </>
  );
}

const Container = styled.section`
  padding: 0 3rem 10rem;
  background-color: var(--color-grey-dark-2);

  .tag {
    display: inline-block;
    color: var(--font-color);
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 0.1rem 0.5rem;
    border-radius: var(--radius);
  }

  .tag-video {
    background-color: var(--color-secondary-dark);
  }

  .tag-blog {
    background-color: var(--color-primary);
  }
`;

const HeadingPrimary = styled.h1`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.2;
  margin: 2rem 0 3rem;
`;

const Span = styled.span`
  font-size: 2rem;
  font-weight: 700;
  padding-left: 0.3rem;
  color: var(--color-secondary-light);
`;

const ResultBox = styled.article`
  margin-bottom: 1.25rem;
`;

const HeadingSecondary = styled.h2`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 200;
  line-height: 1.3;
  margin: 1rem 0 0;
  color: var(--font-color);
  text-decoration: underline;
  text-decoration-color: var(--font-color);
  text-underline-offset: 0.15rem;
  margin-right: 1.25rem;

  &:hover {
    text-decoration-color: var(--color-primary);
  }
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.4;
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix  */
  -webkit-line-clamp: var(--line-clamp, 2); /* stylelint-disable-line property-no-vendor-prefix */
  -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
  word-break: var(--word-break, 'none');
  overflow: hidden;
  hyphens: auto;
  text-align: var(--align, left);

  --is-single-line: 1 - clamp(0, calc(var(--line-clamp) - 1), var(--line-clamp));
  --delay: calc(-1s * (var(--is-single-line, 1) - 1));

  animation: states 1s var(--delay) paused;
`;

const MoreButton = styled.button`
  color: var(--font-color);
  background-color: var(--color-grey-dark-2);
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  margin-bottom: 0.01rem;
  border-radius: var(--radius);
`;
