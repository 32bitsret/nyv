import isEmpty from  '../../utils/isEmpty'
import {
    CREATE_USER_BY_ADMIN, 
    DONE_STEP_ONE,
    DONE_STEP_THREE,
    DONE_STEP_TWO,
    ERROR
} from "../Constants"
import axios from "axios"

export const createUserByAdmin = (data) => dispatch => {
    //step1
    console.log("FROM STEP1 ACTION", typeof(data.phone))
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