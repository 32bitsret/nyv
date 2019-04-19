import isEmpty from  '../../utils/isEmpty'
import {
    CREATE_USER_BY_ADMIN, 
    DONE_STEP_ONE,
    DONE_STEP_THREE,
    DONE_STEP_TWO,
    ERROR,
    FETCH_USER,
    FETCHING_USER
} from "../Constants"

const initialState = {
    step1:"1",
    userExist:false,
    error:{},
    isloading: false,
    user:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_BY_ADMIN:
        return {
            ...state,
            isloading: true
        }
    case DONE_STEP_ONE:
        return {
            ...state,
            isloading: false,
            user: action.payload,
            userExist: true
        }
    case FETCHING_USER:
        return {
            ...state,
            isloading: true,
        }
    case ERROR:
        return{
            ...state,
            error: action.payload
        }
    case FETCH_USER:
        return {
            ...state,
            isloading: false,
            user: action.payload,
            userExist: true
        }
    default:
      return state;
  }
}
