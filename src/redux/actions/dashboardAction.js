import {
    GET_PROFILE, 
    GET_PROFILE_ERROR, 
    GET_ALLL_PROFILE,
    GET_RID_OF_WELCOME
} from "../Constants"
import { 
    profileURL,
    getAllProfileURL
} from "../../api/apiURL"
import axios from "axios"
import isEmpty from "../../utils/isEmpty"

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
        console.log("PROFILE RETURNED", res.data.data)

    })
    .catch(err => {
        console.log(err)
    })
}



export const getProfileInit = (phone) => dispatch => {
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
        console.log("PROFILE RETURNED", res.data.data)
        localStorage.setItem("f",res.data.data.firstname)
        localStorage.setItem("l",res.data.data.lastname)
        if(isEmpty(res.data.data.photo)){
            localStorage.setItem("pic","https://www.gravatar.com/avatar/anything?s=200&d=mm")
        }else{
            localStorage.setItem("pic",res.data.data.photo)
        }
        window.location.reload()
        dispatch({
            type:""
        })
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