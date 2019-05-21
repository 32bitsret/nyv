import axios from "axios"
import {
    SENDING_MESSAGE, 
    SEND_MESSAGE_ERROR,
    SEND_SUCCESS
} from "../Constants"
import { sendMessageURL } from "../../api/apiURL"

export const sendMessage = (body) => dispatch => {
    // console.log("INSIDE MESSAGE ACTION", body)
    dispatch({
        type: SENDING_MESSAGE
    })
    axios({
        method:"POST",
        url: sendMessageURL,
        data: body
    })
    .then(res => {
        // console.log("FROM INSIDE MESSAGE CREATOR",res.data)
        dispatch({
            type:SEND_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        // console.log(err)
        dispatch({
            type:SEND_MESSAGE_ERROR,
            payload: err
        })
    })
}
