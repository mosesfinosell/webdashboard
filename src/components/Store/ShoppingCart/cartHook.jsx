import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import {updateCart} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"

const useCart = (productID) => {
    const {businessID} = useParams();
    const dispatch = useDispatch();
    const cart = useSelector((state=>state.shoppingCart))
    const product = cart.find((item)=>item.item.productID === productID)
    
    const count = product.item.amount
    const setCount = (n) =>{
        if(n < 1){
            const newStore = cart.filter((product)=>product.item.productID !== productID)
            updateCart(dispatch, newStore)
        }else{
            const newStore = cart.map((product)=>product.item.productID === productID ? {...product, item:{...product.item, amount:n}} : product)
            updateCart(dispatch, newStore)
        }
        
        
    }   
    return [count, setCount]
}

export default useCart