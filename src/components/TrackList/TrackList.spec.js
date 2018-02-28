import React from 'react';
import { shallow } from 'enzyme';

import TrackList from './TrackList';

describe('<TrackList />', () => {
  const props = {
    tracks: [],
    album: {},
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TrackList {...props} />);
  });

  it('should contain .track-list', () => {
    expect(wrapper.find('.track-list').length).toEqual(1);
  });
});
