import {FaTimes} from "react-icons/fa"
import {CartContainer, Cart, Path, CartItems, BreakDown, Button} from "./styles"

const Index = ({visible, setVisible}) => {
  return (
    <CartContainer visible={visible}>
        <Cart>
            <FaTimes onClick={()=>setVisible(false)} />
            <h3 className="title">Cart</h3>
            <Path>cart</Path>
            <CartItems></CartItems>
            <BreakDown>
            <p>
                <span>Items</span>
                <span>₦7200.00</span>
            </p>
            <p>
                <span>Delivery</span>
                <span>₦500.00</span>
            </p>
            <p>
                <span>Total</span>
                <span>₦7700.00</span>
            </p>
            </BreakDown>
            <Button>Finish</Button>
        </Cart>
    </CartContainer>
  )
}

export default Index