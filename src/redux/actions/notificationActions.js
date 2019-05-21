import {
    GET_NOTIFICATIONS, 
    GET_NOTIFICATION_ERROR,
    DONE_GETTING_NOTIFICATION
} from "../Constants"
import {findMessageByQueryURL} from "../../api/apiURL"
import axios from "axios"
import isEmpty from "../../utils/isEmpty"

export const getNotification = (data) => dispatch => {
    // console.log("DATA TO QUERY SERVER WITH", data)
    axios({
        method: "POST",
        url: findMessageByQueryURL,
        data:data
    })
    .then(res => {
        // console.log("RESPONSE FROM SUCCESS NOTIFICATION", isEmpty(res.data.data))
        dispatch({
            type: DONE_GETTING_NOTIFICATION,
            payload: res.data.data
        })
    })
    .catch(err => {
        // console.log("ERROR FROM NOTIFICATION FAILURE", err)
        dispatch({
            type: GET_NOTIFICATION_ERROR,
            payload: err
        })
    })
}