import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import App from './App';
import GlobalStyles from './GlobalStyles.js';
import reportWebVitals from './reportWebVitals';
import BlogMain from './routes/blog';
import Search from './routes/search';
import Video from './routes/video';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="blog" element={<BlogMain />} />
          <Route path="video" element={<Video />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{padding: '1rem'}}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
