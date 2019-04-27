import axios from "axios"
import {
    FILTERATION_DONE
} from "../Constants"
import { profileQuery } from "../../api/apiURL"

export const getSpecificProfiles = (body) => dispatch => {
    console.log("INSIDE MESSAGE ACTION", body)
    axios({
        method:"POST",
        url: profileQuery,
        data: body
    })
    .then(res => {
        console.log("FROM INSIDE LGA SEARCH CREATOR",res.data.data)
        dispatch({
          type:FILTERATION_DONE,
          payload:res.data.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}
