import PropTypes from 'prop-types';
import React from 'react';

import './TrackList.scss';

const defaultProps = {};

const propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const TrackList = ({
  tracks,
}) => (
  <table className="track-list">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Artist</th>
        <th>Time</th>
        <th>Released</th>
      </tr>
    </thead>
    <tbody>
      {tracks.map((track, i) => (
        <tr key={track.id}>
          <td>{i + 1}</td>
          <td>{track.title}</td>
          <td>{track.artist.name}</td>
        </tr>
    ))}
    </tbody>
  </table>
);

TrackList.defaultProps = defaultProps;
TrackList.propTypes = propTypes;

export default TrackList;
