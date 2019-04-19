import isEmpty from  '../../utils/isEmpty'
import {
    CREATE_USER_BY_ADMIN, 
    DONE_STEP_ONE,
    DONE_STEP_THREE,
    DONE_STEP_TWO,
    ERROR
} from "../Constants"

const initialState = {
    step1:"1",
    step2:"",
    step3:"",
    step4:"",
    createSuccess:false,
    error:{},
    isloading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_BY_ADMIN:
        return {
            ...state,
            step1:"good",
            createSuccess: isEmpty(action.payload)
        }
    case DONE_STEP_ONE:
        return {
            ...state,
            step2:"2"
        }
    default:
      return state;
  }
}
