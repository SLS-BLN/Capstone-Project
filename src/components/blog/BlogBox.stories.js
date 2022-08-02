import BlogBox from './BlogBox';

export default {
  title: 'Page/Blog Box',
  component: BlogBox,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = () => <BlogBox />;
