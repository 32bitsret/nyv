import isEmpty from  '../../utils/isEmpty'
import { SET_CURRENT_USER ,TEST_REGISTER} from '../Constants';

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
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    
    default:
      return state;
  }
}
