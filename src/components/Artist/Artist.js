import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AlbumList from '../AlbumList';
import TrackList from '../TrackList';

import './Artist.scss';

const defaultProps = {
  artist: null,
  artistLoading: false,
  albums: [],
  albumsLoading: false,
  selectedAlbum: null,
};

const propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  artist: PropTypes.shape({}),
  albums: PropTypes.arrayOf(PropTypes.shape({})),
  selectedAlbum: PropTypes.shape({}),
  artistLoading: PropTypes.bool,
  albumsLoading: PropTypes.bool,
  onAlbumSelected: PropTypes.func.isRequired,
};

class Artist extends Component {
  componentWillMount() {
    const { fetchArtist, id } = this.props;
    fetchArtist(id);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchArtist, id } = this.props;
    if (nextProps.id !== id) {
      fetchArtist(nextProps.id);
    }
  }

  render() {
    const {
      artist,
      artistLoading,
      albums,
      albumsLoading,
      selectedAlbum,
      onAlbumSelected,
    } = this.props;

    return (
      <div>
        {artistLoading ? (
          <div className="loading-data">Loading artist...</div>
        ) : (
          <div className="artist-info">
            <div className="artist-info-img">
              <img src={artist.picture_big} alt="" />
            </div>
            <div className="artist-info-text">
              <h1>{artist.name}</h1>
              <p>Total albums: {artist.nb_album}</p>
              <a href={artist.link} target="_blank">More information on Deezer</a>
            </div>
          </div>
        )}
        <hr />
        {albumsLoading ? (
          <div className="loading-data">Loading albums...</div>
        ) : (
          <AlbumList
            albums={albums}
            onAlbumSelected={onAlbumSelected}
          />
        )}
        <hr />
        {selectedAlbum &&
          <TrackList
            tracks={selectedAlbum.tracks.data}
          />
        }
      </div>
    );
  }
}

Artist.defaultProps = defaultProps;
Artist.propTypes = propTypes;

export default Artist;
