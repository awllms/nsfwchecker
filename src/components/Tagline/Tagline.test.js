import React from 'react';
import { shallow } from 'enzyme';
import Tagline from './Tagline';

it('expects to render Tagline component', () => {
  expect(shallow(<Tagline />)).toMatchSnapshot();
});