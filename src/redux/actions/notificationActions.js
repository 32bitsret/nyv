import {
    GET_NOTIFICATIONS, 
    GET_NOTIFICATION_ERROR
} from "../Constants"
import {findMessageByQueryURL} from "../../api/apiURL"
import axios from "axios"

export const getNotification = (data) => dispatch => {
    console.log("DATA TO QUERY SERVER WITH", data)
    axios({
        method: "POST",
        url: findMessageByQueryURL,
        data:data
    })
    .then(res => {
        console.log("RESPONSE FROM SUCCESS NOTIFICATION", res.data.data)
    })
    .catch(err => {
        console.log("ERROR FROM NOTIFICATION FAILURE", err)
    })
}