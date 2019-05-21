import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {loginURL, registerURL} from "../../api/apiURL"
import {
   GET_ERRORS, 
   SET_CURRENT_USER,
  LOGIN_SUCCESS,
  LOGOUT,
  ERROR_LOGIN,
  REGISTER_SUCCESS
  } from '../Constants';
import {getProfileInit} from "./dashboardAction"

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios({
    method: 'POST',
    url: registerURL,
    data: userData
  }).then(res => {
    dispatch({
      type:REGISTER_SUCCESS,
      payload: res.data
    })
  }).catch(err => {
    // console.log("LOGIN ERROR",err.response.data.message)
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
};

// Login - Get User Token
export const loginUser = (user) => dispatch => {
    // console.log("USER OBJECT", user)
  axios({
    method: 'POST',
    url: loginURL,
    data: user
  }).then(res => {
    // console.log(res)
    const {token} = res.data
    const user = jwt_decode(token)
    localStorage.setItem("pyc_token", token)
    dispatch(getProfileInit(user.phone)) 
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.payload
    })
  }).catch(err => {
    // console.log("LOGIN ERROR",err)
    dispatch({
      type: ERROR_LOGIN,
      payload: err.response
    })
  })
  };

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem('pyc_token')
  localStorage.removeItem("ln")
   dispatch({
     type: LOGOUT,
     payload: {}
   });
  
};
