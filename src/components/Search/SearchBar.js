import styled from 'styled-components/macro';

export default function SearchBar({onSearchTermChange}) {
  const handleChange = e => {
    e.preventDefault();
    onSearchTermChange(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearchTermChange(e.target.value);
  };

  return (
    <SearchBarContainer type="submit" onClick={handleSubmit}>
      <SearchBarInput type="search" id="search" placeholder="Suche nach ..." onChange={handleChange} />
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBarInput = styled.input`
  font-size: 1.6rem;
  font-weight: 200;
  padding: 1rem 3.5rem;
  color: var(--font-color-dark);
  border: 3px solid var(--color-grey-dark-1);
  border-radius: var(--radius);
  margin-bottom: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,.54)' d='M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: left 0.5rem center;

  &:focus {
    border: 3px solid var(--color-primary-light);
    outline: none;
  }
`;
