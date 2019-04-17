import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer'
import notificationReducer from "./notificationReducers"

export default combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    notification: notificationReducer
});
