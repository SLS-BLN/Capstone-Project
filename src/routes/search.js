import styled from 'styled-components/macro';
import {blogEntries} from '../components/Blog/BlogData';
import {videoEntries} from '../components/Video/VideoData';
import BlogTag from '../components/Blogtag/BlogTag';
import SearchBar from '../components/Search/SearchBar';
import {useState} from 'react';

export default function Search() {
  const allTags = Array.from(new Set([...blogEntries, ...videoEntries].map(entry => entry.tag))).sort();
  const [searchTerm, setSearchTerm] = useState('');

  // will be replaced by searchTerm
  // const searchTermProvisional = 'der';

  const displayBlogs = blogEntries.filter(item => {
    return item.text.join().toLowerCase().includes(searchTerm.toLowerCase());
  });
  const displayVideos = videoEntries.filter(item => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <SearchContainer>
      <h1>
        Was möchtest <span>du lernen?</span>
      </h1>
      <SearchBar onSearchTermChange={setSearchTerm} />
      {displayBlogs.map(item => (
        <ItemList key={item.id}>{item.titleShort}</ItemList>
      ))}
      {displayVideos.map(item => (
        <ItemList key={item.title}>{item.titleShort}</ItemList>
      ))}

      <h2>Suche nach Schlagwort</h2>
      {allTags.map(tagName => (
        <BlogTag key={tagName} tagName={tagName} />
      ))}
    </SearchContainer>
  );
}

const ItemList = styled.div`
  color: var(--font-color);
`;

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
