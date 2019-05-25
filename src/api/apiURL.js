// export const BASE_URL = "https://plateauyc.herokuapp.com"
// export const BASE_URL = "http://ec2-34-217-132-185.us-west-2.compute.amazonaws.com"
export const BASE_URL = "https://api.plateauyouthcouncil.org"
// https://api.plateauyouthcouncil.org/apidoc/
//login API
export const loginURL = `${BASE_URL}/pyc/loginUser` 

//register 
export const registerURL = `${BASE_URL}/pyc/registerUser`

//get profile
export const profileURL = `${BASE_URL}/pyc/profile`
export const updateProfileURL = `${BASE_URL}/pyc/profile`

//message
export const sendMessageURL = `${BASE_URL}/pyc/message/create`
export const findMessageByIdURL =  `${BASE_URL}/pyc/message/`
export const findMessageByQueryURL =  `${BASE_URL}/pyc/message/query`
export const findAllMessagesURL =  `${BASE_URL}/pyc/message/`

//profiles
export const getAllProfileURL = `${BASE_URL}/pyc/profile`
export const profileQuery =  `${BASE_URL}/pyc/profile/query/`

//image
export const uploadImageURL = `${BASE_URL}/pyc/upload`
