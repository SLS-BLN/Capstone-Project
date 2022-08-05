import {Link} from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import Blog from '../components/Blog/Blog';

export default function BlogMain() {
  return (
    <>
      <section>
        <Carousel />
        <Blog />
      </section>
      <Link to="/">Back to Home</Link>
    </>
  );
}
