import React from 'react';
import { shallow } from 'enzyme';

import Artist from './Artist';
import AlbumList from '../AlbumList';

describe('<Artist />', () => {
  const props = {
    id: 0,
    artist: {},
    isLoading: false,
    fetchArtist: jest.fn(),
    onAlbumSelected: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Artist {...props} />);
  });

  it('should contain .artist-info', () => {
    expect(wrapper.find('.artist-info').length).toEqual(1);
  });

  it('should contain an <AlbumList />', () => {
    expect(wrapper.find(AlbumList).length).toEqual(1);
  });
});
