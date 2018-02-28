import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './AlbumListItem.scss';

const defaultProps = {
  className: '',
};

const propTypes = {
  album: PropTypes.shape({}).isRequired,
  onAlbumSelected: PropTypes.func.isRequired,
  className: PropTypes.string,
};

class AlbumListItem extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { album, onAlbumSelected } = this.props;
    onAlbumSelected(album.id);
  }

  render() {
    const { album, className } = this.props;

    return (
      <div
        className={`album-list-item ${className}`}
        onClick={this.onClick}
        role="presentation"
      >
        <img src={album.cover_big} alt="" />
        <div className="album-list-item-title">{album.title}</div>
      </div>
    );
  }
}

AlbumListItem.defaultProps = defaultProps;
AlbumListItem.propTypes = propTypes;

export default AlbumListItem;
