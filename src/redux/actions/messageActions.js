import axios from "axios"
import {
    SEND_MESSAGE, 
    SEND_MESSAGE_ERROR
} from "../Constants"
import { sendMessageURL } from "../../api/apiURL"

export const sendMessage = (body) => dispatch => {
    console.log("INSIDE MESSAGE ACTION", body)
    axios({
        method:"POST",
        url: sendMessageURL,
        data: body
    })
    .then(res => {
        console.log("FROM INSIDE MESSAGE CREATOR",res.data)
    })
    .catch(err => {
        console.log(err)
    })
}
