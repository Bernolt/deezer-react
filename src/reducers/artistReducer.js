import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  artist: {},
  albums: [],
};

export default function artistReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_ARTIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.artist,
        isLoading: false,
      };

    case types.FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        isLoading: false,
      };

    default:
      return state;
  }
}
