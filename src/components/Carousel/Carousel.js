import {useState} from 'react';
import styled from 'styled-components/macro';
import {ButtonPreviousSlide, ButtonNextSlide} from '../Buttons/CarouselButtons';
import {blogEntries} from '../Blog/BlogData';
import {BlogBox} from '../Blog/BlogBox';

export default function BlogCarousel() {
  const [current, setCurrent] = useState(0);
  const length = blogEntries.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <Carousel>
      <ButtonPreviousSlide prevSlide={prevSlide} />
      {/* use date(newest to oldest) instead of index */}
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
      <ButtonNextSlide nextSlide={nextSlide} />
    </Carousel>
  );
}

const Carousel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
