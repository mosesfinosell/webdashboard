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
   }catch(error) {
        dispatch({
          type: PersonalActionType.SIGN_UP_ERROR,
          payload: error.error 
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

    }catch (error){
        dispatch({
            type: PersonalActionType.SIGN_IN_ERROR,
            payload: error.error
          })
    }
}