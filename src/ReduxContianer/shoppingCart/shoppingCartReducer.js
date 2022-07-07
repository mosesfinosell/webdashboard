import {ADD_TO_CART, UPDATE_CART, SET_CHECKOUT} from "../constants/shoppingCartActions"
const initialState = {
    checkout:{
        storeName:"",
        id:"",
        name:"",
        email:"",
        tel:"",
        address:"",
        note:""
    },
    cart:[],
    cartUI:{
        visible:false,
        checkout:false,
    }
}

const shoppingCartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cart:[
                ...state.cart,
                action.payload
            ]}
        case UPDATE_CART:
            return {
                ...state,
                cart:action.payload
            }
        case SET_CHECKOUT:
            return{
                ...state,
                checkout: action.payload
            }
        default:
            return state
    }
}

export default shoppingCartReducer