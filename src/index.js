import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Blog from './components/Blog/Blog';
import GlobalStyles from './GlobalStyles.js';
import reportWebVitals from './reportWebVitals';

import Home from './routes/home';
import BlogMain from './routes/blog';
import Video from './routes/video';
import Search from './routes/search';
import Error from './routes/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<BlogMain />} />
        <Route path="blog/:slug" element={<Blog slug={'slug'} />} />
        <Route path="video" element={<Video />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
