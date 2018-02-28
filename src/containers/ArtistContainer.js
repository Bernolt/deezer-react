import React from 'react';
import { connect } from 'react-redux';

import Artist from '../components/Artist';
import { fetchArtist } from '../actions/ArtistActions';

const ArtistContainer = props => <Artist {...props} />;

const mapStateToProps = (state, props) => {
  const { artist, albums, isLoading } = state.artistReducer;

  return {
    artist,
    albums,
    isLoading,
    id: Number.parseInt(props.match.params.id, 10),
  };
};

export default connect(mapStateToProps, {
  fetchArtist,
})(ArtistContainer);
