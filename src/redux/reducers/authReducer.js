import isEmpty from  '../../utils/isEmpty'
import { 
  TEST_REGISTER, 
  LOGIN_SUCCESS, 
  LOGOUT,
  SET_USER,
  ERROR_LOGIN,
  REGISTER_SUCCESS,
  GET_ERRORS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR
} from '../Constants';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
  isSuccess: false,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_REGISTER:
      return {
        ...state ,
        user: action.payload
      }
    case LOGOUT:
      return{
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case SET_USER:
      return {
      ...state,
      isAuthenticated: !isEmpty(action.payload),
      user: action.payload
     }
    case GET_ERRORS:
     return {
       ...state,
       isError: !isEmpty(action.payload),
       error: action.payload
     }
    case ERROR_LOGIN:
      return{
        ...state,
        error: action.payload,
        isError:!isEmpty(action.payload)
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSuccess: !isEmpty(action.payload)
      }
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        isError: !isEmpty(action.payload),
        error: action.payload
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        isSuccess: !isEmpty(action.payload)
      }
    default:
      return state;
  }
}
