import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer'
import notificationReducer from ""

export default combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer
});
