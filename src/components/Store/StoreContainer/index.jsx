import {Outlet} from "react-router-dom"
import Header from "../Header"
import {Container} from "./styles"

const StoreLinkContainer = () => {
  return (
    <>
    <Header />
    <Container>
      <Outlet />
    </Container>
    </>
  )
}

export default StoreLinkContainer