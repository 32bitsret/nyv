import isEmpty from  '../../utils/isEmpty'
import { SET_CURRENT_USER ,TEST_REGISTER, LOGIN_SUCCESS, LOGOUT} from '../Constants';

const initialState = {
  isAuthenticated: false,
  user: {}
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
    default:
      return state;
  }
}
