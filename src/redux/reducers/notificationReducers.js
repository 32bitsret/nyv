import {
    GET_NOTIFICATIONS, 
    GET_NOTIFICATION_ERROR,
    DONE_GETTING_NOTIFICATION
} from "../Constants"
import isEmpty from "../../utils/isEmpty"

const initialState = {
    isloading: true,
    notifications: [],
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NOTIFICATIONS:
            return {
                ...state,
                isloading: isEmpty(action.payload),
                notifications: action.payload
            }
        case GET_NOTIFICATION_ERROR:
            return{
                ...state,
                isloading:isEmpty(action.payload),
                error:action.payload
            }
        case DONE_GETTING_NOTIFICATION:
            return{
                ...state,
                notifications: action.payload
            }
        default:
           return state
    }
}