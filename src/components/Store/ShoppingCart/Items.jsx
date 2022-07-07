import CartItem from "./CartItem"
import {useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {Path, CartItems, BreakDown, Button} from "./styles"


const Items = ({setCheckOut}) => {
    const {businessID} = useParams()
    const cart = useSelector((store)=>store.shoppingCart.cart)
                .filter((business)=>business.businessID === businessID)
    
    
    const totalItems = cart.reduce((acc, item)=>{
        return acc + (item.amount * parseFloat(item.price))
    }, 0)

    const handleFinish = () =>{
        if(cart.length > 0){
            setCheckOut(true)
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