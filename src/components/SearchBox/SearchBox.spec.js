import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBox />);
  });

  // it('should contain an empty div', () => {
  //   const actual = wrapper.find('div').text();
  //   const expected = 'Searchbox here';

  //   expect(actual).toEqual(expected);
  // });

  it('should contain a div `.searchbox`', () => {
    expect(wrapper.find('.searchbox').length).toBe(1);
  });
});
