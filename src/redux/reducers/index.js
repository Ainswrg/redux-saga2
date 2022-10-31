import { combineReducers } from 'redux';
import errors from './errors';
import news from './news';


const reducer = combineReducers({
  news,
  errors
});

export default reducer;
