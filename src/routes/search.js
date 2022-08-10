import SearchByTag from '../components/Search/search-by-tag';
import styled from 'styled-components/macro';

export default function Search() {
  return (
    <SearchContainer>
      <main style={{padding: '1rem'}}>
        <h2>Suche</h2>
      </main>
      <SearchByTag />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  margin: 0 3rem;
  padding-bottom: 2rem;
`;
