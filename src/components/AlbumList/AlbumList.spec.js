import React from 'react';
import { shallow } from 'enzyme';

import AlbumList from './AlbumList';

describe('<AlbumList />', () => {
  const props = {
    albums: [],
    onAlbumSelected: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AlbumList {...props} />);
  });

  it('should contain .album-list', () => {
    expect(wrapper.find('.album-list').length).toEqual(1);
  });
});
