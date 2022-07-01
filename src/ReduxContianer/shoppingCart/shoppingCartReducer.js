import {ADD_TO_CART} from "../constants/shoppingCartActions"
const initialState = []

const shoppingCartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload]
        default:
            return state
    }
}

export default shoppingCart