import * as types from '../constants/ActionTypes';
import { ARTIST_URL } from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';
import { fetchAlbums } from '../actions/AlbumActions';

export const fetchArtistRequest = () => ({
  type: types.FETCH_ARTIST_REQUEST,
});

export const fetchArtistSuccess = artist => ({
  type: types.FETCH_ARTIST_SUCCESS,
  artist,
});

export const fetchArtist = id => async (dispatch) => {
  dispatch(fetchArtistRequest());

  const { json } = await callApi(ARTIST_URL.replace(':id', id));

  dispatch(fetchArtistSuccess(json.data || json));
  dispatch(fetchAlbums(id));
};
