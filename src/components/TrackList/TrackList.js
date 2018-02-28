import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import 'moment-duration-format';

import './TrackList.scss';

const defaultProps = {};

const propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  album: PropTypes.shape({}).isRequired,
};

const TrackList = ({
  tracks,
  album,
}) => (
  <table className="track-list">
    <caption>{album.title}</caption>
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
      {tracks.map(track => (
        <tr key={track.id}>
          <td>{track.track_position}</td>
          <td>{track.title}</td>
          <td>{track.artist.name}</td>
          <td>{moment.duration(track.duration, 'minutes').format('h:mm')}</td>
          <td>{moment(album.release_date).format('YYYY')}</td>
        </tr>
    ))}
    </tbody>
  </table>
);

TrackList.defaultProps = defaultProps;
TrackList.propTypes = propTypes;

export default TrackList;
