import {
    SENDING_MESSAGE,
    SEND_MESSAGE_ERROR,
    SEND_SUCCESS
} from "../Constants"
import isEmpty from "../../utils/isEmpty";

const initialState = {
    message: {},
    isSending: false,
    doneSending: false,
    failedSending: false,
    error:{}
}

export default (state = initialState, action ) => {
    switch(action.type){
        case SENDING_MESSAGE:
            return {
                ...state,
                isSending: true
            }
        case SEND_SUCCESS:
            return {
                ...state,
                message: action.payload,
                doneSending:!isEmpty(action.payload),
                isSending:false
            }
        case SEND_MESSAGE_ERROR:
            return{
                ...state,
                isSending: false,
                failedSending: !isEmpty(action.payload),
                error:action.payload
            }
        default:
            return state
    }
}