import styled from 'styled-components/macro';
import {blogEntries} from '../components/Blog/BlogData';
import {videoEntries} from '../components/Video/VideoData';
import BlogTag from '../components/Blogtag/BlogTag';

export default function Search() {
  const allTags = Array.from(new Set([...blogEntries, ...videoEntries].map(entry => entry.tag))).sort();
  return (
    <>
      <FormSearch>
        <HeadingPrimary>
          Was möchtest <span>du lernen?</span>
        </HeadingPrimary>
      </FormSearch>
      <TagSearch>
        <HeadingSecondary>Suche nach Schlagwort</HeadingSecondary>
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
`;

const HeadingPrimary = styled.h1`
  font-size: 2.6rem;
  text-align: center;
  margin-bottom: 4rem;

  span {
    display: block;
  }
`;

const TagSearch = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 0 3rem;
`;

const HeadingSecondary = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1rem;
  grid-column: 1 / -1;
`;
