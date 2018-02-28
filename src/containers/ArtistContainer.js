import React from 'react';
import { connect } from 'react-redux';

import Artist from '../components/Artist';
import { fetchArtist } from '../actions/ArtistActions';
import { selectAlbum } from '../actions/AlbumActions';

const ArtistContainer = props => <Artist {...props} />;

const mapStateToProps = (state, props) => {
  const {
    artist,
    artistLoading,
    albums,
    albumsLoading,
    selectedAlbum,
    selectedAlbumTracks,
  } = state.artistReducer;

  return {
    artist,
    artistLoading,
    albums,
    albumsLoading,
    selectedAlbum,
    selectedAlbumTracks,
    id: Number.parseInt(props.match.params.id, 10),
  };
};

export default connect(mapStateToProps, {
  fetchArtist,
  onAlbumSelected: selectAlbum,
})(ArtistContainer);
