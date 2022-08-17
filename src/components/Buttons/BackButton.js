import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>Zurück</Button>;
}

const Button = styled.button`
  display: block;
  color: var(--font-color);
  background-color: var(--color-primary);
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  margin-bottom: 1rem;
  &:hover {
    background-color: var(--color-primary-dark);
    cursor: pointer;
  }
`;
