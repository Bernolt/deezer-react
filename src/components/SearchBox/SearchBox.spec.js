import React from 'react';
import { shallow } from 'enzyme';
import Autosuggest from 'react-autosuggest';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  const props = {
    value: '',
    suggestions: [],
    isLoading: false,
    onChange: jest.fn(),
    onSuggestionsFetchRequested: jest.fn(),
    onSuggestionsClearRequested: jest.fn(),
  };

  it('should contain <Autosuggest />', () => {
    const wrapper = shallow(<SearchBox {...props} />);
    expect(wrapper.find(Autosuggest).length).toEqual(1);
  });
});
