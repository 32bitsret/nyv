export const BASE_URL = "https://plateauyc.herokuapp.com"

//login API
export const loginURL = `${BASE_URL}/pyc/loginUser` 

//register 
export const registerURL = `${BASE_URL}/pyc/registerUser`

//get profile
export const profileURL = `${BASE_URL}/pyc/profile`
export const updateProfileURL = `${BASE_URL}/pyc/profile`

//get notification 
export const getNotificationURL = `${BASE_URL}/`

//send message
export const sendMessageURL = `${BASE_URL}/pyc/message/create`
export const findMessageByIdURL =  `${BASE_URL}/pyc/message/`
export const findMessageByQueryURL =  `${BASE_URL}/pyc/message/query`
export const findAllMessagesURL =  `${BASE_URL}/pyc/message/`

//get all profiles
export const getAllProfileURL = `${BASE_URL}/pyc/profile`
export const profileQuery =  `${BASE_URL}/pyc/profile/query/`

//upload image
export const uploadImageURL = `${BASE_URL}/pyc/upload`
