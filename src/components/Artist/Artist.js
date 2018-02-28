import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AlbumList from '../AlbumList';

import './Artist.scss';

const defaultProps = {
  artist: null,
  isLoading: false,
  albums: [],
};

const propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  artist: PropTypes.shape({}),
  albums: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
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
      albums,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <div className="loading-data">Loading data...</div>;
    }

    return (
      <div>
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
        <hr />
        <AlbumList
          albums={albums}
        />
      </div>
    );
  }
}

Artist.defaultProps = defaultProps;
Artist.propTypes = propTypes;

export default Artist;
