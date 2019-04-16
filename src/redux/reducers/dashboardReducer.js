import isEmpty from  '../../utils/isEmpty'
import {GET_PROFILE, GET_PROFILE_ERROR} from "../Constants"

const initialState = {
    dashboard :{},
    isloading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return{
        ...state,
        dashboard: action.payload,
        isloading: isEmpty(action.payload)
      } 
    default:
      return state;
  }
}
