import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

describe('renders App', () => {
  it('loads the name', () => {
    const { getByText } = render(<App />);
    const appElement = getByText(/New York/i);
    expect(appElement).toBeInTheDocument();
  });

  it('renders the forecast icon', () => {
    const { getAllByAltText } = render(<App />);
    const iconElement = getAllByAltText("icon");
    expect(iconElement[0]).toBeInTheDocument();
  });

  it('loads the form', () => {
    const { getByLabelText } = render(<App />);
    const formElement = getByLabelText(/Zip Code:/i);
    expect(formElement).toBeInTheDocument();
  });
  it('loads the submit button', () => {
    const { getByRole } = render(<App />);
    const formElement = getByRole("submit");
    expect(formElement).toBeInTheDocument();
  });
    it('can input text to the form', () => {
      const { getByRole } = render(<App />);
      const zipInput = getByRole('input');
      const formElement = getByRole("submit");
      zipInput.focus();
      formElement.click();
      expect(zipInput).toHaveValue("10036");
  });
});
