import axios from "axios"
import {
    SEND_MESSAGE, 
    SEND_MESSAGE_ERROR
} from "../Constants"
import { sendMessageURL } from "../../api/apiURL"

export const sendMessage = (body) => dispatch => {
    axios({
        method:"POST",
        url: sendMessageURL,
        data: body
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
