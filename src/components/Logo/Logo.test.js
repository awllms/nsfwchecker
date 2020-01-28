import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

it('expects to render Logo component', () => {
  expect(shallow(<Logo />)).toMatchSnapshot();
});