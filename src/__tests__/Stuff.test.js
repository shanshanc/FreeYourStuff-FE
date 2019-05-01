import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { Stuff } from '../components/Stuff/Stuff';
afterEach(cleanup)

jest.mock('react-router-dom', () => {
  return {
    Link: jest.fn(({ children }) => <div>{children}</div>) // props.children
  }
});

const sampleProps = {
  address: "",
  location: { lat: 41.394966800000006, lng: 2.1976698999999997 },
  picture: "http://res.cloudinary.com/cwlegacy/image/upload/c_fill,h_480,w_820/v1556291650/z9crpocqps2lefgkkqc9.png",
  tags: ["Yellow", "Clip art", "Cartoon", "Line", "Honeybee", "Graphics"],
  time: "2019-04-26T15:16:03.763Z",
  updated: 0,
  __v: 0,
  _id: "5cc320b5abff1a0013d1b7bb"
}

test('evaluates distance', () => {
  const { container, getByText } = render(<Stuff data={sampleProps} myLocation={{ lat: 41.4, lng: 2.2 }} />)
  expect(getByText(/0.6km/)).toBeInTheDocument()
})

test('calls listToMap on click', () => {
  const listToMap = jest.fn();
  const { container, getByAltText } = render(
    <Stuff
      data={sampleProps}
      myLocation={{ lat: 41.4, lng: 2.2 }}
      listToMap={listToMap}
    />
  )
  getByAltText('findAGift').click();
  expect(listToMap).toHaveBeenCalled();
  expect(listToMap).toHaveBeenCalledTimes(1);
})

test('displays all children', () => {
  const { container } = render(<Stuff data={sampleProps} myLocation={{ lat: 41.4, lng: 2.2 }} />);
  expect(container.firstChild.children).toHaveLength(3);
  expect(container.firstChild.classList.contains('stuff')).toBe(true);
  expect(container.firstChild.children[1].classList.contains('tagss')).toBe(true);
})

test('displays all tags', () => {
  const { container } = render(<Stuff data={sampleProps} myLocation={{ lat: 41.4, lng: 2.2 }} />);
  expect(container.firstChild.children[1].children).toHaveLength(6);
})
