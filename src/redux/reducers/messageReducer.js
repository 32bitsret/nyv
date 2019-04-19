import {
    SEND_MESSAGE,
    SEND_MESSAGE_ERROR
} from "../Constants"

const initialState = {
    message: {
    }
}

export default (state = initialState, action ) => {
    switch(type){
        case SEND_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}