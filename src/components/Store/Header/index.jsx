import {useState, useCallback} from "react"
import {useDispatch} from "react-redux"
import {FaInstagram, FaPhone, FaWhatsapp, FaSearch} from "react-icons/fa"
import {setSearch} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import {Head, Logo, FlexContainer, Top, Socials, Social, Search, SearchInput, Cart} from "./styles"
import logo from "../../../assets/storelinkLogo.png"
import CartLogo from "../../SVG/CartLogo"
import debounce from "lodash/debounce"



const Header = ({setCart, data}) => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const {name, address, imageurl, instagram, registrar} = data.details
  const handleCart = () => {
    setCart(true)
  }
  const handleDebounce = (e)=>{
    alert(e.target.value)
    setSearch(dispatch, e.target.value)
  }

  let debouncer = useCallback(debounce(handleDebounce, 1200), [])
  

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
          <SearchInput onChange={(e)=>{debouncer(e)}} placeholder="What are you shopping for?" />
        </Search>
      </FlexContainer>
    </Head>
  )
}

export default Header