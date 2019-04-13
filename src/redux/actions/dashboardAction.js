import {GET_PROFILE, GET_MEMBERS} from "../Constants"
import { profileURL } from "../../api/apiURL"
import axios from "axios"

export const getProfile = () => dispatch => {
    axios({
        method: "",
        url: profileURL,
        body: ""
    })
}