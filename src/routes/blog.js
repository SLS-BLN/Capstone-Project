import BlogBox from '../components/Blog/BlogBox';
import {blogEntries} from '../components/Blog/Blogdata';

export default function BlogMain() {
  return (
    <main style={{padding: '1rem'}}>
      {blogEntries.map((blog, index) => {
        return (
          <div key={index}>
            <BlogBox blog={blog} />
          </div>
        );
      })}
    </main>
  );
}
