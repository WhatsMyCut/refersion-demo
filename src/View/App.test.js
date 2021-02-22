import { getByAltText, render } from '@testing-library/react';

import App from './App';
import React from 'react';

test('shows Icon', () => {
  const { getByAltText } = render(<App />);
  const linkElement = getByAltText(/10d/i);
  expect(linkElement).toBeInTheDocument();
});
