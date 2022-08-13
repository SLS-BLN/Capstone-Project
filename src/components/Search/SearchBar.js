import styled from 'styled-components/macro';

export default function SearchBar({onSearchTermChange}) {
  const handleChange = e => {
    e.preventDefault();
    onSearchTermChange(e.target.value);
  };

  return (
    <SearchBarContainer>
      <SearchBarInput type="text" id="search" placeholder="Suchwort eingeben" onChange={handleChange} />
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
