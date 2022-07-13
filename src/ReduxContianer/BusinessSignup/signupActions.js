import {CREATE_ACCOUNT, VERIFICATION} from "../constants/businessSignupActionType"

export const createAccount = (dispatch, data) => {

    return dispatch({
        type:CREATE_ACCOUNT,
        payload: data
    })
}

export const setVerification = (dispatch) => {

    return dispatch({
        type: VERIFICATION
    })
}