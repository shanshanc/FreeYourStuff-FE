import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import App from './App';

it('renders', () => {
  const { asFragment } = render(<App />);
  expect(asFragment().toMatchSnapshot());
});