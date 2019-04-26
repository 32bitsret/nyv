import {FILTERATION_DONE} from "../Constants"
import isEmpty from "../../utils/isEmpty"

const initialState = []


    // searchResult: []

export default (state=initialState, action) => {
    switch(action.type){
        case FILTERATION_DONE:
            return  [...action.payload]
        default:
            return state
    }
}