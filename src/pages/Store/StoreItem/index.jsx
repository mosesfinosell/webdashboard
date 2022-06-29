import {useState} from "react"
import {Path, Image, Container, Content, Button} from "./styles"
import Quantity from "../../../components/Quantity"
import image from "../../../assets/food.png"

const StoreItem = () => {
  const [add, setAdd] = useState(false)
  return (
    <>
      <Path>Home / Ofada Rice and Sauce</Path>
      <Container>
        <Image src={image} alt="Ofada rice and sauce" />
        <Content>
          <h1 className="name">Ofada rice and sauce</h1>
          <h3 className="price">₦2,700.00</h3>
          <h3 className="quantity">Quantity</h3>
          <Quantity  />
          <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in molestie enim. Sed eu urna tortor. Suspendisse vel arcu vel massa tempor interdum. Nulla id dolor volutpat, viverra purus non, egestas ante.
          </p>
          {!add ? 
            <Button onClick={()=>setAdd(true)}>Add to Cart</Button>
            :
            <>
              <Button>Continue Shopping</Button>
              <Button className="color">Go to Check Out</Button>
            </>
          }
        </Content>

      </Container>
    </>
  )
}

export default StoreItem