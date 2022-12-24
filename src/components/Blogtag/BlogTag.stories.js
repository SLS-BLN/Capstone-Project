import BlogTag from './BlogTag';

export default {
  title: 'Button/Tag',
  component: BlogTag,
  parameters: {
    backgrounds: {
      values: [
        {name: 'white', value: 'var(--color-white)'},
        {name: 'grey-light', value: 'var(--color-grey-dark-1)'},
        {name: 'grey-dark', value: 'var(--color-grey-dark-2)'},
      ],
    },
    docs: {
      description: {
        component: 'Button tag for Search Page',
      },
    },
  },
};

// {tag: 'Audio', color: 'var(--tag-color-1)'},
// style={{backgroundColor: colorVar}}
// const navigate = useNavigate();
//   const colorVar = tagColors.find(col => col.tag === tagName).color;

const Template = args => <BlogTag storybook_tag={{...args}} />;

export const Audio = Template.bind({});
Audio.args = {
  tag: 'Audio',
};

export const Kamera = Template.bind({});
Kamera.args = {
  tag: 'Kamera',
};

// export const Audio = Template.bind({});
// Audio.args = {
//   label: 'Audio',
//   color: 'var(--font-color-dark)',
//   backgroundColor: 'var(--color-secondary)',
// };

// export const Kamera = Template.bind({});
// Kamera.args = {
//   label: 'Kamera',
//   color: 'var(--font-color)',
//   backgroundColor: 'var(--color-primary-light)',
// };
