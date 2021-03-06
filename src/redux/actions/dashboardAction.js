import {
    GET_PROFILE, 
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
    dispatch({
        type:GET_RID_OF_WELCOME
    })
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
    })
    .catch(err => {
        console.log(err)
    })
}


//NOTE: PLEASE BEFORE YOU ALTER ANYTHING HERE, 
//MAKE SURE YOU KNOW WHAT YOU'RE DOING, BECAUSE I DIDN'T KNOW WHAT I WAS DOINGWHNE I WROTE THIS
export const getProfileInit = (phone) => dispatch => {
    axios({
        method: "POST",
        url: profileURL,
        data: { phone}
    })
    .then(res => {        
        if(isEmpty(res.data.data.photo)){
            localStorage.setItem("pic","https://www.gravatar.com/avatar/anything?s=200&d=mm")
        }else{
            localStorage.setItem("pic",res.data.data.photo)
        }

        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })

    })
    .catch(err => {
        // console.log(err)
    })
}


export const updateProfile = () => dispatch =>{
    axios({
        method: "",
        url: "",
        data: ""
    })
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        // console.log(err)
    })
}

export const getAllProfile = () => dispatch =>{
    dispatch({
        type: GET_RID_OF_WELCOME
    })
    axios({
        method: "GET",
        url: getAllProfileURL
    })
    .then(res => {
        dispatch({
            type: GET_ALLL_PROFILE,
            payload: res.data.data
        })
    })
    .catch(err => {
        // console.log(err)
    })
}
