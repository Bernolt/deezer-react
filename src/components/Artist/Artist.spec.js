import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('<Artist />', () => {
  const props = {
    id: 0,
    artist: {},
    isLoading: false,
    fetchArtist: jest.fn(),
    onAlbumSelected: jest.fn(),
  };

  it('should contain .artist-info', () => {
    const wrapper = shallow(<Artist {...props} />);
    expect(wrapper.find('.artist-info').length).toEqual(1);
  });
});
