import Header from "./Header"
import Footer from "./Footer"
import {AppContainer} from "../../Styles"
import {Outlet} from "react-router-dom"

const Website = () => {
  return (
    <>
    <Header />
    <AppContainer>
        <Outlet />
    </AppContainer>
    <Footer />
    </>
  )
}

export default Website