import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {updateCart} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"

const useCart = (productID) => {
    const {businessID} = useParams();
    const dispatch = useDispatch();
    const cart = useSelector((state=>state.shoppingCart.cart))
    const product = cart.find((item)=>item.productID === productID)
    
    
    const setCount = (n) =>{
        if(n < 1){
            const newStore = cart.filter((product)=>product.productID !== productID)
            updateCart(dispatch, newStore)
        }else{
            const newStore = cart.map((product)=>product.productID === productID ? {...product, amount:n} : product)
            updateCart(dispatch, newStore)
        }
        
        
    }   
    return [product.amount, setCount]
}

export default useCart