import {useState} from "react"
import {FaTimes} from "react-icons/fa"
import {useSelector} from "react-redux"
import CheckOut from "./CheckOut"
import Items from "./Items"
import {CartContainer, Cart } from "./styles"


const Index = ({visible, setVisible}) => {
    const [checkOut, setCheckOut] = useState(false)
    const store = useSelector((state)=>state.shoppingCart)
    
    const handleVisibility = (e)=>{
      e.stopPropagation()
      
    }
  return (
    <CartContainer onClick={()=>setVisible(false)} visible={visible}>
        <Cart onClick={(e)=>handleVisibility(e)}>
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