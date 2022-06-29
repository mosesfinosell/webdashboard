import {FaTimes} from "react-icons/fa"
import {CartContainer, Cart} from "./styles"

const Index = ({visible, setVisible}) => {
  return (
    <CartContainer visible={visible}>
        <Cart>
            <FaTimes />
        </Cart>
    </CartContainer>
  )
}

export default Index