import CartItem from "./CartItem"
import {Path, CartItems, BreakDown, Button} from "./styles"

const Items = ({setCheckOut}) => {
    const data = {
        name:"Ofada Rice and Sauce",
        price:"2,700.00"
    }
  return (
    <>
        <Path>cart</Path>
        <CartItems>
            {Array(8).fill(data).map((data, i)=><CartItem key={i} item={data} />)}
        </CartItems>
        <BreakDown>
            <p>
                <span>Items</span>
                <span>₦7200.00</span>
            </p>
            <p>
                <span>Delivery</span>
                <span>₦500.00</span>
            </p>
            <p className="total">
                <span>Total</span>
                <span>₦7700.00</span>
            </p>
        </BreakDown>
        <Button type="button" onClick={()=>setCheckOut(true)}>Finish</Button>
    </>
  )
}

export default Items