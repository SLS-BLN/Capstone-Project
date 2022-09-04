import {Outlet} from 'react-router-dom';
import {ReactComponent as Logo} from './icons/logo.svg';
import {Routes, Route, useNavigate} from 'react-router-dom';
import styled from 'styled-components/macro';
import {useState} from 'react';

import Blog from './components/Blog/Blog';
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import SearchByTag from './components/Search/SearchTag';
import Video from './components/Video/Video';

import BlogMain from './routes/blog';
import Cta from './routes/cta';
import Home from './routes/home';
import Error from './routes/error';
import Search from './routes/search';
import VideoMain from './routes/video';

export default function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <HomeButton
          aria-label="navigate to home"
          role="navigation"
          onClick={() => {
            navigate('/');
          }}
        >
          <Logo />
        </HomeButton>
        <Burger aria-label="open navigation menu" role="navigation" open={open} setOpen={setOpen} />
      </Header>
      <Menu aria-label="menu" role="navigation" open={open} setOpen={open} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<BlogMain />} />
        <Route path="blog/:slug" element={<Blog />} />
        <Route path="video" element={<VideoMain />} />
        <Route path="video/:slug" element={<Video />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:tagName" element={<SearchByTag tagName={'tagName'} />} />
        <Route path="*" element={<Error />} />
        <Route path="cta" element={<Cta />} />
      </Routes>
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 60rem;
  margin: 0 auto;
  background-color: var(--color-grey-dark-2);
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  max-width: 60rem;
  width: 100%;
`;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }

  svg {
    margin: 1.5rem 0 1.5rem 3rem;
    height: 4rem;
  }
`;
