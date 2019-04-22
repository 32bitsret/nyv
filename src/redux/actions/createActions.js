import isEmpty from  '../../utils/isEmpty'
import {
    DONE_CREATING,
    ERROR,
    FETCH_USER,
    FETCHING_USER,
    DONE_UPDATING,
    GET_PROFILE,
    CREATING_PROFILE
} from "../Constants"
import axios from "axios"
import {
    registerURL,
    updateProfileURL,
    profileURL
} from "../../api/apiURL"

export const createUserByAdmin = (data) => dispatch => {
     dispatch({
        type:CREATING_PROFILE,
    })
    axios({
        method:"POST",
        url: registerURL,
        data: data
    })
    .then(res => {
        dispatch({
            type: DONE_CREATING,
            payload: res.data.result
        })
    })
    .catch(err => {
        dispatch({
            type:ERROR,
            payload:err.response
        })
    })
}


export const updateBasicInfo = (data) => dispatch =>{
    //step3
    console.log("UPDATED DATA", data)
    axios({
        method:"PUT",
        url: updateProfileURL,
        data: data
    })
    .then(res => {
        // localStorage.setItem('user', res.data.data)
        console.log("PERSONAL INFO UPDATED", res.data.data)
        dispatch({
            type:GET_PROFILE,
            payload:res.data.data
        })
        
    })
    .catch(err => {
        console.log("ERROR FOR UPDATING BASIC DATA ", err)
    })
}


export const updateEducationalInfo = (data) => dispatch =>{
    //step3
    axios({
        method:"PUT",
        url:updateProfileURL,
        data: data
    })
    .then(res => {
        console.log("EDUCATION UPDATED", res.data)
    })
    .catch(err => {
        
    })
}

export const uploadPicture = (data) => dispatch =>{
    //step4
    axios({
        method:"PUT",
        url:"",
        data: ""
    })
    .then(res => {

    })
    .catch(err => {
        
    })
}


export const updateContactInfo = data => {
    axios({
        method:"PUT",
        url:updateProfileURL,
        data: data
    })
    .then(res => {
        console.log("CONTACT UPDATE", res.data)
    })
    .catch(err => {
        
    })
}

export const uploadDocument = (data) => dispatch =>{
    //step4
    axios({
        method:"PUT",
        url:"",
        data: ""
    })
    .then(res => {

    })
    .catch(err => {
        
    })
}

export const fetchUser = (phone) =>  dispatch => {
//    console.log("TESTING TESTING", phone)
   dispatch({
       type:FETCHING_USER
   })
    axios({
        method:"POST",
        url:profileURL,
        data: {phone:phone}
    })
    .then(res => {
        localStorage.setItem('ESAU', JSON.stringify(res.data.data))
        dispatch({
            type: FETCH_USER,
            payload: res.data.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}
