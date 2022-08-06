import {useState} from 'react';
import styled from 'styled-components';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {blogEntries} from '../Blog/BlogData';
import BlogBox from '../Blog/BlogBox';

export default function BlogCarousel() {
  const [current, setCurrent] = useState(0);
  const length = blogEntries.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Carousel>
      <Button className="btn btn--left" onClick={prevSlide}>
        <FaChevronLeft />
      </Button>
      {blogEntries.map((slide, index) => {
        if (index === current) {
          return (
            <div key={index}>
              <BlogBox blog={slide} />
            </div>
          );
        } else {
          return '';
        }
      })}
      <Button className="btn btn--right" onClick={nextSlide}>
        <FaChevronRight />
      </Button>
    </Carousel>
  );
}

const Carousel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    padding-bottom: 2rem;
  }

  .btn--left {
    padding-left: 0.5rem;
  }

  .btn--right {
    padding-right: 0.5rem;
  }
`;

const Button = styled.button`
  font-size: 2.4rem;
  color: var(--color-primary-light);
  border: none;
  background-color: transparent;
`;
