import PropTypes from 'prop-types';
import React from 'react';

import AlbumListItem from '../AlbumListItem';
import './AlbumList.scss';

const defaultProps = {
  selectedAlbum: null,
};

const propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedAlbum: PropTypes.shape({}),
  onAlbumSelected: PropTypes.func.isRequired,
};

const AlbumList = ({
  albums,
  selectedAlbum,
  onAlbumSelected,
}) => (
  <div className="album-list">
    {albums.map(album => (
      <AlbumListItem
        className={(selectedAlbum && selectedAlbum.id === album.id ? 'is-active' : '')}
        album={album}
        key={album.id}
        onAlbumSelected={onAlbumSelected}
      />
    ))}
  </div>
);

AlbumList.defaultProps = defaultProps;
AlbumList.propTypes = propTypes;

export default AlbumList;
