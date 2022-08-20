import styled from 'styled-components/macro';
import {blogEntries} from '../components/Blog/BlogData';
import {BlogBox} from '../components/Blog/BlogBox';

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
  margin: 2rem 3rem;
  padding-bottom: 5rem;
`;
