import {
    GET_NOTIFICATION_ERROR,
    DONE_GETTING_NOTIFICATION
} from "../Constants"
import {findMessageByQueryURL} from "../../api/apiURL"
import axios from "axios"

export const getNotification = (data) => dispatch => {
    axios({
        method: "POST",
        url: findMessageByQueryURL,
        data:data
    })
    .then(res => {
        dispatch({
            type: DONE_GETTING_NOTIFICATION,
            payload: res.data.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_NOTIFICATION_ERROR,
            payload: err
        })
    })
}