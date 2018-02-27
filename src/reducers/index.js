import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchBoxReducer from './searchBoxReducer';

const rootReducer = combineReducers({
  searchBoxReducer,
  routing: routerReducer,
});

export default rootReducer;
