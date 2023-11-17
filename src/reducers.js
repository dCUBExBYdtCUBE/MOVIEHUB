import { combineReducers } from 'redux';
import { STORE_DATA } from './actions';

// Reducer to manage fetched data
const dataReducer = (state = null, action) => {
  switch (action.type) {
    case STORE_DATA:
      return action.payload;
    default:
      return state;
  }
};

// Combine all reducers if you have more than one
const rootReducer = combineReducers({
  data: dataReducer,
  // other reducers...
});

export default rootReducer;