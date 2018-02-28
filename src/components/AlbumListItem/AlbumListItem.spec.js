import React from 'react';
import { shallow } from 'enzyme';

import AlbumListitem from './AlbumListItem';

describe('<AlbumListitem />', () => {
  const props = {
    album: {},
    onAlbumSelected: jest.fn(),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AlbumListitem {...props} />);
  });

  it('should contain .album-list-item', () => {
    expect(wrapper.find('.album-list-item').length).toEqual(1);
  });
});
