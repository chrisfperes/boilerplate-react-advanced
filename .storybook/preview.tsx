// .storybook/preview.tsx

import React from 'react';

import GlobalStyles from "../src/styles/global";

import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;
