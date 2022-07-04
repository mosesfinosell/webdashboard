import {useState} from "react"
import {CartItem, ItemDetails} from "./styles"
import Quantity from "../../Quantity"
import {useSelector} from "react-redux"
import cartHook from "./cartHook"

const Item = (prop) => {
    const {title, price, productID} = prop.item
    const cart = useSelector((state)=>state.shoppingCart)
    const counter = cartHook(productID)
    
  return (
    <CartItem>
        <ItemDetails>
            <p className="name">
                {title}
            </p>
            <p className="price">
                ₦{price}
            </p>
        </ItemDetails>
        <Quantity width={105} height={45} counter={counter} />
    </CartItem>
  )
}

export default Item