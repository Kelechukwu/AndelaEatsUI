import { combineReducers } from 'redux';

import userReducer from './userReducer';
import ordersReducer from './ordersReducer';
import menuReducer from './menuReducer';
import ratingsReducer from './ratingsReducer';

export default combineReducers({
  userReducer,
  upcomingMenus: menuReducer,
  orders: ordersReducer,
  ratings: ratingsReducer
});
