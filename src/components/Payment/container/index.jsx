import {Outlet} from "react-router-dom"
import {Page, Content} from "./styles"
import Logo from "../../SVG/LogoMark"


const Index = () => {
  return (
    <Page>
      <Logo className="logo" />
      <Content>
        <Outlet />
      </Content>
    </Page>
  )
}

export default Index