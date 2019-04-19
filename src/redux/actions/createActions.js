import isEmpty from  '../../utils/isEmpty'
import {
    CREATE_USER_BY_ADMIN, 
    DONE_STEP_ONE,
    DONE_STEP_THREE,
    DONE_STEP_TWO,
    ERROR,
    FETCH_USER
} from "../Constants"
import axios from "axios"
import {registerURL} from "../../api/apiURL"

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

export const updateBioInfo = () => dispatch =>{
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

export const updateEducationalInfo = () => dispatch =>{
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

export const uploadPicture = () => dispatch =>{
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

export const uploadDocument = () => dispatch =>{
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

export const fetchUser = () =>  dispatch => {
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