import React from 'react';
import { shallow } from 'enzyme';
import UrlInputForm from './UrlInputForm';

it('expects to render UrlInputForm component', () => {
  expect(shallow(<UrlInputForm />)).toMatchSnapshot();
});