import GlobalStyles from '../src/GlobalStyles.js';
import {withRouter} from 'storybook-addon-react-router-v6';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const decorators = [
  withRouter,
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
