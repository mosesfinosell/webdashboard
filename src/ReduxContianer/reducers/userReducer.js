import UserActionType from "../constants/userType";

const INITIAL_STATE = {
    users: null,
    error: null,
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case UserActionType.SIGN_UP_SUCCESS:
           return {
            ...state,
            users: action.payload,
           
           }

           case UserActionType.SIGN_UP_ERROR: 
            return {
                ...state,
                error: action.payload
            }
      
       default:
           return state
    }

}



export default userReducer