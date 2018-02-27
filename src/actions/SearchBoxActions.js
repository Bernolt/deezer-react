import * as types from '../constants/ActionTypes';
import { SEARCH_ARTIST_URL } from '../constants/ApiConstants';
import { callApi } from '../utils/ApiUtils';

export function updateInputValue(value) {
  return {
    type: types.UPDATE_INPUT_VALUE,
    value,
  };
}

export function clearSuggestions() {
  return {
    type: types.CLEAR_SUGGESTIONS,
  };
}

export function fetchSuggestionsRequest() {
  return {
    type: types.FETCH_SUGGESTIONS_REQUEST,
  };
}

export function updateSuggestions(suggestions, value) {
  return {
    type: types.UPDATE_SUGGESTIONS,
    suggestions,
    value,
  };
}

export function fetchSuggestions(value) {
  return async (dispatch) => {
    dispatch(fetchSuggestionsRequest());

    const { json } = await callApi(SEARCH_ARTIST_URL.replace(':keyword', value));
    const collection = json.data || json;

    dispatch(updateSuggestions(collection, value));
  };
}
