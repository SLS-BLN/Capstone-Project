import {Link} from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import BlogWithMaps from '../components/Blog/BlogWithMap';
import Blog from '../components/Blog/Blog';

export default function BlogMain() {
  return (
    <>
      <section>
        <Blog />
        <Carousel />
        <BlogWithMaps />
      </section>
      <Link to="/">Back to Home</Link>
    </>
  );
}
