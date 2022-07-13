import {CREATE_ACCOUNT, VERIFICATION} from "../constants/businessSignupActionType"

const initialState = {
    email:"",
    name: "",
    tel:"",
    password:"",
    verification:"tel",
    type:undefined
}
const signupReducer = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_ACCOUNT:
            return{
                ...state,
                ...action.payload
            }
        case VERIFICATION:
            return{
                ...state,
                verification: state.verification === "tel" ? "email" : "tel"
            }
        default :
            return state
    }
}

export default signupReducer