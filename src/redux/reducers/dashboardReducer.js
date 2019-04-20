import isEmpty from  '../../utils/isEmpty'
import {GET_PROFILE,
   GET_PROFILE_ERROR,
  GET_ALLL_PROFILE
  } from "../Constants"

const initialState = {
    dashboard :{},
    isloading: true,
    allMembers: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLL_PROFILE:
      return {
        ...state,
        allMembers: action.payload,
        isloading: isEmpty(action.payload)
      }
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
