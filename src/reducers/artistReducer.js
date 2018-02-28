import * as types from '../constants/ActionTypes';

const initialState = {
  artist: {},
  artistLoading: false,
  albums: [],
  albumsLoading: false,
  selectedAlbum: null,
};

export default function artistReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_ARTIST_REQUEST:
      return {
        ...state,
        artistLoading: true,
      };

    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.artist,
        artistLoading: false,
      };

    case types.FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        albumsLoading: true,
      };

    case types.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        albumsLoading: false,
      };

    case types.FETCH_ALBUM_REQUEST:
      return {
        ...state,
      };

    case types.FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        selectedAlbum: action.album,
      };

    default:
      return state;
  }
}
