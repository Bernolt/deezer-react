import * as types from '../constants/ActionTypes';
import { SEARCH_ARTIST_URL } from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';

export const updateInputValue = value => ({
  type: types.UPDATE_INPUT_VALUE,
  value,
});

export const clearSuggestions = () => ({
  type: types.CLEAR_SUGGESTIONS,
});

export const fetchSuggestionsRequest = () => ({
  type: types.FETCH_SUGGESTIONS_REQUEST,
});

export const updateSuggestions = (suggestions, value) => ({
  type: types.UPDATE_SUGGESTIONS,
  suggestions,
  value,
});

export const fetchSuggestions = value => async (dispatch) => {
  dispatch(fetchSuggestionsRequest());

  const { json } = await callApi(SEARCH_ARTIST_URL.replace(':keyword', value));
  const collection = json.data || json;

  dispatch(updateSuggestions(collection, value));
};
