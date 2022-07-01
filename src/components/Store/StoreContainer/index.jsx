import {useState} from "react"
import {useQuery} from "react-query"
import {Outlet} from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import ShoppingCart from "../ShoppingCart"
import {Container} from "./styles"
import {Store} from "../../../utils/API"

const StoreLinkContainer = () => {
  const [cart, setCart] = useState(false)
  const seller = new Store()
  const {data, error, isLoading, isError} = useQuery("store", seller.getStoreInfo)
  return (
    <>
    <Header setCart={setCart} />
    <Container>
      <Outlet />
      <ShoppingCart visible={cart} setVisible={setCart} />
    </Container>
    <Footer />
    
    </>
  )
}

export default StoreLinkContainer