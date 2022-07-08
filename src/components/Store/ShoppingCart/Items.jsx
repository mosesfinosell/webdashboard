import CartItem from "./CartItem"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {setCartUI} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import {Path, CartItems, BreakDown, Button} from "./styles"


const Items = () => {
    const {businessID} = useParams()
    const dispatch = useDispatch()
    const cart = useSelector((store)=>store.shoppingCart.cart)
                .filter((business)=>business.businessID === businessID)
    
    
    const totalItems = cart.reduce((acc, item)=>{
        return acc + (item.amount * parseFloat(item.price))
    }, 0)

    const handleFinish = () =>{
        const data = {
            visible: true,
            checkout: true
        }
        if(cart.length > 0){
            setCartUI(dispatch, data)
        }
    }
   
    
    const data = {
        name:"Ofada Rice and Sauce",
        price:"2,700.00"
    }
  return (
    <>
        <Path>cart</Path>
        <CartItems>
            {cart.map((data, i)=><CartItem key={i} item={data} />)}
        </CartItems>
        <BreakDown>
            
            <p className="total">
                <span>Total</span>
                <span>₦{totalItems.toFixed(2)}</span>
            </p>
        </BreakDown>
        <Button type="button" onClick={()=>handleFinish()}>Finish</Button>
    </>
  )
}

export default Items