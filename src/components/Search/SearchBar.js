import styled from 'styled-components/macro';
import {useState} from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        id="search"
        placeholder="Suchwort eingeben"
        onChange={event => setSearchTerm(event.target.value)}
      />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  display: flex;
`;
const SearchBarInput = styled.input`
  font-size: 2rem;
  font-weight: 200;
  padding: 1rem;
  color: var(--font-color-dark);
  border-radius: var(--radius);
`;
