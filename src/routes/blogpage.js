import BlogBox from '../components/BlogTemp/BlogBox';
import {blogEntries} from '../components/BlogTemp/BlogData';
import styled from 'styled-components/macro';

export default function BlogMain() {
  return (
    <Section>
      {blogEntries.map((blog, index) => {
        return (
          <div key={index}>
            <BlogBox blog={blog} />
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 3rem 0;
`;
