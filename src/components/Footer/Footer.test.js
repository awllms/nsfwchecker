import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('expects to render Footer component', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});