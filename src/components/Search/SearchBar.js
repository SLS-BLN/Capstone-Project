import styled from 'styled-components/macro';

export default function SearchBar({handleChange}) {
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
