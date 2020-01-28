import React from 'react';
import { shallow } from 'enzyme';
import ResponseNotifier from './ResponseNotifier';

it('expects to render ResponseNotifier component', () => {
  expect(shallow(<ResponseNotifier />)).toMatchSnapshot();
});