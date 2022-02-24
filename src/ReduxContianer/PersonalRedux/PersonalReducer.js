import PersonalActionType from "../constants/PersonalActionType";

const INITIAL_STATE = {
    users: null,
    user: { userDetails: localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : null},
    error: null,
    loading: true
}


const personalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case PersonalActionType.DATA_REQUEST:
            return {
                ...state,
                loading: true
               }
        case PersonalActionType.SIGN_UP_SUCCESS:
           return {
            ...state,
            users: action.payload,
            userDetails: action.payload.message
           
           }
        case PersonalActionType.SIGN_UP_ERROR: 
           return {
            ...state,
            error: action.payload
           }

        case PersonalActionType.SIGN_IN_SUCCESS:
            return {
             ...state,
             users: action.payload,
             userDetails: action.payload.message
            }

            case PersonalActionType.SIGN_IN_ERROR: 
            return {
             ...state,
             error: action.payload
            }

            case PersonalActionType.SEND_SMS_SUCCESS:
            return {
             ...state,
             users: action.payload,
             userDetails: action.payload.message
            }

            case PersonalActionType.SEND_SMS_ERROR: 
            return {
             ...state,
             error: action.payload
            }

            case PersonalActionType.VERIFY_NUMBRER_SUCCESS:
                return {
                 ...state,
                 users: action.payload,
                 userDetails: action.payload.message
                }
    
                case PersonalActionType.VERIFY_NUMBRER_ERROR: 
                return {
                 ...state,
                 error: action.payload
                }
                case PersonalActionType.GET_USER_DETAIL_SUCCESS:
                    return {
                     ...state,
                     users: action.payload,
                     userDetails: action.payload.message
                    }
        
                    case PersonalActionType.GET_USER_DETAIL_ERROR: 
                    return {
                     ...state,
                     error: action.payload
                    }
       default:
           return state
    }

}



export default personalReducer