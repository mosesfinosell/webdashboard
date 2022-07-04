import {FaInstagram, FaPhone, FaWhatsapp, FaSearch} from "react-icons/fa"
import {Head, Logo, FlexContainer, Top, Socials, Social, Search, SearchInput, Cart} from "./styles"
import logo from "../../../assets/storelinkLogo.png"
import CartLogo from "../../SVG/CartLogo"


const Header = ({setCart, data}) => {
  // console.log("Store", data.details)
  // const {name, address, imageurl} = data.details
  const handleCart = () => {
    setCart(true)
  }
  return (
    <Head>
      <Top>
        <Logo>
          {/* <img src={`${process.env.REACT_APP_IMG_URI}${imageurl}`} alt="logo" /> */}
          <img src={logo} alt="logo" />
          <div className="info">
            <h3 className="info__name">Chef Food House</h3>
            <p className="info__location">Location: Iwo Road</p>
          </div>
        </Logo>
        <CartLogo onClick={()=>handleCart()} />
      </Top>
      <FlexContainer>
        <Socials>
          <Social>
            <FaInstagram />
          </Social>
          <Social>
            <FaPhone />
          </Social>
          <Social>
            <FaWhatsapp />
          </Social>
          <Cart onClick={()=>handleCart()}>
            <CartLogo />
            <span>Cart</span>
          </Cart>
        </Socials>
        <Search>
          <FaSearch />
          
          <SearchInput placeholder="What are you shopping for?" />
        </Search>
      </FlexContainer>
    </Head>
  )
}

export default Header