import {FaTimes} from "react-icons/fa"
import CheckOut from "./CheckOut"
import Items from "./Items"
import {CartContainer, Cart } from "./styles"
import {useDispatch, useSelector} from "react-redux"
import {setCartUI} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"


const Index = () => {
    
    const cartUI = useSelector((state)=>state.shoppingCart).cartUI
    const visible = cartUI.visible
    const dispatch = useDispatch()
    
    const stopPropagation = (e)=>{
      e.stopPropagation()
    }
    const handleVisibility = () =>{
      const data = {
        visible: false,
        checkout: false
      }
      setCartUI(dispatch, data)
    }
  return (
    <CartContainer onClick={()=>handleVisibility()} visible={visible}>
        <Cart onClick={(e)=>stopPropagation(e)}>
            <FaTimes onClick={()=>handleVisibility()} />
            <h3 className="title">Cart</h3>
            {!cartUI.checkout ? 
             <Items />
             :
             <CheckOut />
            }  
        </Cart>
    </CartContainer>
  )
}

export default Index