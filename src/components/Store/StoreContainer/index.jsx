import {useState} from "react"
import {Outlet} from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import ShoppingCart from "../ShoppingCart"
import {Container} from "./styles"

const StoreLinkContainer = () => {
  const [cart, setCart] = useState(false)
  return (
    <>
    <Header setCart={setCart} />
    <Container>
      <Outlet />
    </Container>
    <Footer />
    <ShoppingCart visible={cart} setVisible={setCart} />
    </>
  )
}

export default StoreLinkContainer