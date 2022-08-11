import styled from 'styled-components/macro';
import {blogEntries} from '../components/Blog/BlogData';
import {videoEntries} from '../components/Video/VideoData';
import BlogTag from '../components/Blogtag/BlogTag';

export default function Search() {
  const tagArray = [];
  const allEntries = [...blogEntries, ...videoEntries];
  for (let {tag} of allEntries) {
    tagArray.push(tag);
  }

  const uniqueSet = new Set(tagArray);
  const allTags = [...uniqueSet].sort();
  console.log(allTags);

  return (
    <SearchContainer>
      <main style={{padding: '1rem'}}>
        <h1>
          Was möchtest <span>du lernen?</span>
        </h1>
        <h2>Suche nach Schlagwort</h2>
        {allTags.map((tagName, index) => (
          <BlogTag key={index} tagName={tagName} />
        ))}
      </main>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 2.6rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  span {
    display: block;
  }

  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    margin: 1rem 1rem;
  }
`;
