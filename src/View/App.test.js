import { getByAltText, getByText, render } from '@testing-library/react';

import App from './App';
import React from 'react';

test('shows Icon', () => {
  // eslint-disable-next-line no-unused-vars
  const { getByText } = render(<App />);
  const linkElement = getByAltText(<App />, "icon");
  expect(linkElement).toBeInTheDocument();
});
