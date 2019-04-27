import {FILTERATION_DONE} from "../Constants"
import isEmpty from "../../utils/isEmpty"

const initialState = {
    result:[],
    isloading:true
}

export default (state=initialState, action) => {
    switch(action.type){
        // case FILTERATION_DONE:
        //     return {
        //         ...state,
        //         result: action.payload,
        //         isloading:isEmpty(action.payload)
        //     }
        default:
            return state
    }
}