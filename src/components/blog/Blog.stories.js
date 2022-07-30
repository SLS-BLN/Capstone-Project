import Blog from './Blog';

export default {
  title: 'Pages/Blog post',
  component: Blog,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = args => <Blog style={{...args}} />;

export const Default = Template.bind({});
Default.args = {
  color: 'var(--font-color)',
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'var(--color-primary-light)',
};
