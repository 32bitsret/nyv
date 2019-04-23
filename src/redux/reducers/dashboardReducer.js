import isEmpty from  '../../utils/isEmpty'
import {GET_PROFILE,
   GET_PROFILE_ERROR,
  GET_ALLL_PROFILE,
  GET_RID_OF_WELCOME
  } from "../Constants"

const initialState = {
    dashboard :{},
    isloading: true,
    allMembers: [],
    isWelcome: true
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
    case GET_RID_OF_WELCOME:
      return{
        ...state,
        
      }
    default:
      return state;
  }
}
