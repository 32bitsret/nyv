import { combineReducers } from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer'
import notificationReducer from "./notificationReducers"
import createReducer from "./createReducer"
import searchingReducer from "./searchingReducer"
export default combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    notification: notificationReducer,
    createUser: createReducer,
    search:searchingReducer
});
