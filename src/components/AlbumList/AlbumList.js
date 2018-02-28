import PropTypes from 'prop-types';
import React from 'react';

import AlbumListItem from '../AlbumListItem';
import './AlbumList.scss';

const defaultProps = {};

const propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const AlbumList = ({
  albums,
}) => (
  <div className="album-list">
    {albums.map(album => (
      <AlbumListItem
        album={album}
        key={album.id}
      />
    ))}
  </div>
);

AlbumList.defaultProps = defaultProps;
AlbumList.propTypes = propTypes;

export default AlbumList;
