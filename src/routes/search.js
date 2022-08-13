import styled from 'styled-components/macro';
import {blogEntries} from '../components/Blog/BlogData';
import {videoEntries} from '../components/Video/VideoData';
import BlogTag from '../components/Blogtag/BlogTag';
import SearchBar from '../components/Search/SearchBar';
import {useState} from 'react';

export default function Search() {
  const allTags = Array.from(new Set([...blogEntries, ...videoEntries].map(entry => entry.tag))).sort();
  const [searchTerm, setSearchTerm] = useState('');
  // const [isActive, setIsActive] = useState(0);

  // will be replaced by searchTerm
  // const searchTermProvisional = 'der';

  const displayBlogs = blogEntries.filter(item => {
    return item.text.join().toLowerCase().includes(searchTerm.toLowerCase());
  });
  const displayVideos = videoEntries.filter(item => {
    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const numberOfResults = displayVideos.length + displayBlogs.length;

  return (
    <>
      <FormSearch>
        <HeadingPrimary>Was suchst du?</HeadingPrimary>
        <SearchBar onSearchTermChange={setSearchTerm} />
        {numberOfResults === 0 && <NoResult>Die Suche ergab leider kein Ergebnis</NoResult>}
        {displayBlogs.map(item => (
          <ItemList key={item.id}>{item.titleShort}</ItemList>
        ))}
        {displayVideos.map(item => (
          <ItemList key={item.title}>{item.titleShort}</ItemList>
        ))}
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

const ItemList = styled.div`
  color: var(--font-color);
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
