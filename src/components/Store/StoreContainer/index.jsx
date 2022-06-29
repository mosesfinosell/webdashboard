import {Outlet} from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import {Container} from "./styles"

const StoreLinkContainer = () => {
  return (
    <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer />
    </>
  )
}

export default StoreLinkContainer