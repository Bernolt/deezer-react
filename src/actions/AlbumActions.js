import * as types from '../constants/ActionTypes';
import { ARTIST_ALBUMS_URL } from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';

export const fetchAlbumsRequest = () => ({
  type: types.FETCH_ALBUMS_REQUEST,
});

export const fetchAlbumsSuccess = albums => ({
  type: types.FETCH_ALBUMS_SUCCESS,
  albums,
});

export const fetchAlbums = id => async (dispatch) => {
  dispatch(fetchAlbumsRequest());

  const { json } = await callApi(ARTIST_ALBUMS_URL.replace(':id', id));

  dispatch(fetchAlbumsSuccess(json.data || json));
};
