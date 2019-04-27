import isEmpty from  '../../utils/isEmpty'
import {GET_PROFILE,
   GET_PROFILE_ERROR,
  GET_ALLL_PROFILE,
  GET_RID_OF_WELCOME,
  START_WELCOME,
  SET_SIDEBAR,
  FILTERATION_DONE
  } from "../Constants"

const initialState = {
    dashboard :{},
    isloading: true,
    allMembers: [],
    searchMembers: [],
    isWelcome: true,
    sidebarImage:"https://www.gravatar.com/avatar/anything?s=200&d=mm"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_WELCOME:
      return {
        ...state,
        isWelcome: true
      }
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
        isWelcome: false
      }
    case SET_SIDEBAR:
      return {
        ...state,
        sidebar:action.payload
      }
    case FILTERATION_DONE:
      return {
        ...state,
        searchMembers:action.payload,
        isloading:isEmpty(action.payload)
      }
    default:
      return state;
  }
}
