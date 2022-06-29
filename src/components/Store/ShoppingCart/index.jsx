import {useState} from "react"
import {FaTimes} from "react-icons/fa"
import CheckOut from "./CheckOut"
import Items from "./Items"
import {CartContainer, Cart } from "./styles"


const Index = ({visible, setVisible}) => {
    const [checkOut, setCheckOut] = useState(false)
  return (
    <CartContainer visible={visible}>
        <Cart>
            <FaTimes onClick={()=>setVisible(false)} />
            <h3 className="title">Cart</h3>
            {!checkOut ? 
             <Items setCheckOut={setCheckOut} />
             :
             <CheckOut />
            }
               
            
        </Cart>
    </CartContainer>
  )
}

export default Index