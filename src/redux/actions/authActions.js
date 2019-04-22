import axios from 'axios';
//import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {loginURL, registerURL} from "../../api/apiURL"
import { TEST_REGISTER,
   GET_ERRORS, 
   SET_CURRENT_USER,
  LOGIN_SUCCESS,
  LOGOUT,
  ERROR_LOGIN
  } from '../Constants';
import {getProfileInit} from "./dashboardAction"

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios({
    method: 'POST',
    url: registerURL,
    data: userData
  }).then(res => {
    console.log(res)
    history.push("/login")
  }).catch(err => {
    // dispatch({
    
    // })
    console.log("LOGIN ERROR",err.response.data.message)
  })
};

// Login - Get User Token
export const loginUser = (user) => dispatch => {
    console.log("USER OBJECT", user)
  axios({
    method: 'POST',
    url: loginURL,
    data: user
  }).then(res => {
    console.log(res)

    const {token} = res.data
    const user = jwt_decode(token)
    localStorage.setItem("pyc_token", token)
    dispatch(getProfileInit(user.phone)) 
    console.log("USER", user)
    console.log("TOKEN", token)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.payload
    })
    // dispatch(getProfile(user.phone))
    // history.push("/dashboard")
  }).catch(err => {
    console.log("LOGIN ERROR",err)
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
  localStorage.removeItem("f")
  localStorage.removeItem("l")
  localStorage.removeItem("pic")
   dispatch({
     type: LOGOUT,
     payload: {}
   });
  
};
