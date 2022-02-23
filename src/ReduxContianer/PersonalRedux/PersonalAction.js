import axios from 'axios'
import PersonalActionType from '../constants/PersonalActionType'


const baseUrl = `https://finosell.link/api/v2`;

export const personalUserSignUp = (name,phone_number, email,password) => async(dispatch) => {
    dispatch({
        type: PersonalActionType.DATA_REQUEST
    })
   try {
         const {data} = await axios.post(baseUrl + `/auths/firststage`,{name,phone_number, email,password})    
        dispatch({
            type: PersonalActionType.SIGN_UP_SUCCESS,
            payload: data
        })

    //    localStorage.setItem("users", JSON.stringify(data)) 

   }catch(error) {
        dispatch({
          type: PersonalActionType.SIGN_UP_ERROR,
          payload:  error.response && error.response.data.message
        //   ? error.response.data.message
        //   : error.message,
        })
   }
}

export const peronalUserLogin = (phonenumber,password) => async(dispatch) =>{
    dispatch({
        type: PersonalActionType.DATA_REQUEST
    })
    try {
        const {data} = await axios.post(baseUrl + `/auths/login`,{phonenumber,password})
    dispatch({
            type: PersonalActionType.SIGN_IN_SUCCESS,
            payload : data
    })

    // localStorage.setItem("users", JSON.stringify(data)) 
    }catch (error){
        dispatch({
            type: PersonalActionType.SIGN_IN_ERROR,
            payload:  error.response && error.response.data.message
          })
    }
}

export const verifyNumberSms = (user) => async (dispatch) => {
    try{
        const {data} = await axios.post(baseUrl + `/sms/sendsms`,{user})
        dispatch({
            type: PersonalActionType.SEND_SMS_SUCCESS,
            payload: data
         })
  
    //    localStorage.setItem("users", JSON.stringify(data)) 
    } catch (error) {
        dispatch({
            type: PersonalActionType.SEND_SMS_ERROR,
            payload:  error.response && error.response.data.message
         })
    }
}