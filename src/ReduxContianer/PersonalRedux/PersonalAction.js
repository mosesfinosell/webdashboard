import axios from 'axios'
import PersonalActionType from '../constants/PersonalActionType'


const baseUrl = `https://finosell.link/api/v2`;

export const personalUserSignUp = (name,phone_number, email) => async(dispatch) => {
    dispatch({
        type: PersonalActionType.DATA_REQUEST
    })
   try {
         const {data} = await axios.post(baseUrl + `/auths/firststage`,{name,phone_number, email})    
        dispatch({
            type: PersonalActionType.SIGN_UP_SUCCESS,
            payload: data
        })
   }catch(error) {
        dispatch({
          type: PersonalActionType.SIGN_UP_ERROR,
          payload: error.response && error.response.data.message  
        })
   }
}

// export const verifyNumber = () => async(dispatch) =>{
//     try {
//         const {data} = await axios.post(baseUrl + `sms/sendsms`,{user})

//     dispatch({
//         type{

   //  }
//     })

//     }catch (error){

//     }
// }