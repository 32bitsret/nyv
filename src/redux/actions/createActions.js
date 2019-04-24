import isEmpty from  '../../utils/isEmpty'
import {
    DONE_CREATING,
    ERROR,
    FETCH_USER,
    FETCHING_USER,
    DONE_UPDATING,
    GET_PROFILE,
    CREATING_PROFILE,
    SUCCESS_UPDATING_PHOTO
} from "../Constants"
import axios from "axios"
import {
    registerURL,
    updateProfileURL,
    profileURL,
    uploadImageURL
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


export const updatePhoto = (location, id) => dispatch => {
    console.log("running...")
    let query = {
        _id: id
    }
    let update = {
        photo: location
    }
    axios({
        method:"PUT",
        url:updateProfileURL,
        data:{
            query,
            update
        }
    })
    .then(res => {
        console.log("PHOTO UPDATE", res.data)
        dispatch({
            type:SUCCESS_UPDATING_PHOTO,
            payload:""
        })
    })
    .catch(err => {
        console.log("ERROR FROM PHOTO UPDATE", err)
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

export const uploadPicture = (data, id) => dispatch =>{
    //step4
    axios({
        method:"POST",
        url:uploadImageURL,
        data: data
    })
    .then(res => {
        console.log("RESPONSE FROM IMAGE UPLOAD", res.data.Location)
        dispatch(updatePhoto(res.data.Location, id))
    })
    .catch(err => {
        console.log("ERROR FROM IMAGE UPLOAD")
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
