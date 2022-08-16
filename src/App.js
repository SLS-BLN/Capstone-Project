import {Link, Outlet} from 'react-router-dom';
import {ReactComponent as Logo} from './icons/logo.svg';
import {Routes, Route, useNavigate} from 'react-router-dom';
import styled from 'styled-components/macro';
import {useState, useEffect} from 'react';

import Blog from './components/Blog/Blog';
import Burger from './components/Burger/Burger';
import Menu from './components/Menu/Menu';
import SearchByTag from './components/Search/search-by-tag';
import Video from './components/Video/Video';

import BlogMain from './routes/blogpage';
import Cta from './routes/cta';
import Home from './routes/home';
import Error from './routes/error';
import Search from './routes/search';
import VideoMain from './routes/video';

export default function App() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <Wrapper>
      <Header>
        <HomeButton
          onClick={() => {
            navigate('/');
          }}
        >
          <Logo />
        </HomeButton>
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
        <Route path="search/:tagName" element={<SearchByTag tagName={'tagName'} />} />
        <Route path="*" element={<Error />} />
        <Route path="cta" element={<Cta />} />
      </Routes>
      <nav>
        <Link to="/"></Link>
        <Link to="/blog"></Link>
        <Link to="/cta"></Link>
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
    width: 9em;
    height: 8rem;
  }
`;

const HomeButton = styled.button`
  background-color: transparent;
  border: none;
`;
