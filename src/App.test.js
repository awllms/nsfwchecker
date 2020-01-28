import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  let wrapper;
  let wrapper2;
  let wrapper3;
  
  beforeEach(() => {
    const mockProps = {
      input: '',
      answer: '',
      description: '',
      hasResponse: false,
      loading: false,
      imageUrl: '',
      serverError: false
    };
  
    const mockProps2 = {
      input: '',
      answer: '',
      description: '',
      hasResponse: false,
      loading: true,
      imageUrl: '',
      serverError: false
    };
  
    const mockProps3 = {
      input: '',
      answer: 'nsfw',
      description: 'Sample Description',
      hasResponse: true,
      loading: false,
      imageUrl: '',
      serverError: false
    };

    wrapper = shallow(<App appState={mockProps} />);
    wrapper2 = shallow(<App appState={mockProps2} />);
    wrapper3 = shallow(<App appState={mockProps3} />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('expects to render App component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});