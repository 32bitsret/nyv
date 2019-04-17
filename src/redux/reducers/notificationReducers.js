import {
    GET_NOTIFICATIONS, 
    GET_NOTIFICATION_ERROR
} from "../Constants"

const initialState = {
    isloading: true,
    notifications: [],
    
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_NOTIFICATIONS:
            return {
                ...state
            }
        case GET_NOTIFICATION_ERROR:
            return{
                ...state
            }
        default:
           return state
    }
}