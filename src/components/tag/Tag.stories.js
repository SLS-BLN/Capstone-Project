import {Tag} from './Tag';

// Button.stories.js|jsx|ts|tsx

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Tag,
};

export const Text = args => <Tag {...args} />;
