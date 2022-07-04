import CartItem from "./CartItem"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {Path, CartItems, BreakDown, Button} from "./styles"


const Items = ({setCheckOut}) => {
    const {businessID} = useParams()
    const cart = useSelector((store)=>store.shoppingCart)
                .filter((business)=>business.businessID === businessID)
    
    const cartItems = cart.map((item)=>item.item)
    const totalItems = cartItems.reduce((acc, item)=>{
        return acc + (item.amount * parseFloat(item.price))
    }, 0)
    console.log("cart", cartItems, totalItems)
    const delivery = 500
    
    const data = {
        name:"Ofada Rice and Sauce",
        price:"2,700.00"
    }
  return (
    <>
        <Path>cart</Path>
        <CartItems>
            {cartItems.map((data, i)=><CartItem key={i} item={data} />)}
        </CartItems>
        <BreakDown>
            <p>
                <span>Items</span>
                <span>₦{totalItems.toFixed(2)}</span>
            </p>
            <p>
                <span>Delivery</span>
                <span>₦{delivery.toFixed(2)}</span>
            </p>
            <p className="total">
                <span>Total</span>
                <span>₦{(totalItems + delivery).toFixed(2)}</span>
            </p>
        </BreakDown>
        <Button type="button" onClick={()=>setCheckOut(true)}>Finish</Button>
    </>
  )
}

export default Items