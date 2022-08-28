import {BlogTag} from './BlogTag';

export default {
  title: 'Button/Tag',
  component: BlogTag,
  parameters: {
    backgrounds: {
      values: [
        {name: 'white', value: 'var(--color-white)'},
        {name: 'grey-light', value: 'var(--color-grey-dark-1)'},
        {name: 'gry-dark', value: 'var(--color-grey-dark-2)'},
      ],
    },
    docs: {
      description: {
        component: 'Button tag for Search Page',
      },
    },
  },
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
