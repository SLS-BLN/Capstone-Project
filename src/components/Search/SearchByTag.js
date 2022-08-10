import styled from 'styled-components/macro';
import {videoEntries} from '../Video/VideoData';
import {blogEntries} from '../Blog/BlogData';

export default function SearchByTag() {
  console.log(videoEntries);
  console.log(blogEntries);

  return (
    <Container>
      <h2>Suche nach Schlagwort</h2>
    </Container>
  );
}

const Container = styled.section`
  margin-bottom: 5rem;
`;
