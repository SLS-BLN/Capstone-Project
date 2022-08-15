import {BlogBox} from '../components/Blog/BlogBox';
import {blogEntries} from '../components/Blog/BlogData';
import styled from 'styled-components/macro';

export default function BlogMain() {
  return (
    <Section>
      {blogEntries.map((blog, index) => {
        return <BlogBox key={index} blog={blog} />;
      })}
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 3rem 0;
  padding-bottom: 1rem;
`;
