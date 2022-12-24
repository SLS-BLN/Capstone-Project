import styled from 'styled-components/macro';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';

export function ButtonPreviousSlide({prevSlide}) {
  const handleClick = () => {
    prevSlide();
  };
  return (
    <Button aria-label="last slide" className="btn-left" onClick={handleClick}>
      <FaChevronLeft />
    </Button>
  );
}

export function ButtonNextSlide({nextSlide}) {
  const handleClick = () => {
    nextSlide();
  };
  return (
    <Button aria-label="next slide" className="btn-right" onClick={handleClick}>
      <FaChevronRight />
    </Button>
  );
}

const Button = styled.button`
  font-size: 2.4rem;
  color: var(--font-color);
  border: none;
  background-color: transparent;
  padding-bottom: 2rem;

  &.btn-left {
    padding-left: 0.5rem;
  }

  &.btn-right {
    padding-right: 0.5rem;
  }
`;
