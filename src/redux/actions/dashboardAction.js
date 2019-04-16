import {GET_PROFILE, GET_MEMBERS} from "../Constants"
import { profileURL } from "../../api/apiURL"
import axios from "axios"

export const getProfile = (phone) => dispatch => {
    console.log("ACTION DASHBOARD", typeof(phone))
    axios({
        method: "POST",
        url: profileURL,
        data: { phone}
    })
    .then(res => {
        console.log(res.data.data)
    })
    .catch(err => {
        console.log(err)
    })
}