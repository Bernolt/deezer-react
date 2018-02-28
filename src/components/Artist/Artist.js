import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Artist.scss';

const defaultProps = {
  artist: null,
  isLoading: false,
};

const propTypes = {
  fetchArtist: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  artist: PropTypes.shape({}),
  isLoading: PropTypes.bool,
};

class Artist extends Component {
  componentWillMount() {
    const { fetchArtist, id } = this.props;
    fetchArtist(id);
  }

  render() {
    const {
      artist,
      isLoading,
    } = this.props;

    if (isLoading) {
      return <div>Loading artist...</div>;
    }

    return (
      <div>
        <div className="artist-info">
          <div className="artist-info-img">
            <img src={artist.picture_big} alt="" />
          </div>
          <div className="artist-info-text">
            <h1>{artist.name}</h1>
            <p>Total albums on Deezer: {artist.nb_album}</p>
            <a href={artist.link} target="_blank">More information on Deezer</a>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

Artist.defaultProps = defaultProps;
Artist.propTypes = propTypes;

export default Artist;
