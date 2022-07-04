import {ADD_TO_CART, UPDATE_CART} from "../constants/shoppingCartActions"
const initialState = []

const shoppingCartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_CART:
            return action.payload
        default:
            return state
    }
}

export default shoppingCartReducer