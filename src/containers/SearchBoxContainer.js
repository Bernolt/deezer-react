import React from 'react';
import { connect } from 'react-redux';

import { updateInputValue, fetchSuggestions, clearSuggestions } from '../actions/SearchBoxActions';
import SearchBox from '../components/SearchBox';

const SearchBoxContainer = props => <SearchBox {...props} />;

function mapStateToProps(state) {
  const { value, suggestions, isLoading } = state.searchBoxReducer;

  return {
    value,
    suggestions,
    isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested({ value }) {
      dispatch(fetchSuggestions(value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBoxContainer);
