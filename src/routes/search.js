import styled from 'styled-components/macro';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {blogEntries} from '../components/Blog/BlogData';
import {videoEntries} from '../components/Video/VideoData';
import BlogTag from '../components/Blogtag/BlogTag';
import SearchBar from '../components/Search/SearchBar';

export default function Search() {
  const navigate = useNavigate();
  const allTags = Array.from(new Set([...blogEntries, ...videoEntries].map(entry => entry.tag))).sort();
  const [searchTerm, setSearchTerm] = useState('');
  const displayBlogs = blogEntries.filter(item => {
    return item.text.join().toLowerCase().includes(searchTerm.toLowerCase());
  });
  const displayVideos = videoEntries.filter(item => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const numberOfResults = displayVideos.length + displayBlogs.length;
  const searchTermLength = searchTerm.length;

  return (
    <>
      <FormSearch>
        <Title>Lust auf mehr?</Title>
        <SearchBar onSearchTermChange={setSearchTerm} />
        {numberOfResults === 0 && <NoResult>Die Suche ergab leider kein Ergebnis</NoResult>}
        {searchTermLength > 2 &&
          displayBlogs.map(blog => (
            <ResultBox key={blog.id}>
              <ResultTitle
                onClick={() => {
                  navigate(`/blog/${blog.slug}`);
                }}
              >
                {blog.titleShort}
              </ResultTitle>
              <Tag className="tag-blog">Blog</Tag>
              <Text>
                {blog.lead} {blog.text[0]}{' '}
              </Text>
            </ResultBox>
          ))}
        {searchTermLength > 2 &&
          displayVideos.map(video => (
            <ResultBox key={video.id}>
              <ResultTitle
                onClick={() => {
                  navigate(`/video/${video.slug}`);
                }}
              >
                {video.titleShort}
              </ResultTitle>
              <Tag className="tag-video">Video</Tag>
              <Text>{video.description}</Text>
            </ResultBox>
          ))}
      </FormSearch>
      <TagSearch>
        <Subheading>Suche nach Schlagwort</Subheading>
        {allTags.map(tagName => (
          <BlogTag key={tagName} tagName={tagName} />
        ))}
      </TagSearch>
    </>
  );
}

const FormSearch = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
  padding-bottom: 2rem;
  background-color: var(--color-grey-dark-2);
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 2.5rem 0;

  span {
    display: block;
  }
`;

const NoResult = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1rem;
`;

const TagSearch = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 0 3rem;
  padding-bottom: 40rem;

  button {
    padding: 0.75rem;
  }
`;

const Subheading = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1rem;
  grid-column: 1 / -1;
`;

const ResultBox = styled.article`
  margin-bottom: 1.25rem;
  background-color: var(--color-grey-dark-2);
`;

const Tag = styled.p`
  display: inline-block;
  color: var(--font-color);
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  padding: 0.1rem 0.5rem;
  border-radius: var(--radius);

  &.tag-video {
    background-color: var(--color-secondary-dark);
  }

  &.tag-blog {
    background-color: var(--color-primary);
  }
`;

const ResultTitle = styled.h3`
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
    cursor: pointer;
    text-decoration-color: var(--color-primary);
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.4;
  display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix  */
  -webkit-line-clamp: 2; /* stylelint-disable-line property-no-vendor-prefix */
  -webkit-box-orient: vertical; /* stylelint-disable-line property-no-vendor-prefix */
  overflow: hidden;
  hyphens: auto;
  text-align: left;
`;
