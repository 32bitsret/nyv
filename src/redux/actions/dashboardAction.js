import {GET_PROFILE, GET_PROFILE_ERROR} from "../Constants"
import { profileURL } from "../../api/apiURL"
import axios from "axios"

export const getProfile = (phone) => dispatch => {
    // console.log("ACTION DASHBOARD", typeof(phone))
    axios({
        method: "POST",
        url: profileURL,
        data: { phone}
    })
    .then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })
        console.log("INSIDE THEN",res.data.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const updateProfile = () => {
    axios({
        method: "",
        url: "",
        data: ""
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}