import BlogTag from './BlogTag';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button/Tag',
  component: BlogTag,
};

const Template = args => <BlogTag {...args} />;

export const Audio = Template.bind({});
Audio.args = {
  label: 'Audio',
  color: 'var(--font-color-dark)',
  backgroundColor: 'var(--color-secondary)',
};

export const Kamera = Template.bind({});
Kamera.args = {
  label: 'Kamera',
  color: 'var(--font-color)',
  backgroundColor: 'var(--color-primary-light)',
};
