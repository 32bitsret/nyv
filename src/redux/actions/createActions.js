import isEmpty from  '../../utils/isEmpty'
import {
    DONE_CREATING,
    ERROR,
    FETCH_USER,
    FETCHING_USER,
    DONE_UPDATING,
    GET_PROFILE,
    CREATING_PROFILE,
    SUCCESS_UPDATING_PHOTO,
    UPDATE_ERROR
} from "../Constants"
import axios from "axios"
import {
    registerURL,
    updateProfileURL,
    profileURL,
    uploadImageURL
} from "../../api/apiURL"



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


//===================BY USER=====================================
export const updateBasicInfo = (data) => dispatch =>{
    //step3
    console.log("UPDATED DATA", data)
    axios({
        method:"PUT",
        url: updateProfileURL,
        data: data
    })
    .then(res => {
        console.log("PERSONAL INFO UPDATED", res.data.data)
        window.location.reload()
    })
    .catch(err => {
        console.log("ERROR FOR UPDATING BASIC DATA ", err)
        dispatch({
            type: UPDATE_ERROR,
            payload: err
        })
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
        window.location.reload()
    })
    .catch(err => {
        console.log("ERROR FROM PHOTO UPDATE", err)
        dispatch({
            type: UPDATE_ERROR,
            payload: err
        })
    })
}


export const updateDocument = (location, id) => dispatch => {
    console.log("document uploadrunning...")
    let query = {
        _id: id
    }
    let update = {
        resume: location
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
        window.location.reload()
    })
    .catch(err => {
        console.log("ERROR FROM PHOTO UPDATE", err)
        dispatch({
            type:UPDATE_ERROR,
            payload: err
        })
    })
}

export const updateEducationalInfo = (data) => dispatch =>{
    //step3
    console.log("STEP3", data)
    axios({
        method:"PUT",
        url:updateProfileURL,
        data: data
    })
    .then(res => {
        console.log("EDUCATION UPDATED", res.data)
        window.location.reload()
    })
    .catch(err => {
        dispatch({
            type: UPDATE_ERROR,
            payload: err
        })
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
        dispatch({
            type:UPDATE_ERROR,
            payload:err
        })
    })
}



export const updateContactInfo = data => dispatch => {
    axios({
        method:"PUT",
        url:updateProfileURL,
        data: data
    })
    .then(res => {
        console.log("CONTACT UPDATE", res.data)
        window.location.reload()
    })
    .catch(err => {
        dispatch({
            type: UPDATE_ERROR,
            payload: err
        })
    })
}

export const uploadDocument = (data, id) => dispatch =>{
    //step4
    console.log("DOCUMENT UPLOAD IN ROGRESS")
    axios({
        method:"POST",
        url:uploadImageURL,
        data: data
    })
    .then(res => {
        console.log("DOCUMENT UPLOAD", res.data)
        dispatch(updateDocument(res.data.Location, id))
    })
    .catch(err => {
        console.log("DOCUMENT FAILURE", err)
        dispatch({
            type: UPDATE_ERROR,
            payload: err
        })
    })
}



//===================ADMIN FUNCTIONS==================================

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
        console.log("SUCCESSFUL")
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
//======================REGISTRATION==========================

export const updateBasicInfoA = (data) => dispatch =>{
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
    })
    .catch(err => {
        console.log("ERROR FOR UPDATING BASIC DATA ", err)
    })
}


export const updatePhotoA = (location, id) => dispatch => {
    console.log("running... ID",id)
    console.log("URL FOR PHOTO", location)
    let query = {
        _id: id
    }
    let update = {
        photo: "https://s3.amazonaws.com/snow-africa-bucket-test/14095970_1835618916724698_8403375028931806167_n.jpg"//location
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
    })
    .catch(err => {
        console.log("ERROR FROM PHOTO UPDATE", err)
    })
}


export const updateDocumentA = (location, id) => dispatch => {
    console.log("document uploadrunning...")
    let query = {
        _id: id
    }
    let update = {
        resume: location
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
    })
    .catch(err => {
        console.log("ERROR FROM PHOTO UPDATE", err)
    })
}

export const updateEducationalInfoA = (data) => dispatch =>{
    //step3
    console.log("STEP3", data)
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

export const uploadPictureA = (data, id) => dispatch =>{
    //step4
    axios({
        method:"POST",
        url:uploadImageURL,
        data: data
    })
    .then(res => {
        console.log("RESPONSE FROM IMAGE UPLOAD", res.data.Location)
        dispatch(updatePhotoA(res.data.Location, id))
    })
    .catch(err => {
        console.log("ERROR FROM IMAGE UPLOAD")
    })
}



export const updateContactInfoA = data => dispatch => {
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

export const uploadDocumentA = (data, id) => dispatch =>{
    //step4
    console.log("DOCUMENT UPLOAD IN ROGRESS")
    axios({
        method:"POST",
        url:uploadImageURL,
        data: data
    })
    .then(res => {
        console.log("DOCUMENT UPLOAD", res.data)
        dispatch(updateDocumentA(res.data.Location, id))
    })
    .catch(err => {
        console.log("DOCUMENT FAILURE", err)
    })
}
