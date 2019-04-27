import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Stuff from '../components/Stuff';

afterEach(cleanup);

it('renders Stuff', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stuff />, div);

  expect(div.querySelector('h2').hasChildNodes());

  ReactDOM.unmountComponentAtNode(div);

  // const { getByTestId, getByText } = render(<h2 text="Find a gift"></h2>);
  // expect(getByTestId("h2tag")).toHaveTextContent("Find a gift");
});