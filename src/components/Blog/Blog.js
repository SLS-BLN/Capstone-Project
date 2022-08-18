import styled from 'styled-components/macro';
import {blogEntries} from './BlogData';
import {nanoid} from 'nanoid';
import {useParams} from 'react-router-dom';
import BlogTag from '../Blogtag/BlogTag';
import BackButton from '../Buttons/BackButton';

export default function Blog() {
  const {slug} = useParams();
  const blogPost = blogEntries.filter(item => item.slug === slug);

  return (
    <>
      {blogPost.map(blog => (
        <Container key={blog.id}>
          <Image src={blog.imgUrl} alt={blog.imgAlt} width={355} height={200} />
          <BackButton />
          <BlogTag tagName={blog.tag} />

          <HeadingPrimary>{blog.title}</HeadingPrimary>
          <Lead>{blog.lead}</Lead>
          <List>
            <AuthorName>{blog.author}</AuthorName>
            <ArticleDate>
              {blog.date} {blog.dateUpdated}
            </ArticleDate>
          </List>

          {blog.text.map(paragraph =>
            paragraph.includes('##') ? (
              <HeadingSecondary key={nanoid()}>{paragraph.substring(2)}</HeadingSecondary>
            ) : (
              <Text key={nanoid()} className="textbody">
                {paragraph}
              </Text>
            )
          )}

          <BackButton />
        </Container>
      ))}
    </>
  );
}

const Container = styled.article`
  padding: 0 3rem 10rem;
  background-color: var(--color-grey-dark-2);
`;

const Image = styled.img`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const HeadingPrimary = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Lead = styled.p`
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  list-style: none;
`;

const AuthorName = styled.li`
  margin-top: 1.5rem;
  font-size: 1.4rem;
  font-weight: 400;
`;

const ArticleDate = styled.li`
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 2rem;
`;

const HeadingSecondary = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.6rem;
`;

const Text = styled.p`
  line-height: 1.4;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;
