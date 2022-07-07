import {ADD_TO_CART, UPDATE_CART, SET_CHECKOUT, SET_CARTUI, SET_CHECKOUT_FORM} from "../constants/shoppingCartActions"
export const addToCart = (dispatch, data) => {

    return dispatch({type:ADD_TO_CART, payload:data})
}

export const updateCart = (dispatch, data) => {
    return dispatch({type:UPDATE_CART, payload:data})
}

export const setStore = (dispatch, data) => {
    return dispatch({type:SET_CHECKOUT, payload:data})
}