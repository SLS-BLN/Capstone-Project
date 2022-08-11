import styled from 'styled-components/macro';
import {tagColors} from './blog-tag-data';
import {useNavigate} from 'react-router-dom';


export default function BlogTag({tagName}) {
  let navigate = useNavigate();
  const colorVar = tagColors.find(col => col.tag === tagName).color;

  return (
    <>
      <Button
        style={{backgroundColor: colorVar}}
        role="navigation"
        aria-label={`Zeige alle Artikel und Videos zum Thema ${tagName}`}
        onClick={() => {
          navigate(`/search/${tagName}`.toLowerCase());
        }}
      >
        {tagName}
      </Button>
    </>
  );
}

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-font);
  border-radius: var(--radius);
  border: none;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
`;

export function BlogTagLine({tagName}) {
  const colorVar = tagColors.find(col => col.tag === tagName).color;

  return (
    <>
      <Paragraph style={{backgroundColor: colorVar ? colorVar : 'black'}}>{tagName}</Paragraph>
    </>
  );
}

const Paragraph = styled.div`
  font-size: 1.2rem;
  color: var(--font-color);
  padding: 0.25rem 1rem;
`;
