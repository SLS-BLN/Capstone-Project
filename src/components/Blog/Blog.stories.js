import Blog from './Blog';

export default {
  title: 'Page/Blog post',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => <Blog storybook_slug="warum-ton-wichtig-ist" style={{...args}} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  color: 'var(--font-color)',
};

export const Green = Template.bind({});
Green.args = {
  color: 'limegreen',
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: 'yellow',
};
