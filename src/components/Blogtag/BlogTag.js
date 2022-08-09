import styled from 'styled-components/macro';
import {tagColors} from './BlogTagData';

export default function BlogTag({tagName}) {
  const colorVar = tagColors.find(col => col.tag === tagName).color;

  return (
    <>
      <Button style={{backgroundColor: colorVar}}>{tagName}</Button>
    </>
  );
}

const Button = styled.button`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-font);
  margin-bottom: 1rem;
  padding: 0.1rem 1rem;
  min-width: 6rem;
  border-radius: var(--radius);
  border: none;
`;
