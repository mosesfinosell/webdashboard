import {CartItem, ItemDetails} from "./styles"
import Quantity from "../../Quantity"

const Item = (prop) => {
    const {name, price} = prop.item
  return (
    <CartItem>
        <ItemDetails>
            <p className="name">
                {name}
            </p>
            <p className="price">
                ₦{price}
            </p>
        </ItemDetails>
        <Quantity width={105} height={45} />
    </CartItem>
  )
}

export default Item