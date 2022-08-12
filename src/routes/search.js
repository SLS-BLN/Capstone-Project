import styled from 'styled-components/macro';
import {blogEntries} from '../components/Blog/BlogData';
import {videoEntries} from '../components/Video/VideoData';
import BlogTag from '../components/Blogtag/BlogTag';
import SearchBar from '../components/Search/SearchBar';
import {useState} from 'react';
import ItemList from '../components/Search/ItemList';

export default function Search() {
  const allTags = Array.from(new Set([...blogEntries, ...videoEntries].map(entry => entry.tag))).sort();

  const [searchTerm, setSearchTerm] = useState('');
  function onSearchChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  const items = [...blogEntries, ...videoEntries];
  const displayedItems = items.filter(item => {
    return item.tag.toLowerCase().includes('Dreh'.toLowerCase());
  });

  return (
    <SearchContainer>
      <h1>
        Was möchtest <span>du lernen?</span>
      </h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <ItemList items={displayedItems} />
      <h2>Suche nach Schlagwort</h2>
      {allTags.map(tagName => (
        <BlogTag key={tagName} tagName={tagName} />
      ))}
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

// const ItemList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 3rem;
//   padding-bottom: 2rem;
//   list-style-type: none;
//   width: 100%;
//   height: 100%;
//   overflow-y: scroll;
//   overflow-x: hidden;
//   scrollbar-width: none;
//   ::-webkit-scrollbar {
//     width: 0px;
//     background: transparent;
//   }
// `;
