import isEmpty from  '../../utils/isEmpty'
import {
    CREATE_USER_BY_ADMIN, 
    DONE_CREATING,
    ERROR,
    FETCH_USER,
    FETCHING_USER,
    DONE_UPDATING,
    CREATING_PROFILE
} from "../Constants"

const initialState = {
    step1:"1",
    userExist:false,
    error:{},
    isloading: false,
    user:{},
    createdUser:false,
    creatingProfile:false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATING_PROFILE:
        return {
            ...state,
            creatingProfile: true
        }
    case DONE_CREATING:
        return {
            ...state,
            isloading: false,
            user: action.payload,
            userExist: true,
            createdUser:!isEmpty(action.payload),
            creatingProfile:false
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
    case DONE_UPDATING:
        return {
            ...state,
            user: action.payload
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
