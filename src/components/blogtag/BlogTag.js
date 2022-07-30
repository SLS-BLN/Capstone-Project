import styled from 'styled-components/macro';

export default function BlogTag({label, color, backgroundColor}) {
  const style = {backgroundColor: `${backgroundColor}`, color: `${color}`};

  return <Button style={style}>{label}</Button>;
}

const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: var(--radius-small);
`;
