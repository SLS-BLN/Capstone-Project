import styled from 'styled-components/macro';

export default function SearchBar({onSearchChange, searchTerm}) {
  function handleChange(e) {
    const searchTerm = e.target.value;
    console.log(searchTerm);

    onSearchChange(searchTerm);
  }

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        id="search"
        placeholder="Suchwort eingeben"
        value={searchTerm}
        onChange={handleChange}
      />
      <SearchBarButton type="submit">
        <SearchIcon />
      </SearchBarButton>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  display: flex;
`;
const SearchBarInput = styled.input`
  font-size: 1.2rem;
  font-weight: 200;
  color: var(--font-color);
  border-radius: var(--radius);
`;
const SearchBarButton = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--font-color);
  border-radius: var(--radius);
  border: none;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
`;

const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
