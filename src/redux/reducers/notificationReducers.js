import {
    GET_NOTIFICATIONS, 
    GET_NOTIFICATION_ERROR
} from "../Constants"
import isEmpty from "../../utils/isEmpty"

const initialState = {
    isloading: true,
    notifications: [],
    error: {}
    
    
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
        default:
           return state
    }
}