import PropTypes from 'prop-types';
import React from 'react';
import Autosuggest from 'react-autosuggest';

import './SearchBox.scss';

const defaultProps = {
  value: '',
  suggestions: [],
  isLoading: false,
  onSuggestionSelected: () => {},
};

const propTypes = {
  value: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  onSuggestionSelected: PropTypes.func,
};

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

function SearchBox(props) {
  const {
    value,
    suggestions,
    isLoading,
    onChange,
    onSuggestionsFetchRequested,
    onSuggestionsClearRequested,
    onSuggestionSelected,
  } = props;

  const inputProps = {
    placeholder: 'Type here',
    value,
    onChange,
  };

  return (
    <div className={`search-box ${isLoading ? 'search-box-is-loading' : ''}`}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
}

SearchBox.defaultProps = defaultProps;
SearchBox.propTypes = propTypes;

export default SearchBox;
