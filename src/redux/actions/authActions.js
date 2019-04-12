import axios from 'axios';
//import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {loginURL, registerURL} from "../../api/apiURL"
import { TEST_REGISTER, GET_ERRORS, SET_CURRENT_USER } from '../Constants';
//import fetch from "fetch"
// Register User
export const registerUser = (userData) => dispatch => {
  console.log("DATA", userData)
  return fetch (registerURL , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'x-access-token' : token,
    },
    body : JSON.stringify(userData)
    })
    .then((res) => {
      alert("FROM REGISTRATION ACTION")
      return res.json();

      console.log()
    })
    .catch((error) => {
      alert("FATAL FAILURE")
      return error;
    });
 // history.push('/login')
};

// Login - Get User Token
export const loginUser = (userData) => dispatch => {
  const result = fetch (loginURL , {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // 'x-access-token' : token,
    },
    body : JSON.stringify(userData)
    })
    .then((res) => {
      alert("FROM LOGIN ACTION")
      return res.json();
      console.log("FROM INSDE FETCH")
    })
    .catch((err) => {
      alert("FATAL FAILURE")
      return err;
    });

    console.log("AFTER FETCH", result)
 
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = (history) => dispatch => {
  // Remove token from localStorage
  // localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  // Set current user to {} which will set isAuthenticated to false
  //   setAuthToken(false);
  // dispatch(setCurrentUser({}));
  history.push("/login")
};
