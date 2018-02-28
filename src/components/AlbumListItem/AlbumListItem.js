import PropTypes from 'prop-types';
import React from 'react';

import './AlbumListItem.scss';

const defaultProps = {
  album: {},
};

const propTypes = {
  album: PropTypes.shape({}),
};

const AlbumListItem = ({
  album,
}) => (
  <div className="album-list-item">
    <img src={album.cover_big} alt="" />
    <div className="album-list-item-title">{album.title}</div>
  </div>
);

AlbumListItem.defaultProps = defaultProps;
AlbumListItem.propTypes = propTypes;

export default AlbumListItem;
