import isEmpty from  '../../utils/isEmpty'
import {
    CREATE_USER_BY_ADMIN, 
    DONE_STEP_ONE,
    DONE_STEP_THREE,
    DONE_STEP_TWO,
    ERROR,
    FETCH_USER,
    FETCHING_USER,
    DONE_UPDATING
} from "../Constants"
import axios from "axios"
import {
    registerURL,
    updateProfileURL,
    profileURL
} from "../../api/apiURL"

export const createUserByAdmin = (data) => dispatch => {
    //step1
    console.log("FROM STEP1 ACTION", typeof(data.phone))
    
    dispatch({
        type:CREATE_USER_BY_ADMIN,
    })

    axios({
        method:"POST",
        url: registerURL,
        data: data
    })
    .then(res => {
        console.log(res)
        dispatch({
            type: DONE_STEP_ONE,
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

export const updateBioInfo = (data) => dispatch =>{
    //step2
    axios({
        method:"",
        url:"",
        data: ""
    })
    .then(res => {

    })
    .catch(err => {
        
    })
}

export const updateBasicInfo = (data) => dispatch =>{
    //step3
    axios({
        method:"PUT",
        url: updateProfileURL,
        data: data
    })
    .then(res => {
        console.log(":::::::::::::UPDATED DATA::::::::::", res.data)
        localStorage.setItem('user', res.data.data)
        // dispatch({
        //     type:
        // })
    })
    .catch(err => {
        
    })
}


export const updateEducationalInfo = (data) => dispatch =>{
    //step3
    axios({
        method:"",
        url:"",
        data: ""
    })
    .then(res => {

    })
    .catch(err => {
        
    })
}

export const uploadPicture = (data) => dispatch =>{
    //step4
    axios({
        method:"",
        url:"",
        data: ""
    })
    .then(res => {

    })
    .catch(err => {
        
    })
}

export const uploadDocument = (data) => dispatch =>{
    //step4
    axios({
        method:"",
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
//======================================
    axios({
        method:"POST",
        url:profileURL,
        data: {phone:phone}
    })
    .then(res => {
        console.log("LCOALSTORAGE",res.data.data)
        localStorage.setItem('ESAU', JSON.stringify(res.data.data))
        console.log("ESAU", localStorage.getItem("ESAU"))
        dispatch({
            type: FETCH_USER,
            payload: res.data.data
        })
    })
    .catch(err => {
        console.log(err)
    })
//=======================================
}
