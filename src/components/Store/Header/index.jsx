import {FaInstagram, FaPhone, FaWhatsapp, FaSearch} from "react-icons/fa"
import {Head, Logo, FlexContainer, Top, Socials, Social, Search, SearchInput, Cart} from "./styles"
import logo from "../../../assets/storelinkLogo.png"
import CartLogo from "../../SVG/CartLogo"


const Header = ({setCart, data}) => {
  
  const {name, address, imageurl, instagram, registrar} = data.details
  const handleCart = () => {
    setCart(true)
  }
  return (
    <Head>
      <Top>
        <Logo>
          <img src={`${process.env.REACT_APP_IMG_URI}${imageurl}`} alt="logo" />
          
          <div className="info">
            <h3 className="info__name">{name}</h3>
            <p className="info__location">Location: {address}</p>
          </div>
        </Logo>
        <CartLogo onClick={()=>handleCart()} />
      </Top>
      <FlexContainer>
        <Socials>
          <Social href={instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </Social>
          <Social href={`tel:${registrar}`}>
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