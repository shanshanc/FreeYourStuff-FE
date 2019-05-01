import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { StuffList } from '../components/StuffList/StuffList';
afterEach(cleanup);

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../redux/reducers'

// Create a real redux store
const store = createStore(reducers)

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => <div>{children}</div>) // props.children
  }
});

const sampleProps = [{
  address: "",
  distance: 0.0033773550647850903,
  location: { lat: 41.394966800000006, lng: 2.1976698999999997 },
  picture: "http://res.cloudinary.com/cwlegacy/image/upload/c_fill,h_480,w_820/v1556291650/z9crpocqps2lefgkkqc9.png",
  tags: ["Yellow", "Clip art", "Cartoon", "Line", "Honeybee", "Graphics"],
  time: "2019-04-26T15:16:03.763Z",
  updated: 0,
  __v: 0,
  _id: "5cc320b5abff1a0013d1b7bb"
},
{
  address: "",
  distance: 0.005238272664014634,
  location: { lat: 41.3949736, lng: 2.1976489999999997 },
  picture: "http://res.cloudinary.com/aeon155/image/upload/c_fill,h_480,w_820/v1556299535/logo-react-native_ysjsfi.png",
  tags: ["Text", "Aqua", "Font", "Logo", "Turquoise", "Product"],
  time: "2019-04-26T17:25:44.840Z",
  updated: 0,
  __v: 0,
  _id: "5cc33f19aa8fd30013919e34"
}];

test('displays h2 and stuff items', () => {
  const { container, getByText } = render(
    <Provider store={store}>
      <StuffList gifts={sampleProps} location={{ lat: 41.4, lng: 2.2 }} />
    </Provider>)

  expect(getByText('Find a gift')).toBeInTheDocument()
  expect(container.firstChild.children).toHaveLength(3);
});

test('stuff items have the right content', () => {
  const { container, getByText } = render(
    <Provider store={store}>
      <StuffList gifts={sampleProps} location={{ lat: 41.4, lng: 2.2 }} />
    </Provider>)
  expect(getByText('Clip art')).toBeInTheDocument()
});

