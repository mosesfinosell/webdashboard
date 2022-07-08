import {ADD_TO_CART, UPDATE_CART, SET_CHECKOUT, SET_SEARCH, SET_CARTUI} from "../constants/shoppingCartActions"
const initialState = {
    checkout:{
        storeName:"",
        id:"",
        businessEmail:"",
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
    },
    search:""
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
        case SET_SEARCH:
            return {
                ...state,
                search:action.payload
            }
        case SET_CARTUI:
            return {
                ...state,
                cartUI: action.payload
            }
        default:
            return state
    }
}

export default shoppingCartReducer