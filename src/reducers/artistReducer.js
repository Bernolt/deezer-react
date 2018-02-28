import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  artist: {},
};

export default function searchBoxReducer(state = initialState, action = {}) {
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

    default:
      return state;
  }
}
