import styled from 'styled-components/macro';

export default function MoreButton({goToBlog}) {
  const handleClick = () => {
    goToBlog();
  };
  return (
    <Button role="button" onClick={handleClick}>
      Weiter lesen ...
    </Button>
  );
}

const Button = styled.button`
  color: var(--font-color);
  background-color: var(--color-primary);
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  &:hover {
    background-color: var(--color-primary-dark);
    cursor: pointer;
  }
`;
