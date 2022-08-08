import {useState} from 'react';
import styled from 'styled-components/macro';
import {ReactComponent as Logo} from './logo.svg';
import {Link, Outlet} from 'react-router-dom';

import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import {Routes, Route} from 'react-router-dom';

import Blog from './components/BlogTemp/Blog';
import Video from './components/Video/Video';
import Home from './routes/home';
import BlogMain from './routes/blogpage';
import VideoMain from './routes/video';
import Search from './routes/search';
import Error from './routes/error';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
      </Header>
      <Menu open={open} setOpen={open} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<BlogMain />} />
        <Route path="blog/:slug" element={<Blog slug={'slug'} />} />
        <Route path="video" element={<VideoMain />} />
        <Route path="video/:slug" element={<Video slug={'slug'} />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <nav>
        <Link to="/"></Link>
        <Link to="/blog"></Link>
        <Link to="/error"></Link>
        <Link to="/video"></Link>
        <Link to="/search"></Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  background-color: var(--color-grey-dark-2);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  max-width: 60rem;
  width: 100%;

  svg {
    margin-left: 3rem;
    width: 8em;
    height: 7rem;
  }
`;
