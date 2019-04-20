import {GET_PROFILE, GET_PROFILE_ERROR, GET_ALLL_PROFILE} from "../Constants"
import { 
    profileURL,
    getAllProfileURL
} from "../../api/apiURL"
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

export const updateProfile = () => dispatch =>{
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

export const getAllProfile = () => dispatch =>{
    axios({
        method: "GET",
        url: getAllProfileURL
    })
    .then(res => {
        console.log("GET ALL PROFILE",res.data.data)
        dispatch({
            type: GET_ALLL_PROFILE,
            payload: res.data.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}