import * as types from '../constants/ActionTypes';

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

// FIXME: temporary shizzle until end of file
const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'C#',
    year: 2000,
  },
  {
    name: 'C++',
    year: 1983,
  },
  {
    name: 'Clojure',
    year: 2007,
  },
  {
    name: 'Elm',
    year: 2012,
  },
  {
    name: 'Go',
    year: 2009,
  },
  {
    name: 'Haskell',
    year: 1990,
  },
  {
    name: 'Java',
    year: 1995,
  },
  {
    name: 'Javascript',
    year: 1995,
  },
  {
    name: 'Perl',
    year: 1987,
  },
  {
    name: 'PHP',
    year: 1995,
  },
  {
    name: 'Python',
    year: 1991,
  },
  {
    name: 'Ruby',
    year: 1995,
  },
  {
    name: 'Scala',
    year: 2003,
  },
];

function randomDelay() {
  return 300 + (Math.random() * 1000);
}

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getMatchingLanguages(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(`^${escapedValue}`, 'i');

  return languages.filter(language => regex.test(language.name));
}

export function fetchSuggestions(value) {
  return (dispatch) => {
    dispatch(fetchSuggestionsRequest());

    // FIXME: Fake an AJAX call
    setTimeout(() => {
      dispatch(updateSuggestions(getMatchingLanguages(value), value));
    }, randomDelay());
  };
}
