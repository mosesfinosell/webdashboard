import axios from 'axios'
import UserActionType from '../constants/userType'


const baseUrl = `https://finosell.link/api/v2`;

export const personalUserSignUp = (name,phone_number, email) => async(dispatch) => {
   try {


         const {data} = await axios.post(baseUrl + `/auths/firststage`,{name,phone_number, email})    
        dispatch({
            type: UserActionType.SIGN_UP_SUCCESS,
            payload: data
        })
   }catch(error) {
        dispatch({
            type: UserActionType.SIGN_UP_ERROR,
             payload: error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
        })
   }
}

// export const verifyNumber = () => async(dispatch) =>{
//     try {
//         const {data} = await axios.post(baseUrl + `sms/sendsms`,{user})

//     dispatch({
//         ty
//     })

//     }catch (error){

//     }
// }